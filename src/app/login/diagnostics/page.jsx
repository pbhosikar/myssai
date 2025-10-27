export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Auth Diagnostics',
  description: 'Verify NextAuth and Azure AD environment configuration without exposing secrets',
}

async function getProviders() {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL || ''}/api/auth/providers`, { cache: 'no-store' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
  } catch (e) {
    return { error: String(e) }
  }
}

async function getAzureWellKnown() {
  try {
    const tenant = process.env.AZURE_AD_TENANT_ID
    if (!tenant) return { error: 'AZURE_AD_TENANT_ID missing' }
    const url = `https://login.microsoftonline.com/${tenant}/v2.0/.well-known/openid-configuration`
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = await res.json()
    return {
      issuer: json.issuer,
      authorization_endpoint: json.authorization_endpoint,
      token_endpoint: json.token_endpoint,
    }
  } catch (e) {
    return { error: String(e) }
  }
}

export default async function AuthDiagnosticsPage() {
  const nextauthUrl = process.env.NEXTAUTH_URL || null
  const redirectUri = nextauthUrl ? new URL('/api/auth/callback/azure-ad', nextauthUrl).toString() : null
  const envChecks = [
    { key: 'NEXTAUTH_URL', value: nextauthUrl, showValue: true },
    { key: 'NEXTAUTH_SECRET', present: !!process.env.NEXTAUTH_SECRET },
    { key: 'AZURE_AD_CLIENT_ID', present: !!process.env.AZURE_AD_CLIENT_ID },
    { key: 'AZURE_AD_CLIENT_SECRET', present: !!process.env.AZURE_AD_CLIENT_SECRET },
    { key: 'AZURE_AD_TENANT_ID', value: process.env.AZURE_AD_TENANT_ID || null, showValue: true },
  ]

  const [providers, wellKnown] = await Promise.all([getProviders(), getAzureWellKnown()])

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Auth Diagnostics</h1>
        <p className="text-sm text-gray-600 mb-6">
          Environment presence, computed redirect URI, Azure OpenID discovery, and NextAuth providers.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6">
          <h2 className="text-lg font-semibold mb-3">Environment Checks</h2>
          <ul className="space-y-2">
            {envChecks.map((item) => (
              <li key={item.key} className="flex justify-between items-center">
                <span className="font-mono text-sm">{item.key}</span>
                {item.showValue ? (
                  <span className="text-sm">{item.value ? item.value : 'Not set'}</span>
                ) : (
                  <span className={`text-sm ${item.present ? 'text-green-700' : 'text-red-700'}`}>
                    {item.present ? 'Present' : 'Missing'}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-3 text-sm">
            <p>
              Computed Redirect URI: <span className="font-mono">{redirectUri || 'Cannot compute (NEXTAUTH_URL missing)'}</span>
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <h2 className="text-lg font-semibold mb-3">NextAuth Providers</h2>
            {providers?.error ? (
              <p className="text-sm text-red-700">{providers.error}</p>
            ) : (
              <pre className="text-xs bg-white border border-gray-200 rounded p-2 overflow-auto">{JSON.stringify(providers, null, 2)}</pre>
            )}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
            <h2 className="text-lg font-semibold mb-3">Azure OpenID Discovery</h2>
            {wellKnown?.error ? (
              <p className="text-sm text-red-700">{wellKnown.error}</p>
            ) : (
              <pre className="text-xs bg-white border border-gray-200 rounded p-2 overflow-auto">{JSON.stringify(wellKnown, null, 2)}</pre>
            )}
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          <p>
            Ensure Azure Portal has redirect URI set to <code className="font-mono">{redirectUri || 'N/A'}</code> and that it
            matches your environment.
          </p>
        </div>
      </div>
    </div>
  )
}