'use client';

import React from 'react';
import Image from 'next/image';

const HealthSafety = () => {
  // Safety Committee Members Data
  const safetyMembers = [
    {
      name: 'Josie Pearson',
      title: 'SSAI Safety Official',
      responsibilities: [
        'Monthly Safety Reporting',
        'Medical Surveillance Program, GSFC & EPA',
        'Workers Compensation',
        'Job Hazard Analysis'
      ]
    },
    {
      name: 'Eric Morris',
      title: 'Safety Representative EPA Raleigh, NC',
      responsibilities: [
        'Safety & Health Plan Maintenance',
        'Semi-annual on-site office inspections',
        'Quarterly laboratory inspection oversight',
        'Job hazard analysis',
        'Training and certifications tracking'
      ]
    },
    {
      name: 'Jeff Shull',
      title: 'Designated Safety Official SAMDA Contract',
      responsibilities: [
        'Safety & Health Plan Maintenance',
        'Semi-annual on-site office inspections',
        'Quarterly laboratory inspection oversight',
        'Job hazard analysis',
        'Training and certifications tracking'
      ]
    },
    {
      name: 'Wendy Zeitz',
      title: 'Designated Safety Official HBG Contract',
      responsibilities: [
        'Safety & Health Plan Maintenance',
        'Semi-annual on-site office inspections',
        'Quarterly laboratory inspection oversight',
        'Job hazard analysis',
        'Training and certifications tracking'
      ]
    }
  ];

 

  return (
    <>
      <section className="min-h-screen bg-gray-50">
        {/* Hero Header */}
        <div
          className="relative h-32 sm:h-38 md:h-38 lg:h-38"
          style={{
            backgroundImage: 'url("/img/healthsafety/healthsafety-background.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 "></div>
          <div className="absolute top-4 left-4 sm:left-32 sm:top-12">
            <h1 className="text-white text-2xl sm:text-3xl font-bold drop-shadow-lg">
              Safety Corner
            </h1>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Safety Committee Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {safetyMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-gray-700 mb-3">{member.title}</p>
                <ul className="space-y-1">
                  {member.responsibilities.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Meeting Schedule Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
Safety Committee Meeting Schedule for 2025
            </h2>
            <p className="text-sm text-gray-700 mb-4">
             (All meetings are accessible virtually through TEAMS)

            </p>
            <p className="text-sm text-gray-700 mb-6">
              Please contact{' '}
              <a href="mailto: josie.pearson@ssaihq.com" className="text-blue-600 hover:underline">
                josie.pearson@ssaihq.com
              </a>{' '}
              to be added to the committee distribution list.
            </p>

            {/* Meeting Schedule Image */}
            <div className="relative w-full h-auto mb-6">
              <Image
                src="/img/healthsafety/table.png"
                alt="Safety Committee Meeting Schedule"
                width={800}
                height={400}
                className="w-full h-auto rounded border border-gray-300"
              />
            </div>
          </div>

          {/* Report Accidents Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="bg-orange-600 text-white p-4">
              <h2 className="text-xl font-bold">Report all Accidents and Hazards immediately to:
</h2>
            </div>
            <div className="p-6 bg-orange-50">
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-800 mb-4">
                <li>Your SSAI Manager</li>
                <li>SSAI & Customer Safety Representative, if appropriate*
</li>
              </ol>
              <p className="text-xs text-gray-700 mb-4 leading-relaxed">
                *Call your SSAI Manager first. SSAI's Managers help staff to ensure that we adhere to all applicable government, contract, and company requirements for safety practices, procedures, and reporting.


              </p>
              <p className="text-xs text-gray-700 leading-relaxed">
                If you cannot reach your manager or if there is an immiment threat at your facility, contact an SSAI Safety Representative or other contract for your Region/Facility.


              </p>
            </div>
          </div>

          {/* Safety Links Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Safety Links</h2>
            <div className="mb-4">
              <a 
                href="https://ssaihq.account.box.com/login?redirect_url=%2Ffile%2F1507717480541" 
                target='_blank' className="text-blue-600 hover:underline text-sm font-medium"
              >
                SSAI Safety Committee Charter and Responsibilities
              </a>
              <p className="text-sm text-gray-700 mt-2">
               The SSAI Safety Committee is a permanent committee established by the company to
ensure proper corporate emphasis on safety. 
              </p>
            </div>
          </div>

          {/* Building Emergency Action Plan Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">Showing 1 to 1 of 1 entries.</p>
              <button className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                1
              </button>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-4">
             Building Emergency Action Plan - Greenbelt, MD
            </h3>
            <p className="text-sm text-gray-700 mb-1">10210 Greenbelt Road, Suite 600
</p>
            <p className="text-sm text-gray-700 mb-6">Lanham, MD 20706


</p>

            {/* Maryland Section */}
            <div className="mb-6">
              <h4 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b-2 border-blue-600 inline-block">
                Maryland
              </h4>
              <div className="mt-4 space-y-3">
                <div>
                  <h5 className="text-sm font-bold text-gray-900">SSAI Lanham Office (Aerospace)
</h5>
                  <p className="text-sm text-gray-700">Josie Pearson (757) 951-1607
</p>
                  <p className="text-sm text-blue-600">SSAI Building Emergency Plan - Lanham

</p>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-gray-900">NASA Goddard Space Flight Center (GSFC)
</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthSafety;
