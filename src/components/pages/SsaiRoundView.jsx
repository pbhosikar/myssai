'use client';

import cardsData from '../../lib/ssaiRoundupCards.json';

export default function SsaiRoundView() {
  const cards = cardsData;

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded shadow overflow-hidden">
            {/* Legacy-like card layout */}
            <img alt="" className="w-full object-cover" style={{ aspectRatio: '1 / 1' }} src={card.src} />
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
