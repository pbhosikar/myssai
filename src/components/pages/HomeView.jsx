'use client';
export default function HomeView() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div
        id="msdd"
        className="lfr-layout-structure-item-f6b4bf1f-ee8c-a188-2240-3294afc15429 lfr-layout-structure-item-container h-64 md:h-96 lg:h-[420px] bg-cover bg-center bg-no-repeat"
        style={{
          ['--background-image-file-entry-id']: 81320,
          ['--lfr-background-image-f6b4bf1f-ee8c-a188-2240-3294afc15429']: "url('/img/website-banner-v6.png')",
          backgroundImage: "url('/img/website-banner-v6.png')",
        }}
      >
        <style>{`
          @media (max-width: 300px) {
            #msdd {
              background-image: url('/img/website-banner-v6.png') !important;
            }
          }
          @media (max-width: 1000px) and (min-width: 300px) {
            #msdd {
              background-image: url('/img/website-banner-v6.png') !important;
            }
          }
        `}</style>
      </div>
      {/* Welcome Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="welcome-header">
            <div className="max-w-4xl mx-auto space-y-4">
              <h1>Welcome Gopal Thakur!!</h1>
              <p style={{ lineHeight: '1.6' }}>
                <span className="text-blue-600 font-semibold">mySSAI</span> is our new, company-wide
                internal-access platform for employees. You can use mySSAI to access resources,
                learn more about who we are as a company, and stay up-to-date with the latest
                company news.
              </p>
              <p className="mt-4" style={{ lineHeight: '1.6' }}>
                SSAI promotes an open-door policy and values transparency with all employees. We
                recognize that employees may encounter issues and may want a trusted person to
                discuss them with. Employees are encouraged to reach out directly to{' '}
                <strong>Human Resources</strong> or to contact{' '}
                <strong>SSAI's Ombudsman, Brij Gambhir</strong>, for support at{' '}
                <strong>brij.gambhir@ssaihq.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Upcoming Events Feed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="component-heading">Upcoming Events Feed</h2>

              {/* Event Cards */}
              <div className="space-y-4">
                {/* PEP Review Event */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow list-group-item">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="event-date">2025-10-01</span>
                    </div>
                    <div className="flex-1 profile-content-column">
                      <h2>Performance Engagement Program (PEP) Review</h2>
                      <div className="journal-content-article space-y-2">
                        <p>
                          On <strong>Wednesday, October 1, 2025</strong>, SSAI will send out this
                          year's <strong>Performance Review</strong> through{' '}
                          <a
                            href="https://workforcenow.adp.com/"
                            className="text-blue-600 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            ADP Workforce Now
                          </a>{' '}
                          to all full-time and part-time employees who were employed as of{' '}
                          <strong>July 1, 2025</strong>.
                        </p>
                        <p>
                          The review schedule includes several key deadlines:{' '}
                          <strong>by September 30</strong>, employees should move any inactive or no
                          longer pursued goals to "Historical" and edit goal titles, descriptions,
                          and timeline milestones; <strong>by October 15</strong>, self-evaluations
                          must be completed, final comments or updates entered, and goals selected
                          for inclusion in the 2025 performance evaluation cycle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bloom Meditation Event */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow list-group-item">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="event-date">2025-09-26</span>
                    </div>
                    <div className="flex-1 profile-content-column">
                      <h2>Bloom Meditation Session</h2>
                      <div className="journal-content-article">
                        <p>
                          There is a{' '}
                          <strong>
                            Bloom Meditation Session occurring on Friday, September 26, 2025, from
                            11:30 AM - 12 PM ET
                          </strong>
                          . This session provides employees with an opportunity to practice
                          mindfulness and stress reduction techniques.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Spotlight Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
              <h2 className="component-heading">Company Spotlight</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Employee Recognition</h3>
                  <p className="journal-content-article">
                    Celebrating our team's achievements and contributions to SSAI's success.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Corner</h3>
                  <p className="journal-content-article">
                    Highlighting new technologies and processes that drive our company forward.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Resources and Quick Links */}
          <div className="space-y-6">
            {/* Resources Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="section-heading">Resources</h2>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors resource-link"
                >
                  <h3>Employee Handbook</h3>
                  <p>Company policies and procedures</p>
                </a>
                <a
                  href="#"
                  className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors resource-link"
                >
                  <h3>Benefits Information</h3>
                  <p>Health, dental, and retirement benefits</p>
                </a>
                <a
                  href="#"
                  className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors resource-link"
                >
                  <h3>Training Materials</h3>
                  <p>Professional development resources</p>
                </a>
                <a
                  href="#"
                  className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors resource-link"
                >
                  <h3>IT Support</h3>
                  <p>Technical assistance and help desk</p>
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="section-heading">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-left btn-primary">
                  Submit Feedback
                </button>
                <button className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-left btn-primary">
                  Request Time Off
                </button>
                <button className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-left btn-primary">
                  Update Profile
                </button>
              </div>
            </div>

            {/* Recent Events */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="section-heading">Recent Events</h2>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-3 recent-event">
                  <h3>Company All-Hands Meeting</h3>
                  <p>September 15, 2025</p>
                </div>
                <div className="border-l-4 border-green-500 pl-3 recent-event">
                  <h3>Team Building Event</h3>
                  <p>September 10, 2025</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3 recent-event">
                  <h3>Training Workshop</h3>
                  <p>September 5, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
