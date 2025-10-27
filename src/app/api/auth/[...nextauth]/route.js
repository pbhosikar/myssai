import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

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
export { handler as GET, handler as POST };