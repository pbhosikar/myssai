import React from 'react';
import Image from 'next/image';

const MyHr = () => {
  return (
    <>
      <section className="min-h-screen bg-white">
        {/* Hero Header with Gradient Background */}
        <div
          className="relative h-32 sm:h-38 md:h-38 lg:h-38"
          style={{
            backgroundImage: 'url("/img/myhr/myhr-background.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Human Resources Text */}
          <div className="absolute top-4 left-4 sm:left-32 sm:top-12">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold drop-shadow-lg">
              Human Resources
            </h1>
          </div>

          {/* Center Icon */}

        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Welcome Message */}
          <div className="mb-8">
            <p className="text-sm sm:text-base text-gray-700">
              <strong>Welcome to my SSAI from the Human Resources Team. It is our pleasure to support you!</strong>
            </p>
          </div>

          {/* Meet the Team Section */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Meet the Team</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Responsibilities */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Cassandra McIntyre</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Policy Management</li>
                    <li>Employee Relations</li>
                    <li>Budget Management</li>
                    <li>HR Strategy</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Josie Pearson</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Senior Training & Development</li>
                    <li>Performance Management</li>
                    <li>Corporate Facility Security Officer (FSO)</li>
                    <li>Quality Management</li>
                    <li>Safety and Health</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Dacia Newsome</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Benefits and Compensation</li>
                    <li>FMLA</li>
                    <li>HRIS (ADP and Costpoint)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Jeanne Kachris</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Recruiting</li>
                    <li>Onboarding and Offboarding</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Jolona Davis</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Personnel Action Changes</li>
                    <li>Compliance Management</li>
                    <li>EPVEIFY Program Coordinator</li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Contact Cards with Profile Images */}
              <div className="space-y-4">
                {/* Cassandra McIntyre */}
                <div className="flex items-start gap-4">
                  <div className="w-26 h-26 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    {/* Image placeholder */}
                    <Image
                      src="/img/myhr/team/CassandraMcIntyre.png"
                      alt="Cassandra McIntyre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">Cassandra McIntyre</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Director of HR SSAI and Advanced Mission Partnerships
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">Phone: 301-867-6329</p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Email: <a href="mailto:cassandra.mcintyre@ssaihq.com" className="text-blue-600 hover:underline">cassandra.mcintyre@ssaihq.com</a>
                    </p>
                  </div>
                </div>

                {/* Josie Pearson */}
                <div className="flex items-start gap-4">
                 <div className="w-26 h-26 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    {/* Image placeholder */}
                    <Image
                      src="/img/myhr/team/JosiePearson.jpg"
                      alt="Cassandra McIntyre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">Josie Pearson</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Director of Organizational Development
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">Phone: 757-951-1607</p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Email: <a href="mailto:josie.pearson@ssaihq.com" className="text-blue-600 hover:underline">josie.pearson@ssaihq.com</a>
                    </p>
                  </div>
                </div>

                {/* Dacia Newsome */}
                <div className="flex items-start gap-4">
                   <div className="w-26 h-26 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    {/* Image placeholder */}
                    <Image
                      src="/img/myhr/team/DaciaNewsome.jpg"
                      alt="Cassandra McIntyre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">Dacia Newsome</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Compensation and Benefits Manager
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">Phone: 301-867-2099</p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Email: <a href="mailto:dacia.newsome@ssaihq.com" className="text-blue-600 hover:underline">dacia.newsome@ssaihq.com</a>
                    </p>
                  </div>
                </div>
                

                {/* Jeanne Barger */}
                <div className="flex items-start gap-4">
                 <div className="w-26 h-26 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    {/* Image placeholder */}
                    <Image
                      src="/img/myhr/team/JeanneBarger.jpeg"
                      alt="Cassandra McIntyre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">Jeanne Barger</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Human Resources Generalist
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">Phone: 301-867-7135</p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Email: <a href="mailto:jeanne.barger@ssaihq.com" className="text-blue-600 hover:underline">jeanne.barger@ssaihq.com</a>
                    </p>
                  </div>
                </div>

                

                {/* Jolona Davis */}
                <div className="flex items-start gap-4">
                 <div className="w-26 h-26 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    {/* Image placeholder */}
                    <Image
                      src="/img/myhr/team/JolonaDavis.jpg"
                      alt="Cassandra McIntyre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg">Jolona Davis</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      Senior Human Resources Generalist
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 mt-2">Phone: 301-867-7178</p>
                    <p className="text-xs sm:text-sm text-gray-700">
                      Email: <a href="mailto:jolona.davis@ssaihq.com" className="text-blue-600 hover:underline">jolona.davis@ssaihq.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wellness and Benefits Fair 2024 Event Recap */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Wellness and Benefits Fair 2024 Event Recap
            </h2>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              <p>
                SSAI recently hosted the annual Wellness and Benefits Fair, offering employees a mix of{' '}
                <strong>in-person</strong> and <strong>virtual activities</strong> focused on health and well-being. 
                Highlights included <strong>biometric screenings, flu shots, and massage sessions for in-person attendees</strong>. 
                Employees also had the chance to join <strong>virtual benefits presentations</strong> from carriers like{' '}
                <strong>Legal Resources, Lincoln, and MetLife</strong>, covering various{' '}
                <strong>health and financial benefits</strong>. Additionally, <strong>wellness sessions</strong> on 
                topics such as the <strong>impact of food on mental health, quick healthy recipes, and brain games</strong>{' '}
                rounded out the day's activities.
              </p>
            </div>

            {/* Event Photo */}
            <div className="flex justify-center mb-6">
              <div className="w-full max-w-lg">
                <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                  {/* Image placeholder with caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white p-2 text-center">
                    <p className="text-xs sm:text-sm font-medium">
                      SSAI's CEO, Dr. Shipa Baneth, on smoothie bike
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wellness and Benefits Fair Prize Winners */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Wellness and Benefits Fair Prize Winners
            </h2>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
              <p>
                Sending many thanks to those who joined us for the Wellness and Benefits Fair! We hope you found 
                the event worthwhile and had a chance to connect with carriers while enjoying the activities.
              </p>
            </div>

            <h3 className="text-base sm:text-lg italic text-gray-800 mb-4">
              Congratulations to the following prize winners!
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 mb-6">
              <p className="text-sm text-gray-700"><strong>Thien Cheng:</strong> Chefman MultiFunction Digital Air Fryer</p>
              <p className="text-sm text-gray-700"><strong>Joseph Kesselman:</strong> SSAI Cruiser Bike</p>
              <p className="text-sm text-gray-700"><strong>Jeremy Wanner:</strong> O-Bag Smart Bag</p>
              <p className="text-sm text-gray-700"><strong>Vincent DiPippo:</strong> HyperX Cloud II Headset</p>
              <p className="text-sm text-gray-700"><strong>Austin Conley:</strong> Lincoln Under Armour Duffel Bag</p>
              <p className="text-sm text-gray-700"><strong>Jules Kouiditchian:</strong> Donatus Cervical Pillow for Neck and Shoulder</p>
              <p className="text-sm text-gray-700"><strong>Grace Chen:</strong> Comfier Massager Seat Cushion with Heat</p>
              <p className="text-sm text-gray-700"><strong>Holi Kahl:</strong> Livell Air Purifier</p>
              <p className="text-sm text-gray-700"><strong>Christoph Miller:</strong> Cuisinart Compact Portable Compact Blender</p>
              <p className="text-sm text-gray-700"><strong>Sean McCathney:</strong> 4 Piece Spa Kit</p>
              <p className="text-sm text-gray-700"><strong>Eric Alexander:</strong> Cuisinart Cordless Compact Blender</p>
              <p className="text-sm text-gray-700"><strong>Joshua Schaub:</strong> Amazon Gift Card (Break Games Winner)</p>
              <p className="text-sm text-gray-700"><strong>Christine Sheehan:</strong> Amazon Gift Card (Break Games Winner)</p>
              <p className="text-sm text-gray-700"><strong>David Ortiz:</strong> Amazon Gift Card (Break Games Winner)</p>
              <p className="text-sm text-gray-700"><strong>William Mooseeh:</strong> Upright Go 2 Posture Posture Corrector</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded p-4">
              <p className="text-sm text-gray-700">
                <strong>Please stop by the HR office (10210 Greenbelt Road, Suite 600, Room #649)</strong> to pick up your prize.
              </p>
            </div>
          </div>

          {/* SSAI Carrier Vendors Presentation Slides */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              SSAI Carrier Vendors Presentation Slides
            </h2>
            <div className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              <p>
                Whether or not you attended any Virtual Benefits Meetings, please explore valuable insights from 
                each of our <strong>carrier vendors</strong> by checking out their{' '}
                <strong>presentation slides below</strong>. Learn more about the benefits and services available to SSAI employees.
              </p>
            </div>

            {/* Vendor Grid - First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Lincoln Financial Group */}
              <div className="text-center">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-3 h-40 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* Lincoln logo placeholder */}
                    <span className="text-xs text-gray-500">Lincoln Logo</span>
                  </div>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
                  Lincoln SSAI - Benefits Overview Slides
                </a>
              </div>

              {/* MetLife */}
              <div className="text-center">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-3 h-40 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* MetLife logo placeholder */}
                    <span className="text-xs text-gray-500">MetLife Logo</span>
                  </div>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
                  MetLife OE Slides
                </a>
              </div>

              {/* Transamerica */}
              <div className="text-center">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-3 h-40 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* Transamerica logo placeholder */}
                    <span className="text-xs text-gray-500">Transamerica Logo</span>
                  </div>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
                  Retirement Plan Essentials - SS&A Slides
                </a>
              </div>

              {/* Legal Resources */}
              <div className="text-center">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-3 h-40 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* Legal Resources logo placeholder */}
                    <span className="text-xs text-gray-500">Legal Resources Logo</span>
                  </div>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
                  SSAI Legal Resources Slides
                </a>
              </div>
            </div>

            {/* Vendor Grid - Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Bank of America */}
              <div className="text-center">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-3 h-40 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* Bank of America logo placeholder */}
                    <span className="text-xs text-gray-500">Bank of America Logo</span>
                  </div>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
                  Bank of America SSAI Slides
                </a>
              </div>

              {/* NASA Federal Credit Union */}
              <div className="text-center">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-3 h-40 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* NASA FCU logo placeholder */}
                    <span className="text-xs text-gray-500">NASA FCU Logo</span>
                  </div>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
                  Credit Union Overview Slides
                </a>
              </div>

              {/* BHS */}
              <div className="text-center">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-3 h-40 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* BHS logo placeholder */}
                    <span className="text-xs text-gray-500">BHS Logo</span>
                  </div>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
                  EAP Employee Orientation Slides
                </a>
              </div>

              {/* Cigna */}
              <div className="text-center">
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-3 h-40 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    {/* Cigna logo placeholder */}
                    <span className="text-xs text-gray-500">Cigna Logo</span>
                  </div>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
                  Cigna Programs and Resources Presentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyHr;
