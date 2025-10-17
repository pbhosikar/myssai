import Image from 'next/image';


const BusinessDevelopment = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-400 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src='/company/businessdevelopment/businessdevback.webp' // Replace with your background image path
            alt="Business Development Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-opacity-20"></div>
        <div className="relative z-10 h-full flex items-start">
          <div className="container">
            <div className="max-w-7xl ">
              <h1 className="text-4xl font-bold text-white mb-4">
                Business Development
              </h1>
              <p className="!text-lg text-white leading-tight">
                Our company's business development team drives our growth and expansion efforts. We identify new business opportunities, nurture 
                existing strategic partnerships, and maximize revenue streams. Whether forging alliances with key stakeholders, negotiating contracts, or 
                spearheading marketing campaigns, we play a pivotal role in driving sustainable growth and ensuring our long-term success.
              </p>
            </div>
          </div>
        </div>
        {/* Background decorative elements */}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Core Capabilities Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Core Capabilities
            </h2>
            
            <div className="space-y-8">
              {/* Science Card */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-40 h-28 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute bottom-3 left-3">
                      <h3 className="text-xl font-bold text-white">Science</h3>
                    </div>
                    {/* Space/satellite imagery representation */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
                    <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-teal-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="text-sm text-gray-700 space-y-0.5 leading-relaxed">
                    <li>Algorithm Development / Validation / Calibration / Data Production and Maintenance</li>
                    <li>Radiative Transfer</li>
                    <li>Remote Sensing Theory</li>
                    <li>Meteorology</li>
                    <li>Global Atmospheric Modelling</li>
                    <li>Data Assimilation</li>
                    <li>Air-Sea Interaction</li>
                    <li>Land-Atmosphere Interaction and Land Surface Modelling</li>
                    <li>Weather Forecasting and Numerical Weather Predictions</li>
                    <li>Oceanography</li>
                    <li>Hydrology</li>
                    <li>Biosphere Modelling</li>
                    <li>Ocean Biogeochemistry</li>
                    <li>Global Modelling of the Earth System/Atmosphere, Land, Ocean and Cryosphere</li>
                    <li>Climate Modelling</li>
                    <li>Observing System Experiments (OSEs) and Data Impact Studies</li>
                    <li>Stratospheric Ozone Observations and Modelling</li>
                    <li>Climate Diagnostics</li>
                    <li>Planetary Atmosphere</li>
                    <li>Space Weather</li>
                  </ul>
                </div>
              </div>

              {/* Engineering Card */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-40 h-28 bg-gradient-to-br from-orange-600 via-yellow-600 to-orange-700 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute bottom-3 left-3">
                      <h3 className="text-xl font-bold text-white">Engineering</h3>
                    </div>
                    {/* Industrial/engineering imagery representation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="text-sm text-gray-700 space-y-0.5 leading-relaxed">
                    <li>Systems Engineering / Requirements Development and Management / Verification and Validation</li>
                    <li>Avionics System</li>
                    <li>Software Engineering / CMMI Level 2 (Level 3 in process)</li>
                    <li>FPGA Design, Testing and Verification</li>
                    <li>Electrical, Electronic and Electromechanical (EEE) Parts</li>
                    <li>Power Electronics</li>
                    <li>Flight Control Systems Integration</li>
                    <li>Attitude / Orbit Determination & GPS Data Processing Related to Cal/Val</li>
                    <li>Workmanship Certifications to ANSI/IPC-J-STD-001 with Space Addendum</li>
                    <li>IPC Wire Harness/Cable and Wire Assembly Standards</li>
                    <li>Certified to ANSI/IPC Standard ITAR Registered</li>
                    <li>MIL-STD-1553 and Semi-Standard procedures</li>
                    <li>Advanced Manufacturing Portfolio</li>
                    <li>Metrics-based SQM Analysis</li>
                  </ul>
                </div>
              </div>

              {/* IT Card */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-40 h-28 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute bottom-3 left-3">
                      <h3 className="text-xl font-bold text-white">IT</h3>
                    </div>
                    {/* Tech/monitoring screens representation */}
                    <div className="absolute top-2 left-2 w-16 h-8 bg-blue-400 rounded-sm opacity-60"></div>
                    <div className="absolute top-12 right-2 w-12 h-6 bg-green-400 rounded-sm opacity-60"></div>
                    <div className="absolute bottom-12 left-6 w-20 h-4 bg-yellow-400 rounded-sm opacity-40"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="text-sm text-gray-700 space-y-0.5 leading-relaxed">
                    <li>Solutions Engineering</li>
                    <li>Cloud Solutions</li>
                    <li>High Performance Computing</li>
                    <li>Database Administration</li>
                    <li>Artificial Intelligence (AI), Machine Learning (ML) Systems and Services Development</li>
                    <li>API Integration Services</li>
                    <li>Mobile Apps & Omnichannel Web Presence</li>
                    <li>Software Engineering / CMMI Level 2 (Currently pursuing CMMI Level 3)</li>
                    <li>Systems Architecture / Requirements Development and Management / Verification and Validation</li>
                    <li>Systems Integration and Testing</li>
                    <li>Web Development</li>
                    <li>Data Normalization, Assimilation and Analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Meet the Team Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Meet the Team
            </h2>
            
            <div className="space-y-6">
              {/* Team Member 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/team/hamza-benzine.jpg" // Replace with actual image path
                      alt="Hamza Benzine"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Hamza Benzine</h3>
                  <p className="text-sm text-gray-600 mb-1">Sr. Business Development Specialist</p>
                  <a href="mailto:hamza.benzine@ssaihq.com" className="text-sm text-blue-600 hover:underline">
                    hamza.benzine@ssaihq.com
                  </a>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/team/arrabi-nandakumar.jpg" // Replace with actual image path
                      alt="Arrabi Nandakumar"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Arrabi Nandakumar</h3>
                  <p className="text-sm text-gray-600 mb-1">Technical Writer / Editor</p>
                  <a href="mailto:arrabi.nandakumar@ssaihq.com" className="text-sm text-blue-600 hover:underline">
                    arrabi.nandakumar@ssaihq.com
                  </a>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/team/carolina-santiago.jpg" // Replace with actual image path
                      alt="Carolina Santiago"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Carolina Santiago</h3>
                  <p className="text-sm text-gray-600 mb-1">Senior Editor</p>
                  <a href="mailto:carolina.santiago@ssaihq.com" className="text-sm text-blue-600 hover:underline">
                    carolina.santiago@ssaihq.com
                  </a>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/team/scott-irons.jpg" // Replace with actual image path
                      alt="Scott Irons"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Scott Irons</h3>
                  <p className="text-sm text-gray-600 mb-1">Business Analyst</p>
                  <a href="mailto:scott.irons@ssaihq.com" className="text-sm text-blue-600 hover:underline">
                    scott.irons@ssaihq.com
                  </a>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/team/gonzalo-lassally.jpg" // Replace with actual image path
                      alt="Gonzalo Lassally"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Gonzalo Lassally</h3>
                  <p className="text-sm text-gray-600 mb-1">Defense Emergent Account Manager</p>
                  <a href="mailto:gonzalo.lassally@ssaihq.com" className="text-sm text-blue-600 hover:underline">
                    gonzalo.lassally@ssaihq.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopment;
