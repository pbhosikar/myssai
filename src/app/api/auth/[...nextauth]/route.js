import NextAuth from 'next-auth';
import AzureADProvider from 'next-auth/providers/azure-ad';

export const runtime = 'nodejs';

const handler = NextAuth({
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
      // Persist the OAuth access_token and or the user id to the token right after signin
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
      // Send properties to the client, like an access_token and user id from a provider.
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
      // Minimal server-side logging to help diagnose 5xx during callback
      console.error('[nextauth-error]', message);
    },
  },
});

export { handler as GET, handler as POST };