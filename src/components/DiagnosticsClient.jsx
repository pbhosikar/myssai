'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function DiagnosticsClient() {
  const { data: session, status } = useSession()

  const handleSignIn = async () => {
    await signIn('azure-ad', { callbackUrl: '/home' })
  }

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/login' })
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
      <h2 className="text-lg font-semibold mb-3">Session Status</h2>
      <div className="text-sm mb-4">
        <p>
          Status: <span className="font-mono">{status}</span>
        </p>
        {session ? (
          <div className="mt-2">
            <p>
              Signed in as{' '}
              <span className="font-mono">{session.user?.email || session.user?.name || 'User'}</span>
            </p>
            {session.accessToken && (
              <p className="mt-1 text-gray-600">Access token present</p>
            )}
          </div>
        ) : (
          <p className="mt-2">You are not signed in.</p>
        )}
      </div>

      <div className="flex gap-2">
        {session ? (
          <button
            onClick={handleSignOut}
            className="px-3 py-2 text-sm rounded-md text-white bg-gray-800 hover:bg-gray-700"
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={handleSignIn}
            className="px-3 py-2 text-sm rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign in with Azure AD
          </button>
        )}
      </div>
    </div>
  )
}