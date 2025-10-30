'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function LoginErrorBanner() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  if (!error) return null;
  return (
    <div className="rounded-md bg-red-50 p-4 border border-red-200">
      <p className="text-sm text-red-700">
        Sign-in error: <span className="font-mono">{error}</span>. Try clearing cookies for
        localhost, and ensure Azure env vars and redirect URI are correct.
      </p>
    </div>
  );
}

export default function LoginPage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const handleSignIn = async () => {
    await signIn('azure-ad', { callbackUrl: '/home' });
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto flex justify-center">
            <Image
              unoptimized
              src="/img/ssai_logo.png"
              alt="SSAI Logo"
              width={200}
              height={200}
              priority
            />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {session ? 'You are signed in' : 'Sign in to your account'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {session
              ? `Signed in as ${session.user?.email || session.user?.name || 'User'}`
              : 'Use your Azure AD credentials to access the portal'}
          </p>
        </div>
        <Suspense fallback={null}>
          <LoginErrorBanner />
        </Suspense>
        <div className="mt-8 space-y-6">
          {session ? (
            <div className="space-y-4">
              <button
                onClick={handleSignOut}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition duration-150 ease-in-out"
              >
                Sign out
              </button>
              <a href="/home" className="block text-center text-blue-600 hover:text-blue-700">
                Go to Home
              </a>
            </div>
          ) : (
            <div>
              <button
                onClick={handleSignIn}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in with Azure AD
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
