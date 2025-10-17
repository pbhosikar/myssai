'use client';

export default function CompanyStrategyView() {
  return (
    <main className="">
      {/* Hero / Header */}
      <div
        style={{
          backgroundImage: `url('/img/space-so-cool.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '280px',
        }}
        className="w-full"
      >
        <div className="mx-auto max-w-7xl w-full px-4 py-8">
          <h2 className="text-3xl font-semibold text-white drop-shadow-md mt-5">
            Strategic Planning
          </h2>
          <p
            className="text-gray-700 mt-4"
            style={{ fontSize: '1.125rem', lineHeight: '1.75rem', color: '#ffffff' }}
          >
            In late 2022, the SSAI executive leadership team began a review of our corporate
            strategy and goals. Facing many changes and challenges over the past several years
            including COVID-19, executive leadership turnover, and significant changes with NASA
            plus the civil space industry, we concluded it was time for a complete relook of our
            mission, vision, values, and strategic goals.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto max-w-7xl w-full px-4 py-8">
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left: Six Pillars */}
          <div className="lg:col-span-2">
            <section className="">
              <h2 className="text-2xl font-semibold text-gray-900">Six Pillars</h2>

              {/* People */}
              <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="md:col-span-1">
                  <img
                    src="/img/Screenshot 2024-04-04 at 10.25.48 AM (6).png"
                    alt="People pillar diagram"
                    className="w-full rounded-md object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900">People</h3>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                    <li>Strengthen our employees' passion for SSAI's mission.</li>
                    <li>Create a learning culture and encourage a growth mindset.</li>
                    <li>Develop and strengthen the succession planning strategy.</li>
                    <li>
                      Drive leadership behavior focused on developing internal capabilities to
                      ensure employee alignment around SSAI's strategic plan, mission, vision, and
                      values.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technical Capabilities */}
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="md:col-span-1">
                  <img
                    src="/img/Screenshot 2024-04-04 at 10.39.41 AM.png"
                    alt="Technical capabilities pillar diagram"
                    className="w-full rounded-md object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900">Technical Capabilities</h3>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Create technical capabilities independently from programmatic structure, while
                      retaining program managers’ ability to execute their programs.
                    </li>
                    <li>Expand SSAI’s presence in planetary exploration and science.</li>
                    <li>Develop a cable harnessing manufacturing enterprise.</li>
                    <li>
                      Undergo a steady and continuous internal renovation process to retain and grow
                      existing capabilities.
                    </li>
                    <li>
                      Identify and acquire emerging technology trends and proprietary solutions to
                      competitively position SSAI.
                    </li>
                    <li>
                      Leverage existing capabilities and NASA products to create commercial
                      opportunities.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Growth */}
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="md:col-span-1">
                  <img
                    src="/img/Screenshot 2024-04-04 at 10.25.53 AM (2).png"
                    alt="Growth pillar diagram"
                    className="w-full rounded-md object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900">Growth</h3>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Successfully recapture current prime contracts to maintain our core
                      capabilities.
                    </li>
                    <li>
                      Build Business Development capacity to support growth goals and successfully
                      compete in chosen market verticals.
                    </li>
                    <li>
                      Build upon our current capabilities and diversify client base into the
                      commercial space sector.
                    </li>
                    <li>
                      Diversify GovCon client base beyond our current core NASA customer base in
                      sectors that show significant growth potential.
                    </li>
                    <li>
                      Grow strategic partnerships to allow SSAI to compete as a large business while
                      retaining access to small business set-asides.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Operations */}
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="md:col-span-1">
                  <img
                    src="/img/Screenshot 2024-04-04 at 10.25.54 AM.png"
                    alt="Operations pillar diagram"
                    className="w-full rounded-md object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900">Operations</h3>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Improve and document processes to ensure highly successful and efficient
                      business operations.
                    </li>
                    <li>Establish key performance metrics to support decision-making.</li>
                    <li>
                      Ensure highly effective operations through robust business systems and leaders
                      who are properly trained, aligned, and motivated for success.
                    </li>
                    <li>
                      Provide leaders easy access to decision-quality information using effective
                      systems and technologies.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Communications */}
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="md:col-span-1">
                  <img
                    src="/img/Screenshot 2024-04-04 at 10.25.56 AM.png"
                    alt="Communications pillar diagram"
                    className="w-full rounded-md object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900">Communications</h3>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Create clear and consistent key messaging, brand identity standards, and
                      guidelines that reinforce SSAI’s brand and strategic position.
                    </li>
                    <li>
                      Expand awareness of the SSAI brand and positive perception through corporate
                      advertising, sponsorships, and compelling content on SSAIHQ.com, SSAI Connect,
                      and third-party platforms.
                    </li>
                    <li>
                      Increase employee engagement through improved technology and communication to
                      create a better understanding of SSAI, our strategy, financial and operating
                      strengths, and strategic initiatives.
                    </li>
                    <li>
                      Position SSAI as a thought leader by developing relationships with key press,
                      influencers, and partners to generate coverage of SSAI and our capabilities.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Corporate Social Responsibility */}
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="md:col-span-1">
                  <img
                    src="/img/Screenshot 2024-04-04 at 10.25.58 AM.png"
                    alt="Corporate Social Responsibility pillar diagram"
                    className="w-full rounded-md object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Corporate Social Responsibility
                  </h3>
                  <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
                    <li>Develop a Corporate Social Responsibility (CSR) Plan and strategy.</li>
                    <li>
                      Expand relationships with local schools to provide value-added programs for
                      students, parents, and teachers.
                    </li>
                    <li>Create a platform for employees to get involved and volunteer.</li>
                    <li>
                      Create an annual CSR report (and/or video) to promote SSAI’s outreach efforts
                      and success.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right: Strategy Leadership */}
          <aside className="lg:col-span-1">
            <section className="">
              <h2 className="text-xl font-semibold text-gray-900">Strategy Leadership</h2>

              {/* Chris Williamson */}
              <div className="mt-4 flex items-start gap-4">
                <img
                  src="/img/Chris Williamson.jpg"
                  alt="Chris Williamson headshot"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div className="text-sm text-gray-700">
                  <div className="text-lg font-medium text-gray-900">Chris Williamson</div>
                  <div>Chief Strategy Officer (CSO)</div>
                  <div>Mobile: 757-268-1533</div>
                  <div>
                    Email:{' '}
                    <a
                      className="text-blue-600 hover:underline"
                      href="mailto:chris.williamson@ssaihq.com"
                    >
                      chris.williamson@ssaihq.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Keith Duffy */}
              <div className="mt-6 flex items-start gap-4">
                <img
                  src="/img/Screenshot 2024-09-04 at 1.10.57 PM (1).png"
                  alt="Keith Duffy headshot"
                  className="h-20 w-20 rounded-full object-cover"
                />
                <div className="text-sm text-gray-700">
                  <div className="text-lg font-medium text-gray-900">Keith Duffy</div>
                  <div>Assistant Chief Strategy Officer</div>
                  <div>
                    Email:{' '}
                    <a
                      className="text-blue-600 hover:underline"
                      href="mailto:keith.duffy@ssaihq.com"
                    >
                      keith.duffy@ssaihq.com
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
