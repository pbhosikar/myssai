'use client';
export default function CompanyView() {
  return (
    <main className="min-h-screen bg-white">
      <section className="">
        <div className="mt-10 space-y-12">
          {/* About Us */}
          <div className="relative bg-[url('/img/Picture1.jpg')] bg-cover bg-center bg-no-repeat mx-auto px-4 sm:px-6 lg:px-8 py-10 p-10 text-white min-h-[320px]">
            <div className="relative max-w-7xl mx-auto">
              <h1 className="text-2xl font-semibold">About Us</h1>
              <div className="mt-10 space-y-4">
                <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
                  From our humble beginning, SSAI has grown organically to the 700+ person
                  organization it is today. SSAI founders Om and Sara Bahethi worked over the past
                  four decades to create and maintain a company culture that supports a spirit of
                  scientific exploration and innovation, respect for our planet and environment, and
                  a desire to make things better for humanity.
                </p>
                <p className="mt-15" style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
                  The family centered values that were so important at our company's beginning
                  remain a central part of SSAI's current company culture. These values are
                  reflected in the way SSAI leadership treats its employees and how employees are
                  expected to treat each other and our customers. This enduring culture allows SSAI
                  to attract and retain highly qualified scientists, engineers, programmers,
                  experienced professionals, and support staff to help our customers accomplish
                  their most challenging missions and achieve their loftiest goals.
                </p>
              </div>
            </div>
          </div>

          {/* Purpose, Mission, Vision + Values */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Our Purpose</h2>
                  <div className="mt-4 space-y-4 text-gray-700">
                    <div>
                      <h3 className="text-lg font-semibold">Purpose</h3>
                      <p>
                        <em>Why we exist: </em>
                        We are committed to advancing scientific research and technology to address
                        humanity's most pressing challenges.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Mission</h3>
                      <p>
                        <em>What we do: </em>
                        Our mission is to expand knowledge of the Universe through excellence in
                        Earth and space science, develop innovative engineering and technology
                        solutions, and nurture talent, all for the well-being of humanity and the
                        environment.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Vision</h3>
                      <p>
                        <em>What we aspire to be: </em>
                        Our vision is to improve life on earth through innovation and leadership in
                        science, engineering, and data analytics, as we answer important societal
                        and scientific questions.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Our Values</h2>
                  <ul className="mt-4 space-y-3 text-gray-700 list-disc pl-5">
                    <li>
                      <strong>Trust:</strong> Instill trust through honesty and transparency in our
                      communication and decision-making.
                    </li>
                    <li>
                      <strong>Integrity:</strong> Exercise scientific integrity and uncompromising
                      engineering as the foundation of our professional ethics.
                    </li>
                    <li>
                      <strong>Teamwork:</strong> Build strong teams to execute our business
                      practices and support our customers and partners through clear, effective,
                      deliberate, and comprehensive communication.
                    </li>
                    <li>
                      <strong>Passion:</strong> Innovate and evolve our organization by engaging our
                      collective sense of wonder and enthusiasm.
                    </li>
                    <li>
                      <strong>Accountability:</strong> We take ownership of our decisions and
                      everything we do, upholding our commitments to our customers and our
                      community.
                    </li>
                  </ul>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900">Company Culture</h3>
                  <div className="mt-3 space-y-3 text-gray-700">
                    <p>
                      <strong>Purpose:</strong> We are committed to advancing scientific research
                      and technology to address humanity's most pressing challenges.
                    </p>
                    <p>
                      <strong>Vision:</strong> Our vision is to improve life on Earth through
                      innovation and leadership in science, engineering, and data analytics.
                    </p>
                    <p>
                      <strong>Mission:</strong> We expand knowledge of the Universe through
                      excellence in Earth and Space Science, develop innovative Engineering and
                      Technology solutions, and nurture talent, all for the well-being of humanity
                      and the environment.
                    </p>
                    <p>
                      <strong>Additional Culture Information:</strong> SSAI’s success as a science,
                      engineering, and IT company is built upon a foundation of strong values and
                      collegial corporate culture. We believe in teamwork, responsibility, and a
                      commitment to fostering the well-being of every employee, both personally and
                      professionally. We believe it is every employee’s responsibility to act with
                      openness, integrity, technical excellence, and an attitude of customer
                      service. Our respect for each other moves beyond the confines of our office
                      walls, and we take great pride in our corporate citizenship.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
            </div>
            
          </section>
        </div>
      </section>
    </main>
  );
}
