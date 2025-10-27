import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';
import { randomUUID } from 'crypto';

export const runtime = 'nodejs';

// Export authOptions so server components can introspect configuration if needed
export const authOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    }),
  ],
  // Add detailed logger hooks
  logger: {
    error(code, metadata) {
      console.error('[nextauth-logger-error]', code, metadata);
    },
    warn(code, metadata) {
      console.warn('[nextauth-logger-warn]', code, metadata);
    },
    debug(code, metadata) {
      console.debug('[nextauth-logger-debug]', code, metadata);
    },
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        console.log('[nextauth-callback-jwt]', {
          provider: account.provider,
          hasAccessToken: Boolean(account.access_token),
        });
        token.accessToken = account.access_token;
        token.id = profile?.sub;
      }
      return token;
    },
    async session({ session, token }) {
      console.log('[nextauth-callback-session]', {
        hasAccessToken: Boolean(token.accessToken),
        userId: token.id,
      });
      session.accessToken = token.accessToken;
      if (session.user) session.user.id = token.id;
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log('[nextauth-callback-redirect]', { url, baseUrl });
      // Optional diagnostics redirect to inspect environment and headers
      if (process.env.NEXTAUTH_DEBUG_REDIRECT === 'true') {
        const debugUrl = new URL('/login/diagnostics', baseUrl);
        debugUrl.searchParams.set('redirectUrl', url);
        return debugUrl.toString();
      }
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      if (url.startsWith(baseUrl)) return url;
      return baseUrl;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log('[nextauth-callback-signIn]', {
        provider: account?.provider,
        hasAccessToken: Boolean(account?.access_token),
        email: user?.email || email,
      });
      return true;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  trustHost: true,
  debug: process.env.NEXTAUTH_DEBUG === 'true' || process.env.NODE_ENV !== 'production',
  events: {
    async signIn(message) {
      console.log('[nextauth-event-signIn]', message);
    },
    async session(message) {
      console.log('[nextauth-event-session]', message);
    },
    async error(message) {
      console.error('[nextauth-error]', message);
    },
  },
};

// Log env presence and computed redirect URI at init
try {
  const nextauthUrl = process.env.NEXTAUTH_URL || null;
  const tenantId = process.env.AZURE_AD_TENANT_ID || null;
  const redirectUri = nextauthUrl
    ? new URL('/api/auth/callback/azure-ad', nextauthUrl).toString()
    : null;
  console.log('[nextauth-init]', {
    NEXTAUTH_URL: nextauthUrl,
    NEXTAUTH_SECRET_PRESENT: !!process.env.NEXTAUTH_SECRET,
    AZURE_AD_CLIENT_ID_PRESENT: !!process.env.AZURE_AD_CLIENT_ID,
    AZURE_AD_CLIENT_SECRET_PRESENT: !!process.env.AZURE_AD_CLIENT_SECRET,
    AZURE_AD_TENANT_ID: tenantId,
    computedRedirectUri: redirectUri,
  });
} catch (e) {
  console.warn('[nextauth-init-warn]', 'Failed to compute redirect URI', e);
}

const handler = NextAuth(authOptions);

// Request header logging for debugging 502/proxy issues
function logAuthRequest(req, correlationId) {
  try {
    const u = new URL(req.url);
    const headers = req.headers;
    const info = {
      correlationId,
      url: req.url,
      path: u.pathname,
      method: req.method,
      host: headers.get('host'),
      xForwardedHost: headers.get('x-forwarded-host'),
      xForwardedProto: headers.get('x-forwarded-proto'),
      xForwardedPort: headers.get('x-forwarded-port'),
      xRealIp: headers.get('x-real-ip'),
      referer: headers.get('referer'),
      // Callback query params from Azure
      code: u.searchParams.get('code'),
      state: u.searchParams.get('state'),
      session_state: u.searchParams.get('session_state'),
      error: u.searchParams.get('error'),
      error_description: u.searchParams.get('error_description'),
      // Env snapshot
      nextauthUrl: process.env.NEXTAUTH_URL || null,
      trustHost: true,
    };
    console.log('[nextauth-request]', info);
  } catch (e) {
    console.warn('[nextauth-request-warn]', { correlationId, error: String(e) });
  }
}

// New: echo headers/util endpoint served within NextAuth route for /api/auth/echo-headers
function echoHeadersResponse(req) {
  const u = new URL(req.url);
  const correlationId = req.headers.get('x-correlation-id') || randomUUID();
  const headersObj = {};
  for (const [k, v] of req.headers.entries()) headersObj[k] = v;
  return Response.json({
    correlationId,
    method: req.method,
    url: req.url,
    path: u.pathname,
    query: Object.fromEntries(u.searchParams.entries()),
    headers: {
      host: headersObj['host'] || null,
      xForwardedHost: headersObj['x-forwarded-host'] || null,
      xForwardedProto: headersObj['x-forwarded-proto'] || null,
      xForwardedPort: headersObj['x-forwarded-port'] || null,
      xRealIp: headersObj['x-real-ip'] || null,
      userAgent: headersObj['user-agent'] || null,
      all: headersObj,
    },
    env: {
      NEXTAUTH_URL: process.env.NEXTAUTH_URL || null,
      NODE_ENV: process.env.NODE_ENV || null,
      PORT: process.env.PORT || null,
    },
  });
}

export async function GET(req, ctx) {
  const u = new URL(req.url);
  if (u.pathname.endsWith('/echo-headers')) {
    return echoHeadersResponse(req);
  }
  const correlationId = randomUUID();
  logAuthRequest(req, correlationId);
  try {
    const res = await handler(req, ctx);
    try { res.headers.set('x-request-id', correlationId); } catch {}
    return res;
  } catch (e) {
    console.error('[nextauth-handler-error]', { correlationId, error: String(e) });
    throw e;
  }
}

export async function POST(req, ctx) {
  const u = new URL(req.url);
  if (u.pathname.endsWith('/echo-headers')) {
    return echoHeadersResponse(req);
  }
  const correlationId = randomUUID();
  logAuthRequest(req, correlationId);
  try {
    const res = await handler(req, ctx);
    try { res.headers.set('x-request-id', correlationId); } catch {}
    return res;
  } catch (e) {
    console.error('[nextauth-handler-error]', { correlationId, error: String(e) });
    throw e;
  }
}