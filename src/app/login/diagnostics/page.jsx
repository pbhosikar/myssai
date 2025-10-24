import React from 'react'
import DiagnosticsClient from '@/components/DiagnosticsClient'

export const metadata = {
  title: 'Auth Diagnostics',
  description: 'Verify NextAuth and Azure AD environment configuration without exposing secrets',
}

export default function AuthDiagnosticsPage() {
  const envChecks = [
    { key: 'NEXTAUTH_URL', value: process.env.NEXTAUTH_URL || null, showValue: true },
    { key: 'NEXTAUTH_SECRET', present: !!process.env.NEXTAUTH_SECRET },
    { key: 'AZURE_AD_CLIENT_ID', present: !!process.env.AZURE_AD_CLIENT_ID },
    { key: 'AZURE_AD_CLIENT_SECRET', present: !!process.env.AZURE_AD_CLIENT_SECRET },
    { key: 'AZURE_AD_TENANT_ID', present: !!process.env.AZURE_AD_TENANT_ID },
  ]

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Auth Diagnostics</h1>
        <p className="text-sm text-gray-600 mb-6">
          This page helps verify Azure AD and NextAuth configuration. Secrets are not displayed; only presence is shown.
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
        </div>

        <DiagnosticsClient />

        <div className="mt-8 text-xs text-gray-500">
          <p>
            Note: If any required env is missing, update your staging environment and restart the app. Ensure Azure Portal has
            the redirect URI set to <code className="font-mono">https://mystage.ssai.app/api/auth/callback/azure-ad</code>.
          </p>
        </div>
      </div>
    </div>
  )
}