'use client';

export default function CompanyTravelView() {
  const bannerUrl = '/img/business-banner.jpg';
  return (
    <main>
      {/* Banner */}
      <div
        style={{
          backgroundImage: `url(${bannerUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '280px',
        }}
        className="w-full"
      >
        <div className="mx-auto max-w-7xl w-full px-4 py-8">
          <h1 className="text-3xl font-semibold text-white drop-shadow-md">Travel</h1>
          <p
            className="text-gray-700 mt-4"
            style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#ffffff' }}
          >
            Welcome to SSAI's Travel portal! Here you can find information about our corporate
            travel policies, print Auto ID cards for travel, and access the email and phone number
            of our travel agency.
          </p>
          <p
            className="mt-2 text-gray-700 mt-4"
            style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#ffffff' }}
          >
            This section also lists the car rental companies we partner with, along with the hotels
            where we have corporate rates.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl w-full px-4 py-8">
        {/* Intro */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column (main content) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Travel Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Travel Information</h2>
              <div className="mt-3 text-gray-700 space-y-3">
                <p>
                  SSAI wants to ensure that all corporate travel happens seamlessly and without any
                  complications. To that end, the company has developed travel regulations that
                  govern NASA-related travel, both here in the United States and abroad.
                </p>
                <p>
                  For domestic travel, you must fill out a Travel Request Form 30 days in advance.
                </p>
                <p>
                  For international travel, you must fill out a Travel Request Form 60 days in
                  advance.
                </p>

                <p className="font-semibold">Corporate Hotel Rates</p>
                <p>
                  You will simply need to launch the link above, select the dates of stay, and
                  choose the
                  <span className="font-semibold"> corporate account</span> option. This reflects
                  the negotiated discount. The rate for this is the Government per diem for the area
                  depending on the time of year.
                </p>
                <p className="font-semibold">Courtyard Marriott in Bowie</p>
                <p>
                  Select <span className="font-semibold">Special Rates</span>, choose the{' '}
                  <span className="font-semibold">Corp/Promo Code</span>, which is
                  <span className="font-semibold"> S7Z</span>. The rate will be{' '}
                  <span className="font-semibold">$154 a night</span>.
                </p>
              </div>
            </section>

            {/* Concur Account Registration */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Concur Account Registration</h2>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
                <div className="md:col-span-3 space-y-4">
                  <img
                    src="/img/concur-logo-F866D9D47F-seeklogo.com (1).png"
                    alt="Concur logo"
                    className="w-48"
                  />
                  <img
                    src="/img/Screenshot.png"
                    alt="Concur registration screenshot"
                    className="max-w-full h-auto rounded-md shadow"
                  />
                </div>
                <div className="md:col-span-2 break-words">
                  <p className="text-gray-700 mb-2">
                    To register for Concur, follow these general steps:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                      1) Access the registration page:&nbsp;
                      <a
                        className="text-blue-600 hover:underline break-all"
                        href="https://www.concursolutions.com/registration/register_form.asp?regcode=39G77EEF2N"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.concursolutions.com/registration/register_form.asp?regcode=39G77EEF2N
                      </a>
                    </li>
                    <li>Items marked with an * are required.</li>
                    <li>
                      2) Account Information: Concur Login:* Enter your corporate email address.
                    </li>
                    <li>
                      3) Contact Information: Fill out the personal information section of your
                      profile.
                    </li>
                    <li>4) Home Address.</li>
                    <li>5) Configuration Settings: Set your Time Zone* and Date Format*.</li>
                    <li>6) Click Submit: Once approved, you'll receive a confirmation email.</li>
                  </ul>
                  <p className="mt-3 text-gray-700">
                    For any questions or issues during the registration process click
                    <a
                      className="ml-1 text-blue-600 hover:underline"
                      href="https://ssaihq.box.com/s/hocwhthpys1gwwmlha8nywlkd6lfhqz8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Concur Registration Help
                    </a>
                    , or reach out to
                    <a
                      className="ml-1 text-blue-600 hover:underline"
                      href="mailto:it_help@ssaihq.com"
                    >
                      it_help@ssaihq.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* Travel Policy summary (key points) */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Travel Policy</h2>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Company travel must conform to GSA Per Diem limits:
                  <a
                    className="ml-1 text-blue-600 hover:underline"
                    href="https://www.gsa.gov/travel/plan-book/per-diem-rates"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GSA Per Diem Rates
                  </a>
                  .
                </li>
                <li>Local travel: within 35 miles of work location; no overnight stay.</li>
                <li>Non-local travel: beyond 35 miles or with an overnight stay.</li>
                <li>Local travel expenses should be submitted via Deltek Time & Expense.</li>
                <li>Air travel should be coach/economy unless accommodation is approved.</li>
              </ul>

              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Car Rental Corporate Discount Codes
                </h3>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>
                    <span className="font-semibold">Avis</span> - L493221
                  </li>
                  <li>
                    <span className="font-semibold">National/Enterprise</span> - XZ16L86
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  CI Azumano Travel Company Information
                </h3>
                <p className="mt-2 text-gray-700">
                  <span className="font-semibold">Phone</span>: 1-855-873-7784
                  <br />
                  <span className="font-semibold">Email</span>:{' '}
                  <a
                    className="text-blue-600 hover:underline"
                    href="mailto:sciencesystems@ciazumano.com"
                  >
                    sciencesystems@ciazumano.com
                  </a>
                  <br />
                  <span className="font-semibold">Hours</span>: Monday–Friday, 8:00am–8:00pm
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">How to file an Auto claim</h3>
                <p className="mt-2 text-gray-700">
                  Call <span className="font-semibold">(877) 262-2727</span>.
                </p>
                <p className="text-gray-700">
                  Select option 2 (new claim), option 1 (Auto claim), then option 2 (non-glass only
                  Auto claim). Have SSAI’s Auto policy number
                  <span className="font-semibold"> BUA 7036417211</span> ready.
                </p>
              </div>
            </section>
          </div>

          {/* Right column (sidebar) */}
          <aside className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Meet the Team</h2>
              <div className="mt-4 space-y-6">
                {/* Amy Duke */}
                <div className="flex items-start gap-4">
                  <img
                    src="/img/amydukeheadshot.png"
                    alt="Amy Duke"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-900">Amy Duke</p>
                    <p className="text-gray-700">Administrative Analyst I</p>
                    <a className="text-blue-600 hover:underline" href="mailto:amy.duke@ssaihq.com">
                      amy.duke@ssaihq.com
                    </a>
                  </div>
                </div>
                {/* Teresa Peach */}
                <div className="flex items-start gap-4">
                  <img
                    src="/img/istockphoto-1131164548-612x612.jpg"
                    alt="Teresa Peach"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-900">Teresa Peach</p>
                    <p className="text-gray-700">HBG Lead Administrative Analyst</p>
                    <a
                      className="text-blue-600 hover:underline"
                      href="mailto:teresa.peach@ssaihq.com"
                    >
                      teresa.peach@ssaihq.com
                    </a>
                  </div>
                </div>
                {/* Cassie Lehnhardt */}
                <div className="flex items-start gap-4">
                  <img
                    src="/img/istockphoto-1131164548-612x612.jpg"
                    alt="Cassie Lehnhardt"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-900">Cassie Lehnhardt</p>
                    <p className="text-gray-700">Travel Admin for SAMDA</p>
                    <a
                      className="text-blue-600 hover:underline"
                      href="mailto:cassie.lehnhardt@ssaihq.com"
                    >
                      cassie.lehnhardt@ssaihq.com
                    </a>
                  </div>
                </div>
                {/* Taquitha Crabbe */}
                <div className="flex items-start gap-4">
                  <img
                    src="/img/istockphoto-1131164548-612x612.jpg"
                    alt="Taquitha Crabbe"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xl font-semibold text-gray-900">Taquitha Crabbe</p>
                    <p className="text-gray-700">Travel Admin for HBG</p>
                    <a
                      className="text-blue-600 hover:underline"
                      href="mailto:taquitha.crabbe@ssaihq.com"
                    >
                      taquitha.crabbe@ssaihq.com
                    </a>
                  </div>
                </div>
              </div>
              {/* Travel Links */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900">Travel Links</h2>
                <ul className="mt-4 divide-y divide-gray-200 border border-gray-200 rounded-md">
                  <li className="p-3">
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://ssaihq.app.box.com/file/1751511767770"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Travel Request Form
                    </a>
                  </li>
                  <li className="p-3">
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://ssaihq.box.com/s/io2s4tirv82nw1covh9mo56b2g471ikk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Auto ID Card
                    </a>
                    <p className="text-sm text-gray-600">
                      Maryland Insurance Identification Card — Expires: 01/01/2026
                    </p>
                  </li>
                  <li className="p-3">
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://fr.ssai.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voucher (eForm)
                    </a>
                  </li>
                  <li className="p-3">
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://ssaihq.box.com/s/7hznlqxh5c2b39de055v9uf868gvc0l8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      25ACCT - Trip Report
                    </a>
                  </li>
                  <li className="p-3">
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://www.concursolutions.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Concur
                    </a>
                    <p className="text-sm text-gray-600">
                      Book airfare, hotel, and rental vehicle through the corporate travel site.
                    </p>
                  </li>
                </ul>
              </section>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
