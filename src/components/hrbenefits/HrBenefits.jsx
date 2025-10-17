'use client';

import React from 'react';
import Image from 'next/image';

const HRBenefits = () => {
  // Benefits Cards Data Array
  const benefitsCards = [
    {
      logo: '/img/hrbenefits/Cards/maxresdefault.jpg',
      alt: 'Cigna',
      title: 'Medical/Rx',
      details: [
        'Cigna | Group # 3344665',
        '800-997-1654'
      ],
      link: 'http://www.mycigna.com/',
      linkText: 'http://www.mycigna.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/PNC_Logo (1).jpg',
      alt: 'PNC',
      title: 'Health Savings Account',
      details: [
        'PNC',
        '888-762-2265'
      ],
      link: 'http://pnc.com/pncbenefitplus',
      linkText: 'http://pnc.com/pncbenefitplus'
    },
    {
      logo: '/img/hrbenefits/Cards/flores.jpg',
      alt: 'Flores',
      title: 'Flexible Spending Accounts',
      details: [
        "Flores",
        '800-532-3327'
      ],
      link: 'https://www.flores247.com/',
      linkText: 'https://www.flores247.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/metlife.jpg',
      alt: 'MetLife',
      title: 'Dental',
      details: [
        'MetLife | Group # 135398',
        '800-275-4638'
      ],
      link: 'https://www.metlife.com/',
      linkText: 'https://www.metlife.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/VSP-vision-care-logo.webp',
      alt: 'VSP Vision Care',
      title: 'Vision',
      details: [
        'VSP | Group # 12169354',
        '800-877-7195'
      ],
      link: 'https://www.vsp.com/',
      linkText: 'https://www.vsp.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/compsych.png',
      alt: 'ComPsych',
      title: 'LifeKeys Services',
      details: [
        'Lincoln Financial Group',
        '855-891-3684',
        'Web ID: LifeKeys'
      ],
      link: 'http://www.guidanceresources.com/',
      linkText: 'http://www.guidanceresources.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/lincoln-fg-thumbnail.webp',
      alt: 'Lincoln Financial Group',
      title: 'Life and Disability Insurance',
      details: [
        'Lincoln Financial',
        '800-423-2765'
      ],
      link: 'http://www.mylincolnportal.com',
      linkText: 'http://www.mylincolnportal.com'
    },
    {
      logo: '/img/hrbenefits/Cards/bhs.png',
      alt: 'BHS',
      title: 'Employee Assistance Program (EAP)',
      details: [
        'BHS',
        '800-237-2251',
        'Web ID: SSAI',
      ],
      link: 'http://portal.bhsonline.com/',
      linkText: 'http://portal.bhsonline.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/bhs.png',
      alt: 'BHS',
      title: 'Employee Assistance Program (EAP)',
      details: [
        'BHS',
        '888-628-4824',
        'Username: LFGsupport | Password:LFGsupport1'
      ],
      link: 'http://www.guidanceresources.com/',
      linkText: 'http://www.guidanceresources.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/lincoln-fg-thumbnail.webp',
      alt: 'Lincoln Financial Group',
      title: 'Travel Connect Services',
      details: [
        'Lincoln Financial Group',
        '866-525-1955',
        'Group ID: LFGTravel123'
      ],
      link: 'https://mysearchlightportal.com/',
      linkText: 'https://mysearchlightportal.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/metlife.jpg',
      alt: 'MetLife',
      title: 'Accident & Critical Illness',
      details: [
        'MetLife | Group # 135398',
        '800-438-6388'
      ],
      link: 'http://www.metlife.com/',
      linkText: 'http://www.metlife.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/nationwide.jpg',
      alt: 'Nationwide',
      title: 'Pet Insurance',
      details: [
        'Nationwide',
        '977-738-7874'
      ],
      link: 'http://www.petinsurance.com/gables',
      linkText: 'http://www.petinsurance.com/gables'
    },
    {
      logo: '/img/hrbenefits/Cards/legalresources.jpg',
      alt: 'Legal Resources',
      title: 'Legal Plan/ ID Theft Protection',
      details: [
        'Legal Resources',
        '800-728-5768'
      ],
      link: 'http://www.legalresources.com/',
      linkText: 'http://www.legalresources.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/Farmers-featuredimage.jpg',
      alt: 'Farmers Insurance',
      title: 'Home & Auto Insurance',
      details: [
        'Farmers Insurance',
        '800-438-6381'
      ],
      link: 'http://www.farmers.com/',
      linkText: 'http://www.farmers.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/ol.jpg',
      alt: 'OneLife Fitness',
      title: 'OneLife Fitness',
      details: [
        '703-442-9150'
      ],
      link: 'mailto:clayton.peyton@onelifefitness.com',
      linkText: 'clayton.peyton@onelifefitness.com'
    },
    {
      logo: '/img/hrbenefits/Cards/access.png',
      alt: 'Access Perks',
      title: 'Access Perks',
      details: [
        '877-408-2603'
      ],
      link: 'https://www.accessperks.com/',
      linkText: 'https://www.accessperks.com/'
    },
    {
      logo: '/img/hrbenefits/Cards/ssai_logo.jpg',
      alt: 'SSAI',
      title: 'SSAI',
      details: [
        'Human Resources'
      ],
      link: 'mailto:HR-Lanham@ssaihq.com',
      linkText: 'HR-Lanham@ssaihq.com'
    },
    {
      logo: '/img/hrbenefits/Cards/nfp.png',
      alt: 'NFP',
      title: 'NFP',
      details: [
        'Kathleen Jackson, Client AssociateKathleen Jackson, Client Advocate',
        '301-214-7071'
      ],
      link: 'mailto:kathleen.jackson@nfp.com',
      linkText: 'kathleen.jackson@nfp.com'
    }
  ];

  return (
    <>
      <section className="min-h-screen bg-gray-50">
        {/* Hero Header with Benefits Banner */}
        <div
          className="relative h-32 sm:h-38 md:h-38 lg:h-38"
          style={{
            backgroundImage: 'url("/img/hrbenefits/hr-benefits-background.png")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-4 left-4 sm:left-32 sm:top-12">
            <h1 className="text-white text-xl sm:text-2xl font-bold drop-shadow-lg">
              HR-Benefits
            </h1>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Introduction Text */}
          <div className="mb-8">
            <p className="text-sm text-black leading-relaxed">
              We are committed to fostering a workplace where every employee has the opportunity to succeed based on their contributions, talent, and dedication. We believe that a strong, respectful, and united team - made up of individuals from all walks of life - help drive innovation and excellence. Our employee programs and benefits reflect this belief, supporting your health, professional growth, and financial well-being. We offer comprehensive healthcare, strong retirement plans, wellness initiatives, and career development opportunities — all designed to create an environment where every team member feels respected, empowered, and set up for success.
            </p>
          </div>

          {/* Main Layout: Benefits Cards (Left) + Sidebar (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Benefits Cards (2 columns) */}
            <div className="lg:col-span-2">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {benefitsCards.map((card, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition hover:shadow-lg"
      >
        {/* Logo Section */}
        <div className="relative h-32 flex items-center justify-center bg-gray-50 border-b border-gray-100">
          {card.logo ? (
            <Image
              src={card.logo}
              alt={card.alt}
              fill
              className="object-contain p-4"
            />
          ) : (
            <div className="bg-gray-100 rounded flex items-center justify-center h-full w-full">
              <span className="text-sm text-gray-400">{card.alt} Logo</span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h3 className="text-base font-bold text-gray-900 mb-2">{card.title}</h3>

          {card.details.map((detail, idx) => (
            <p key={idx} className="text-sm text-gray-700 mb-1">
              {detail}
            </p>
          ))}

          <a
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline break-all mt-3 inline-block"
          >
            {card.linkText}
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Kathleen Jackson Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden relative">
                    <Image
                      src="/img/hrbenefits/KathleenJackson.jpg"
                      alt="Kathleen Jackson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">Kathleen Jackson</h3>
                  </div>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed mb-3">
                  Kathleen Jackson is SSAI's Health Advocate Support from NFP. She is your trusted partner in navigating the complexities of healthcare. Managing your health and wellness can feel overwhelming and that's we have Kathleen — to support you every step of the way.
                </p>
                <p className="text-xs text-gray-700 leading-relaxed mb-4">
                  Whether you're facing a medical issue, or need assistance understanding your benefits, Kathleen is here to listen, guide, and advocate on your behalf. You can have peace of mind knowing that expert support is just a call or click away. Your health is our priority, and we're here to help you thrive.

                </p>
                <div className="bg-blue-50 rounded p-3 border border-blue-100">
                  <p className="text-xs font-bold text-gray-900 mb-2">Important Dates:</p>
                  <p className="text-xs text-gray-700">Benefits Fair – October 17, 2024</p>
                  <p className="text-xs text-gray-700">Open Enrollment – November 1-15, 2024</p>
                </div>
              </div>

              {/* Quicklinks */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-4">Quicklinks</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://ssaihq.app.box.com/file/1506319417295" target='_blank' className="text-xs text-blue-600 hover:underline">
                     Transamerica Retirement Plan Essential 2024
                    </a>
                  </li>
                  <li>
                    <a href="https://ssaihq.account.box.com/login?redirect_url=%2Ffile%2F1506319390895"  target='_blank' className="text-xs text-blue-600 hover:underline">
                      Social Security: With You Through Life's Journey
                    </a>
                  </li>
                  <li>
                    <a href="https://ssaihq.account.box.com/login?redirect_url=%2Ffile%2F1506319414895" target='_blank' className="text-xs text-blue-600 hover:underline">
                     Putting Out the Fire: Preventing and Managing Burnout
                    </a>
                    <p className="text-xs text-gray-600 mt-1">Presented by BHS</p>
                  </li>
                  <li>
                    <a href="https://ssaihq.account.box.com/login?redirect_url=%2Ffile%2F1506319400495" target='_blank' className="text-xs text-blue-600 hover:underline">
                     Cigna Programs & Resources
                    </a>
                  </li>
                  <li>
                    <a href="https://ssaihq.account.box.com/login?redirect_url=%2Ffile%2F1506284855248" target='_blank' className="text-xs text-blue-600 hover:underline">
                      Benefits Contact List
                    </a>
                  </li>
                  <li>
                    <a href="https://workforcenow.adp.com/public/index.htm"  target='_blank' className="text-xs text-blue-600 hover:underline">
                      ADP Workforce Now Portal
                    </a>
                    <p className="text-xs text-gray-600 mt-1">
                     Your one stop shop to see your benefits, paychecks and employment status.

                    </p>
                  </li>
                </ul>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <span className="text-xs text-gray-600">Showing 1 to 6 of 6 entries</span>
                  <button className="px-2 py-1 text-xs border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                    1
                  </button>
                </div>
              </div>

              {/* Corporate Discounts */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-base font-bold text-gray-900 mb-4">Corporate Discounts</h3>
                <div className="relative h-24">
                  <Image
                    src="/img/hrbenefits/access.png"
                    alt="Access Perks"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HRBenefits;
