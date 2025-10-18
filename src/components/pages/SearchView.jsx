'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SearchView() {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const initial = searchParams.get('q') || '';
    setQuery(initial);
  }, [searchParams]);

  const onSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setSearchParams({ q });
  };

  const qParam = searchParams.get('q') || '';

  return (
    <main className="container mx-auto max-w-4xl px-4 py-16">
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-semibold text-gray-900">Search</h1>
        <p className="mt-3 text-sm text-gray-600">Type a term and press Search.</p>
        <form onSubmit={onSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            name="q"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="input input-bordered w-full text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
            style={{ border: '1px solid gray' }}
          />
          <button
            type="submit"
            style={{ backgroundColor: '#007bff', color: '#fff' }}
            className="btn btn-primary"
          >
            Search
          </button>
        </form>
        {qParam && (
          <div className="mt-6 text-sm text-gray-700">
            Showing results for: <span className="font-medium text-black">{qParam}</span>
          </div>
        )}
      </section>
    </main>
  );
}
