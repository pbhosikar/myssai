import Image from 'next/image';

const BusinessDevelopment = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-64 bg-gradient-to-r from-blue-600 via-blue-700 to-teal-400 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src='/company/businessdevelopment/businessdevback.webp'
            alt="Business Development Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-opacity-20"></div>
        <div className="relative z-10 h-auto flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-4">
            <div className="max-w-7xl pt-8 sm:pt-12 md:pt-16 lg:pt-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                Business Development
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:!text-lg text-white leading-tight !max-w-7xl">
                Our company's business development team drives our growth and expansion efforts. We identify new business opportunities, nurture 
                existing strategic partnerships, and maximize revenue streams. Whether forging alliances with key stakeholders, negotiating contracts, or 
                spearheading marketing campaigns, we play a pivotal role in driving sustainable growth and ensuring our long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-2 py-8 sm:py-10 md:py-2">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          
          {/* Meet the Team Section - Shows second on mobile, first on lg+ */}
          <div className="order-2 lg:order-2 lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Meet the Team
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Team Member 1 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-30 sm:h-30 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/company/businessdevelopment/Hamza.png"
                      alt="Hamza Benzine"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Hamza Benzine</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Sr. Business Development Specialist</p>
                  <a href="mailto:hamza.benzine@ssaihq.com" className="text-xs sm:text-sm text-blue-600 hover:underline break-all whitespace-nowrap">
                    hamza.benzine@ssaihq.com
                  </a>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-30 sm:h-30 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/company/businessdevelopment/Arrabi.png"
                      alt="Arrabi Nandakumar"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Arrabi Nandakumar</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Technical Writer / Editor</p>
                  <a href="mailto:arrabi.nandakumar@ssaihq.com" className="text-xs sm:text-sm text-blue-600 hover:underline break-all whitespace-nowrap">
                    arrabi.nandakumar@ssaihq.com
                  </a>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-30 sm:h-30 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/company/businessdevelopment/carolina.png"
                      alt="Carolina Santiago"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Carolina Santiago</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Senior Editor</p>
                  <a href="mailto:carolina.santiago@ssaihq.com" className="text-xs sm:text-sm text-blue-600 hover:underline break-all whitespace-nowrap">
                    carolina.santiago@ssaihq.com
                  </a>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-30 sm:h-30 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/company/businessdevelopment/scott.png"
                      alt="Scott Irons"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Scott Irons</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Business Analyst</p>
                  <a href="mailto:scott.irons@ssaihq.com" className="text-xs sm:text-sm text-blue-600 hover:underline break-all whitespace-nowrap">
                    scott.irons@ssaihq.com
                  </a>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-30 sm:h-30 bg-gray-300 rounded-full overflow-hidden">
                    <Image
                      src="/company/businessdevelopment/gonzalo.jpg"
                      alt="Gonzalo Lassally"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Gonzalo Lassally</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Defense Emergent Account Manager</p>
                  <a href="mailto:gonzalo.lassally@ssaihq.com" className="text-xs sm:text-sm text-blue-600 hover:underline break-all whitespace-nowrap">
                    gonzalo.lassally@ssaihq.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Core Capabilities Section - Shows third on mobile, second on lg+ */}
          <div className="order-3 lg:order-1 lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Core Capabilities
            </h2>
            
            <div className="flex flex-col space-y-6 sm:space-y-8">
              {/* Science Card */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 self-start">
                  <div className="w-full sm:w-48 md:w-56 lg:w-64 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-40 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800  overflow-hidden relative">
                    {/* Background Image for Science Card */}
                    <Image
                      src="/company/businessdevelopment/science.webp" // Add your science background image path here
                      alt="Science Background"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-opacity-30"></div>
                 
                    {/* Space/satellite imagery representation */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80 z-10"></div>
                    <div className="absolute top-1/2 left-1/2 w-12 h-12 border border-teal-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 opacity-60 z-10"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-0.5 leading-relaxed">
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
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 self-start">
                  <div className="w-full sm:w-48 md:w-56 lg:!w-64 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-40  bg-gradient-to-br from-orange-600 via-yellow-600 to-orange-700  overflow-hidden relative">
                    {/* Background Image for Engineering Card */}
                    <Image
                      src="/company/businessdevelopment/engineering.jpg" // Add your engineering background image path here
                      alt="Engineering Background"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0  bg-opacity-20"></div>
                   
                    {/* Industrial/engineering imagery representation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 z-10"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-0.5 leading-relaxed">
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
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-shrink-0 self-start">
                  <div className="w-full sm:w-48 md:w-56 lg:w-64 h-28 sm:h-32 md:h-36 lg:h-40 xl:h-40 bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900  overflow-hidden relative">
                    {/* Background Image for IT Card */}
                    <Image
                      src="/company/businessdevelopment/it.webp" // Add your IT background image path here
                      alt="IT Background"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0  bg-opacity-30"></div>
                
                    {/* Tech/monitoring screens representation */}
                    <div className="absolute top-2 left-2 w-16 h-8 bg-blue-400 rounded-sm opacity-60 z-10"></div>
                    <div className="absolute top-12 right-2 w-12 h-6 bg-green-400 rounded-sm opacity-60 z-10"></div>
                    <div className="absolute bottom-12 left-6 w-20 h-4 bg-yellow-400 rounded-sm opacity-40 z-10"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <ul className="text-xs sm:text-sm text-gray-700 space-y-0.5 leading-relaxed">
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
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopment;
