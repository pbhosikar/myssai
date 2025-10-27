import { headers } from 'next/headers'
import { randomUUID } from 'crypto'

export const runtime = 'nodejs'

export async function GET() {
  const id = randomUUID()
  const hdrs = headers()
  const info = {
    ok: true,
    requestId: id,
    now: new Date().toISOString(),
    headers: {
      host: hdrs.get('host'),
      xForwardedHost: hdrs.get('x-forwarded-host'),
      xForwardedProto: hdrs.get('x-forwarded-proto'),
      xForwardedPort: hdrs.get('x-forwarded-port'),
      xRealIp: hdrs.get('x-real-ip'),
      referer: hdrs.get('referer'),
      userAgent: hdrs.get('user-agent'),
    },
    env: {
      NODE_ENV: process.env.NODE_ENV || null,
      NEXTAUTH_URL: process.env.NEXTAUTH_URL || null,
      NEXTAUTH_TRUST_HOST: process.env.NEXTAUTH_TRUST_HOST || null,
      PORT: process.env.PORT || null,
    },
  }
  const res = new Response(JSON.stringify(info, null, 2), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'x-request-id': id,
    },
  })
  return res
}