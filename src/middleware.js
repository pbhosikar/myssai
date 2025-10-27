import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

const isProd = process.env.NODE_ENV === 'production';

// Unified middleware with diagnostic logging
export default async function middleware(req) {
  const { pathname, href } = req.nextUrl || {};
  const host = req.headers.get('host');
  const proto = req.headers.get('x-forwarded-proto');
  const forwardedHost = req.headers.get('x-forwarded-host');
  const forwardedPort = req.headers.get('x-forwarded-port');
  const realIp = req.headers.get('x-real-ip');
  const ua = req.headers.get('user-agent');

  if (pathname?.startsWith('/api/auth') || pathname === '/login') {
    console.log('[middleware-request]', {
      pathname,
      href,
      host,
      proto,
      forwardedHost,
      forwardedPort,
      realIp,
      ua,
    });
  }

  if (isProd) {
    const authMw = withAuth({ pages: { signIn: '/login' } });
    return authMw(req);
  }

  // In development, skip auth protection to avoid NextAuth configuration errors
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/((?!api/auth|login|_next/static|_next/image|favicon.ico|img|css|css-assets|webfonts).*)',
  ],
};