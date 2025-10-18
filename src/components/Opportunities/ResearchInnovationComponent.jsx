import SimpleCarousel from "./SimpleCarousel"

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

  return (
    <div className="w-full flex justify-center items-start gap-12 mt-8">
      {/* Info Cards Section */}
      <div className="flex justify-center">
        <div className=" overflow-hidden flex flex-col">
          {/* Image/Logo Section */}
          <div className="flex items-center justify-center">
            <img 
              src="/img/company/opportunities/opportunities.png" 
              className="object-cover" 
              style={{ width: '813px', height: '206px' }}
              alt="Box"
            />
          </div>
          
          {/* Content Section - Side by Side with same width as image */}
          <div className="flex flex-col md:flex-row" style={{ width: '813px' }}>
            <div className="md:w-1/2 p-6">
            <h4 className="text-gray-700 font-bold text-2xl mb-4">Small Proposal Support (SPS)</h4>
              <p className="text-gray-700">
              The Small Proposal Support (SPS) component of SSAI’s IRI Program provides funding to foster professional growth and expand career opportunities for SSAI employees whose primary interest is research.</p>
           
           <h4 className="text-gray-700 font-bold text-xl">The SPS program does:</h4>
           <p className="text-gray-700">
           increase the base of potential proposers in SSAI
offer incentive for SSAI scientists to immerse themselves in the robust taskof writing and submitting proposals
offer growth opportunities to individuals not interested in management.
           </p>
           <h4 className="text-gray-700 font-bold text-xl">SPS Details:</h4>
           <p className="text-gray-700">
           Ongoing year-round open call.
Potential SSAI PIs should submit 1-page request to Chief Scientist and Program Manager
Decisions will be made within a week by Chief Scientist based on responsiveness to call, PI’s qualifications, probability of success, PM’s concurrence.
Goal of SPS requests must be proposal submission, preferably to NASA.
Proposals to other agencies, such as NOAA, DoE or NSF, will be considered.
SSAI PMs will ensure there are no objections from NASA sponsor and that proposed work is not detrimental to existing NASA tasks.
If approved, PI should charge time to SPS Program and not to task while preparing proposal.
SPS should be low-risk, medium-return investment.
Awardees should notify Managers and Chief Scientist of successful proposal submission and outcome.
           </p>
           <h4 className="text-gray-700 font-bold text-xl">SPS requests should contain:</h4>
           <p className="text-gray-700">
           Call specifics
Proposal idea
Tentative team
Total estimated budget (cost should cover no more than 10% LoE to prepare proposal or hours (~20-40)
PI qualifications
Benefits to NASA’s mission and to SSAI in medium term (1-4 years)
           </p>

           <p className="text-blue-700 font-bold">SPS At A Glance</p>
          <p className="text-blue-700 font-bold"> Small Proposal Support (SPS) Request Template</p>
            </div>
            <div className="md:w-1/2 p-6">
            <h4 className="text-gray-700 font-bold text-2xl mb-4">Internal Research and Development (IRAD)</h4>
           <h4 className="text-gray-700 font-bold text-xl">
           IRAD Requirements:

           </h4>
           <p className="text-gray-700">
           IRAD proposals must have an ambitious target (e.g., EV mission, scientific or technical breakthrough)
Attempt to create vast collaborative efforts involving multiple institutions
Respond to an annual internal call for competitively selected proposals
Follow guidance and proposal template
           </p>
           <h4 className="text-gray-700 font-bold text-xl">
           IRAD Details:



           </h4>
           <p className="text-gray-700">
           Interested individuals should submit a brief Notice of Intent (NOI) no longer than 250 words to help the ELC in the selection of a Technical Evaluation Committee (TEC) and appropriate reviewers
The SSAI-IRAD investment should foster development of new, ground-breaking ideas, major science and technology advances, large multi-institutional collaborative efforts, or devise technology-transfers with involvement of NASA’s Strategic Partnership Office (SPO) if needed.</p>


<h4 className="text-gray-700 font-bold text-xl">
IRAD proposals should:

           </h4>
           <p className="text-gray-700">
           Be understood as a high-risk, high-reward investment to support a long-term low-level sustained effort
have a strategic vision for a vast project
offer an explanation of mid- and long-term benefits to SSAI
Aim at increasing SSAI’s revenue
Contain risk assessment and mitigation strategies
Follow the template and be no longer than 8 pages
contain a clear strategic goal
define the work, team and period of performance (1-2 y) and future implications of the work
preferably involve other institutions (NASA, other Agencies, academia, industry) at no-cost for SSAI (i.e., using their own IRAD resources or committing effort levels, or receive endorsements)
Plan to comply with the after-award requirements: Project Plan, Reports, Implementation
</p>


<h4 className="text-gray-700 font-bold text-xl">
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
<p className="text-blue-700 font-bold">IRAD At A Glance</p>
          <p className="text-blue-700 font-bold"> Internal Research and Development (IRAD) Proposal Template</p>
        

            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex justify-center ">
      <div className="w-[30rem]">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-10">Meet the Team</h2> */}

          <div className="space-y-10">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex gap-6 items-start">
                {/* Profile Image */}
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover flex-shrink-0"
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
          <div className=""
          style={{width:"30rem"}}>
          <h4 className="text-gray-700 font-bold text-3xl mt-4">
            Proposal Budget Requests
            </h4>
            <p className="text-gray-700">
            SSAI employees planning to submit proposals as PIs or co-Is, whether or not they are requesting SPS funds, should submit a budget request as early as possible—ideally once the team is defined. A draft of the proposal is not required at this stage, but because budget preparation can be time-consuming and iterative, it should be developed in parallel with the technical portion of the proposal. Proposal Budget requests must be submitted no later than three weeks before the proposal deadline. Instructions are located below in the drop down menu along with the forms needed to complete proposal budget. 
</p>
<p className="text-gray-700">
Please complete the appropriate form (PI or co-I), review the instructions as needed, and send the form to the Office of Sponsored Programs (OSP) at osp@ssaihq.com, with John Duvall (john.duvall@ssaihq.com) and Oreste Reale copied.
</p>


<SimpleCarousel/>
          </div>

        
        </div>
      </div>
    </div>
  )
}