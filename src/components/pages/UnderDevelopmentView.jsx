'use client';
import ClientLink from '@/components/ClientLink';

export default function UnderDevelopmentView() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-900">Under Development</h1>
        <p className="mt-3 text-gray-600">
          This page is currently under development. Please check back later.
        </p>
        <div className="mt-6">
          <ClientLink className="btn btn-primary" to="/home" role="link">
            Go to Home
          </ClientLink>
        </div>
      </section>
    </main>
  );
}