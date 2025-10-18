"use client"

export default function ITHelpDesk() {
  return (
    <div className="min-h-screen">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-12">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Message from IT Team */}
          <div className="lg:col-span-2 space-y-12">
            {/* Message Section */}
            <section>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Message from IT Team</h1>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <span className="">Welcome to the IT Help Desk!</span>
                </p>

                <p>
                  Here at SSAI, our IT Help Desk is dedicated to providing you with the best possible support for all
                  your technical needs. We encourage you to review the Quick Tips below for helpful information and
                  solutions to common issues. These tips are designed to save you time and get you back to work faster.
                </p>

                <p>
                  If you need further assistance or have any questions, please don't hesitate to contact us at{" "}
                  <a
                    href="mailto:it_help@ssaihq.com"
                    className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    it_help@ssaihq.com
                  </a>
                  . We're here to help!
                </p>

                <p className="font-semibold">Stay productive and connected!</p>
              </div>
            </section>

            {/* IT Quick Tips Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">IT Quick Tips</h2>

              {/* Illustration */}
              <div className="overflow-hidden  flex justify-center items-center">
                <img
                  src="/img/company/information_technology/itHElpdesk.jpg"
                  alt="IT Help Desk Illustration"
                  className="w-[612] h-[417] object-cover"
                />
              </div>
            </section>
          </div>

          {/* Right Column - IT Update */}
          <div className="lg:col-span-1 ">
            {/* IT Update Header */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">IT Update</h2>
            </div>

            {/* Update Card 1 - Trip Report eForm */}
            <div className=" p-6 border border-gray-200 ">
              <h3 className="text-blue-600  text-[0.875rem] mb-1">Trip Report eForm Now Live!</h3>

              <p className="text-gray-700 text-[0.875rem] leading-relaxed">
                We are excited to announce the launch of the new{" "}
                <span className="font-semibold">Trip Report eForm</span>, designed to streamline the process of
                reporting travel activities and outcomes. This eForm offers a user-friendly experience, allowing
                employees to document trip details and submit reports efficiently. With enhanced workflow automation,
                travel reports will now be routed directly to Travel Admins for review, ensuring faster processing and
                better accuracy. The Trip Report eForm is part of our ongoing effort to modernize internal processes and
                improve operational efficiency. Start using the Trip Report eForm today and enjoy a smoother, more
                efficient travel reporting process!
              </p>

              <p className="text-gray-700 text-[0.875rem] leading-relaxed">
                All eForms can be access via your OKTA Dashboard or the following link:{" "}
                <a
                  href="https://fr.ssai.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-[0.875rem] transition-colors"
                >
                  https://fr.ssai.app
                </a>
              </p>
            </div>

            {/* Update Card 2 - SSAI Network Status */}
            <div className="p-3 border border-gray-200">
              <h3 className="text-blue-600 text-[0.875rem] mb-1">SSAI Network Status July 2024</h3>

              <p className="text-gray-700 text-[0.875rem] leading-relaxed">
                Here is an important communication to read in SSAI Box regarding the Weekly IT Update.
              </p>

              <p className="text-gray-700 text-[0.875rem] leading-relaxed mt-1">
                If you have trouble accessing the Box document, please email IT Support at{" "}
                <a
                  href="mailto:it_help@ssaihq.com"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  it_help@ssaihq.com
                </a>
                .
              </p>
            </div>

         
          </div>
        </div>
      </div>
    </div>
  )
}
