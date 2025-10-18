'use client';

import rights from '../../lib/employeeRights.json';

export default function HREmployeeRightsView() {
  const items = rights || [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-gray-900">Employee Rights</h1>
      <p className="mt-3 text-gray-600">
        Click a card to open the official poster or policy link.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title || 'Employee Rights'}
            className="bg-white rounded-lg shadow-md overflow-hidden block border border-gray-200 hover:border-blue-400 transition-colors hover:shadow-lg hover:-translate-y-0.5 transform"
          >
            {/* Enlarged image area for better visibility */}
            <div className="bg-gray-50 p-2 h-64 flex items-center justify-center">
              <img
                src={item.src || '/file.svg'}
                alt={item.title || 'Employee Rights'}
                className="h-full w-auto max-w-full object-contain"
                loading="lazy"
                decoding="async"
                onError={(e) => { e.currentTarget.src = '/file.svg'; }}
              />
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-900 font-medium">
                {item.title}
              </p>
              {item.category && (
                <p className="text-sm text-gray-600 mt-1">{item.category}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}