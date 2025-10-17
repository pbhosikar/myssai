export const metadata = {
  title: 'My HR - MySSAI',
  description: 'HR contacts, resources, and wellness information for SSAI employees.',
};

export default function MyHRPage() {
  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">My HR</h1>
        <p className="mt-2 text-gray-600">
          Find HR contacts, wellness highlights, and helpful resources.
        </p>
      </header>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cassandra McIntyre */}
          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-16 w-16 rounded-full bg-gray-100" aria-hidden></div>
              <div>
                <div className="text-lg font-medium">Cassandra McIntyre</div>
                <div className="text-sm text-gray-600">
                  Director of HR SSAI and Advanced Mission Partnerships
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              <div>Phone: 301-867-6329</div>
              <div>
                Email:{' '}
                <a
                  href="mailto:cassandra.mcintyre@ssaihq.com"
                  className="text-blue-700 hover:underline"
                >
                  cassandra.mcintyre@ssaihq.com
                </a>
              </div>
            </div>
          </div>

          {/* Josie Pearson */}
          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-16 w-16 rounded-full bg-gray-100" aria-hidden></div>
              <div>
                <div className="text-lg font-medium">Josie Pearson</div>
                <div className="text-sm text-gray-600">Director of Organizational Development</div>
              </div>
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              <div>Phone: 757-951-1607</div>
              <div>
                Email:{' '}
                <a href="mailto:josie.pearson@ssaihq.com" className="text-blue-700 hover:underline">
                  josie.pearson@ssaihq.com
                </a>
              </div>
            </div>
          </div>

          {/* Dacia Newsome */}
          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-16 w-16 rounded-full bg-gray-100" aria-hidden></div>
              <div>
                <div className="text-lg font-medium">Dacia Newsome</div>
                <div className="text-sm text-gray-600">Compensation and Benefits Manager</div>
              </div>
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              <div>Phone: 301-867-2099</div>
              <div>
                Email:{' '}
                <a href="mailto:dacia.newsome@ssaihq.com" className="text-blue-700 hover:underline">
                  dacia.newsome@ssaihq.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Wellness and Benefits Fair 2024 Event Recap
        </h2>
        <div className="text-gray-700 leading-relaxed journal-content-article">
          <p>
            SSAI recently hosted the annual Wellness and Benefits Fair, offering employees a mix of
            <strong> in-person</strong> and <strong> virtual activities</strong> focused on health
            and well-being. Highlights included{' '}
            <strong>
              {' '}
              biometric screenings, flu shots, and massage sessions for in-person attendees
            </strong>
            . Employees also had the chance to join <strong>
              {' '}
              virtual benefits presentations
            </strong>{' '}
            from carriers like
            <strong> Legal Resources, Lincoln, and MetLife</strong>, covering various{' '}
            <strong> health and financial benefits</strong>. Additionally,{' '}
            <strong> wellness sessions</strong> on topics such as the{' '}
            <strong>
              {' '}
              impact of food on mental health, quick healthy recipes, and brain games
            </strong>{' '}
            rounded out the day's activities.
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Riding the Waves of Change BHS Presentation
        </h2>
        <p className="mt-2 text-gray-600">Highlights and materials from the BHS presentation.</p>
      </div>
    </section>
  );
}