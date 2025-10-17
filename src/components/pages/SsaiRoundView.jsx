'use client';

import { useMemo, useState } from 'react';
import cardsData from '../../lib/ssaiRoundupCards.json';

export default function SsaiRoundView() {
  const cards = cardsData;

  // Derive categories present in data, preserve preferred order
  const preferredOrder = ['Employee Spotlights', 'Recent Events/Happenings', 'Days of Recognition'];
  const categories = useMemo(() => {
    const set = new Set(cards.map((c) => c.category).filter(Boolean));
    // ensure only preferred ones, in order
    return preferredOrder.filter((c) => set.has(c));
  }, [cards]);

  const [active, setActive] = useState(categories[0] || null);

  const filtered = useMemo(() => {
    if (!active) return cards;
    return cards.filter((c) => c.category === active);
  }, [cards, active]);

  return (
    <main className="">
      <div
        className="h-48 md:h-64 flex items-center"
        style={{
          backgroundImage: "url('/img/recent-events-banner.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="mx-auto max-w-7xl w-full px-4">
          <h1 className="text-4xl font-bold text-white text-left">SSAI Roundup</h1>
        </div>
      </div>

      {/* Filters */}
      <div className="mx-auto max-w-7xl px-4 pt-8">
        <div className="flex gap-6 border-b">
          {categories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                className={`pb-2 -mb-px text-sm font-semibold focus:outline-none ${
                  isActive ? 'text-black border-b-2 border-blue-500' : 'text-gray-600 border-b-2 border-transparent hover:text-black'
                }`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((card, idx) => (
          <div key={idx} className="bg-white rounded shadow overflow-hidden">
            {/* Legacy-like card layout */}
            <img
              alt=""
              className="w-full object-cover"
              style={{ aspectRatio: '1 / 1' }}
              src={card.src}
            />
            <div className="card-body py-4 px-4">
              <h2 style={{ color: '#000000' }}>
                <span className="clearfix">{card.title}</span>
              </h2>
              <div className="clearfix mb-4"></div>
              <a
                className="link text-blue-600 hover:underline"
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
