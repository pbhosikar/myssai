'use client';

export default function FacilitiesView() {
  const onAvatarError = (e) => {
    e.currentTarget.src = '/img/avatar-placeholder.svg';
    e.currentTarget.onerror = null;
  };
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative h-40 sm:h-52 md:h-64 lg:h-72 overflow-hidden">
        <img
          src="/img/20210607-30750-1job4dh.jpeg"
          alt="Facilities banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-end">
          <div className="mb-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
              Facilities
            </h1>
            <p className="text-white/90 text-sm md:text-base mt-1 max-w-3xl">
              Access facilities forms, learn more about our corporate offices, and contact our
              facilities team.
            </p>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Intro */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <p className="text-sm md:text-base text-gray-700">
                The Facilities team supports you with building and property-related needs, such as
                conference rooms or fleet vehicles. For assistance or questions, please reach out to
                the team members listed on this page.
              </p>
              <p className="text-sm md:text-base text-gray-700">
                We value your input and contact Terrance Sumter (terrance.sumter@ssaihq.com), and
                our help desk (racilities_neip@ssainq.com), when we can neip you
              </p>
            </div>

            {/* Locations */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Locations</h2>
              <div className="space-y-4">
                <div>
                  <img
                    src="/img/20210607-30750-1job4dh.jpeg"
                    alt="Lanham Office"
                    className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">Lanham, MD</h3>
                  <p className="text-sm text-gray-600">10210 Greenbelt Rd, Suite 600</p>
                  <p className="text-sm text-gray-600">Lanham, MD 20706</p>
                  <a
                    href="https://maps.google.com/?q=10210+Greenbelt+Rd+Suite+600+Lanham+MD+20706"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm mt-1 inline-block"
                  >
                    Map Location
                  </a>
                </div>
              </div>
            </div>

            {/* Fleet Vehicles */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Fleet Vehicles</h2>
              <div className="space-y-3">
                <img
                  src="/img/1624653839390.jpeg"
                  alt="Fleet Vehicles"
                  className="w-full  rounded-md"
                />
                <p className="text-sm md:text-base text-gray-700">
                  SSAl has a diverse collection of fleet vehicles! Company staff regularly use these
                  vehicles while traveling to industry events, work sites, and other company
                  functions. If you would like to request the use of a fleet vehicle, please contact
                  Terrance Sumter.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <aside className="space-y-8">
            {/* Meet the Team */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Meet the Team</h2>
              <div className="space-y-5">
                {/* Member 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="/img/Terrance.jpg"
                      alt="Terrance Sumter"
                      className="w-16 h-16 rounded-full object-cover"
                      onError={onAvatarError}
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      Terrance Sumter
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      Assistant Director, Facilities
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">Phone: 301-867-5577</p>
                    <a
                      href="mailto:terrance.sumter@ssaihq.com"
                      className="text-xs sm:text-sm text-blue-600 hover:underline break-all whitespace-nowrap"
                    >
                      terrance.sumter@ssaihq.com
                    </a>
                  </div>
                </div>

                {/* Member 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src="/placeholder.svg"
                      alt="Monica Baines"
                      className="w-16 h-16 rounded-full object-cover"
                      onError={onAvatarError}
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">Monica Baines</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                      Property/Facilities Management
                    </p>
                    <a
                      href="mailto:monica.baines@ssaihq.com"
                      className="text-xs sm:text-sm text-blue-600 hover:underline break-all whitespace-nowrap"
                    >
                      monica.baines@ssaihq.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
