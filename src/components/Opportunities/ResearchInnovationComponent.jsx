"use client"
import { useState } from "react";
import SimpleCarousel from "./SimpleCarousel"
import Link from 'next/link';

export default function ResearchInnovationComponent() {
  const infoCards = [
    {
      id: 1,
      title: "Box",
      description: "SSAI's primary document repository. Click here to log in!",
      link: "www.box.com",
      image: "/img/company/opportunities/opportunities.png",
      bgColor:"",
      isLogo: true,
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Oreste Reale",
      title: "Corporate Chief Scientist",
      mobile: "301-867-6320",
      email: "oreste.reale@ssaihq.com",
      image: "/img/company/opportunities/OR_1.jpg",
    },
    {
      id: 2,
      name: "John Duvall",
      title: "Senior Grants Administrator",
      mobile: "301-867-6284",
      email: "john.duvall@ssaihq.com",
      image: "/img/company/opportunities/jd.jpeg",
    },
  ]
  const formsLinks = [
    { title: 'Tips for New Proposers PowerPoint', href: '#' },
    { title: 'CO-I Budget Information Instructions Sheet', href: '#' },
    { title: 'PI Budget Information Sheet Instructions', href: '#' },
    { title: 'COI Budget Information Sheet', href: '#' },
    { title: 'PI Budget Information Sheet', href: '#' }
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-8 lg:gap-12 mt-8 px-4 lg:pr-[152px] lg:pl-[152px]">
      {/* Info Cards Section */}
      <div className="flex justify-center w-full lg:w-auto">
        <div className="overflow-hidden flex flex-col w-full max-w-full lg:max-w-[813px]">
          {/* Image/Logo Section */}
          <div className="flex items-center justify-center">
            <img 
              src="/img/company/opportunities/opportunities.png" 
              className="object-cover w-full h-auto max-w-[813px] max-h-[206px]" 
              alt="Box"
            />
          </div>
          
          {/* Content Section - Side by Side with same width as image */}
          <div className="flex flex-col lg:flex-row w-full max-w-full lg:max-w-[813px]">
            <div className="lg:w-1/2 w-full lg:pr-4">
            <h4 className="!text-black font-bold !text-[1.425rem] mb-4">Small Proposal Support (SPS)</h4>
              <p className="text-gray-700 mt-6 lg:mt-12">
              The Small Proposal Support (SPS) component of SSAI's IRI Program provides funding to foster professional growth and expand career opportunities for SSAI employees whose primary interest is research.</p>
           
           <h4 className="text-gray-700 font-bold text-sm mt-4">The SPS program does:</h4>
           <p className="text-gray-700">
           increase the base of potential proposers in SSAI
offer incentive for SSAI scientists to immerse themselves in the robust taskof writing and submitting proposals
offer growth opportunities to individuals not interested in management.
           </p>
           <h4 className="text-gray-700 font-bold text-sm mt-4">SPS Details:</h4>
           <p className="text-gray-700">
           Ongoing year-round open call.
Potential SSAI PIs should submit 1-page request to Chief Scientist and Program Manager
Decisions will be made within a week by Chief Scientist based on responsiveness to call, PI's qualifications, probability of success, PM's concurrence.
Goal of SPS requests must be proposal submission, preferably to NASA.
Proposals to other agencies, such as NOAA, DoE or NSF, will be considered.
SSAI PMs will ensure there are no objections from NASA sponsor and that proposed work is not detrimental to existing NASA tasks.
If approved, PI should charge time to SPS Program and not to task while preparing proposal.
SPS should be low-risk, medium-return investment.
Awardees should notify Managers and Chief Scientist of successful proposal submission and outcome.
           </p>
           <h4 className="text-gray-700 font-bold text-sm mt-4">SPS requests should contain:</h4>
           <p className="text-gray-700">
           Call specifics
Proposal idea
Tentative team
Total estimated budget (cost should cover no more than 10% LoE to prepare proposal or hours (~20-40)
PI qualifications
Benefits to NASA's mission and to SSAI in medium term (1-4 years)
           </p>

           <p className="text-blue-600 !font-[600] hover:underline hover:text-blue-700 mt-6">
            <a href="https://ssaihq.account.box.com/login?redirect_url=%2Ffile%2F1493285747585"
            target="_blank"
            >
            SPS At A Glance
            </a>
            </p>
            <p className="text-blue-600 !font-[600] hover:underline hover:text-blue-700">
            <a href="https://ssaihq.account.box.com/login?redirect_url=%2Ffile%2F1493294039464"
                 target="_blank"
            >

             Small Proposal Support (SPS) Request Template
            </a>
             
             </p>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-4 mt-8 lg:mt-0">
            <h4 className="text-black font-bold text-[1.4rem] mb-4">Internal Research and Development (IRAD)</h4>
           <h4 className="text-gray-700 font-bold text-sm">
           IRAD Requirements:

           </h4>
           <p className="text-gray-700">
           IRAD proposals must have an ambitious target (e.g., EV mission, scientific or technical breakthrough)
Attempt to create vast collaborative efforts involving multiple institutions
Respond to an annual internal call for competitively selected proposals
Follow guidance and proposal template
           </p>
           <h4 className="text-gray-700 font-bold text-sm mt-4">
           IRAD Details:



           </h4>
           <p className="text-gray-700">
           Interested individuals should submit a brief Notice of Intent (NOI) no longer than 250 words to help the ELC in the selection of a Technical Evaluation Committee (TEC) and appropriate reviewers
The SSAI-IRAD investment should foster development of new, ground-breaking ideas, major science and technology advances, large multi-institutional collaborative efforts, or devise technology-transfers with involvement of NASA's Strategic Partnership Office (SPO) if needed.</p>


<h4 className="text-gray-700 font-bold text-sm mt-4">
IRAD proposals should:

           </h4>
           <p className="text-gray-700">
           Be understood as a high-risk, high-reward investment to support a long-term low-level sustained effort
have a strategic vision for a vast project
offer an explanation of mid- and long-term benefits to SSAI
Aim at increasing SSAI's revenue
Contain risk assessment and mitigation strategies
Follow the template and be no longer than 8 pages
contain a clear strategic goal
define the work, team and period of performance (1-2 y) and future implications of the work
preferably involve other institutions (NASA, other Agencies, academia, industry) at no-cost for SSAI (i.e., using their own IRAD resources or committing effort levels, or receive endorsements)
Plan to comply with the after-award requirements: Project Plan, Reports, Implementation
</p>


<h4 className="text-gray-700 font-bold text-sm mt-4">
IRAD proposals should not:
           </h4>
           <p className="text-gray-700">
           Focus on a self-contained goal (writing an article, some small technological advance)
Be developed by one individual alone
Be concerned with a science advance of relatively small significance
Lack a clear vision of return of investment for SSAI
Lack a risk evaluation and mitigation
Miss the opportunity of engaging other teams from NASA or other Government Agencies, Universities, other Companies
</p>
<p className="text-blue-600 !font-[600] hover:underline hover:text-blue-700 mt-6 ">
  <a href="https://ssaihq.account.box.com/login?redirect_url=%2Ffile%2F1493288738111"
  target="_blank"
  >
  IRAD At A Glance
  </a>
  </p>
  <p className="text-blue-600 !font-[600] hover:underline hover:text-blue-700">
            <a href="https://ssaihq.account.box.com/login?redirect_url=%2Ffile%2F1493290107980"
            target="_blank"
            >
            Internal Research and Development (IRAD) Proposal Template
            </a>
            </p>
        

            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex justify-center w-full lg:w-auto mt-8 lg:mt-0">
        <div className="w-full max-w-full lg:max-w-[30rem]">
          <div className="space-y-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex gap-4 lg:gap-6 items-start">
                {/* Profile Image */}
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-20 h-20 lg:w-28 lg:h-28 rounded-full object-cover flex-shrink-0"
                />

                {/* Member Info */}
                <div className="flex-1 pt-1">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-700">{member.title}</p>
                  <p className="text-sm text-gray-700">Mobile: {member.mobile}</p>
                  <a href={`mailto:${member.email}`} className="text-sm text-blue-500 hover:underline">
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
           
          </div>
          <div className="w-full max-w-full lg:max-w-[30rem] mt-8">
          <h4 className="text-black font-bold text-2xl lg:text-3xl mt-4">
            Proposal Budget Requests
            </h4>
            <p className="text-gray-700 mt-4">
            SSAI employees planning to submit proposals as PIs or co-Is, whether or not they are requesting SPS funds, should submit a budget request as early as possible—ideally once the team is defined. A draft of the proposal is not required at this stage, but because budget preparation can be time-consuming and iterative, it should be developed in parallel with the technical portion of the proposal. Proposal Budget requests must be submitted no later than three weeks before the proposal deadline. Instructions are located below in the drop down menu along with the forms needed to complete proposal budget. 
</p>
<p className="text-gray-700 mt-4">
Please complete the appropriate form (PI or co-I), review the instructions as needed, and send the form to the Office of Sponsored Programs (OSP) at osp@ssaihq.com, with John Duvall (john.duvall@ssaihq.com) and Oreste Reale copied.
</p>
<div className="relative inline-block w-full max-w-xs mt-6">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md flex items-center justify-between transition-colors duration-200"
      >
        <span className="text-lg">Forms & Instructions</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul className="py-2">
            {formsLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-blue-600 hover:bg-gray-50 transition-colors duration-150"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

<SimpleCarousel/>
          </div>

        
        </div>
      </div>
    </div>
  )
}