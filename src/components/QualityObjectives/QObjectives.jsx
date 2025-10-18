import Image from "next/image"
import Link from "next/link"

export default function QObjectives() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Right Column - Sidebar - Moved to top on mobile */}
        <div className="lg:col-span-1 order-1 lg:order-2">
          {/* Contact Card */}
          <div className="p-6 ">
            <div className="flex gap-2 items-start text-start">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-gray-200">
                <Image
                  src="/img/company/management-page/1.jpg"
                  alt="Josie Pearson"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>

              <h3 className="text-xl font-bold text-gray-700 mb-2">Josie Pearson</h3>
              <p className="text-sm text-gray-700 mb-1">Office: 757-951-1607</p>
              <a href="mailto:josie.pearson@ssaiha.com" className="text-blue-600 text-sm hover:underline">
                josie.pearson@ssaiha.com
              </a>
              </div>
            </div>
          </div>

          {/* Quality Policy Box */}
          <div className="border border-blue-600 overflow-hidden mt-4">
            <div className="bg-blue-700 text-white px-4 py-3">
              <h3 className="text-lg font-bold">Quality Policy</h3>
            </div>
            <div className="p-4  space-y-3">
              <h4 className="font-bold text-[1.125rem] text-gray-700">Service, Satisfaction, And Innovation</h4>
              <ul className="space-y-2 text-sm text-gray-900">
                <li>
                  <span className="">
                    Continually improve our services, quality system, and related processes
                  </span>
                </li>
                <li>
                  <span className="">
                    Focus on customer satisfaction and loyalty by meeting or exceeding customer requirements and
                    expectations
                  </span>
                </li>
                <li>
                  <span className="">
                    Maintain a motivated, highly skilled, diverse and inclusive, and innovative team while adhering to
                    our values and vision
                  </span>
                </li>
                <li>
                  <span className="">
                    Conform to contractual and regulatory requirements, as well as the strictest standards of ethical
                    behavior, promoting equality, and corporate responsibility
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* QMS Links Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-4">QMS Links</h3>
            <div className="border border-zinc-200 rounded-md overflow-hidden">
  <a
    href="https://ssaihq.account.box.com/login?redirect_url=%2Ffile%2F1701245416333"
    className="text-blue-600 hover:underline text-sm block px-3 py-2 border-b border-zinc-200"
  >
    Quality Action Request (QAR) Form
  </a>
  <a
    href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fcr4puctk3zwhmf0jggfaccqxxwyg4lsa"
    className="text-blue-600 hover:underline text-sm block px-3 py-2"
  >
    Quality Management System (QMS) Manual
  </a>
</div>

          </div>

          {/* Pagination */}
          {/* <div className="text-sm text-muted-foreground">
            <p>Showing 1 to 2 of 2 entries</p>
          </div> */}
        </div>

        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
          {/* Quality Objectives Section */}
          <section>
            <h1 className="text-3xl font-bold mb-4 !text-black">Quality Objectives</h1>
            <p className=" leading-relaxed text-gray-700">
              The Objective of the SSAI Quality Management System (QMS) is the consistent delivery of services that meet
              each customer's requirements and achieve or surpass customer expectations. Our quality objectives are
              consistent with the quality policy. Our primary quality objectives are customer satisfaction, attracting
              and retaining qualified employees, and continual improvement.
            </p>
          </section>

          {/* Management Commitment Section */}
          <section>
            <h2 className="text-2xl font-bold  mb-4 text-black">Management Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              SSAI's management is committed to ensuring customer requirements are met with the aim of enhancing
              customer satisfaction. SSAI has appointed a Process Owner for each process area, who is responsible for
              ensuring the QMS processes are implemented and maintained.
            </p>
          </section>

          {/* Process Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quality Management */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3"><a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Feflj930iwu0l3ipuh4932dwatvt93x5r"
               className="text-blue-600 hover:underline"
              >

                
                Quality Management (QMP)
              </a>
                </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>QMP-001 Documentation Control</li>
                <li>QMP-002 Quality Review</li>
                <li>QMP-003 Internal Audits</li>
                <li>QMP-004 Quality Actions</li>
                <li>QMP-005 Quality Communication</li>
              </ul>
            </div>

            {/* Business Strategy Management */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3">
                <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fyvpfqvnxoqvrwwg09c1igodcmiqlug7d"
                className="text-blue-600 hover:underline"
                >

                Business Strategy Management (BSM)
                </a>
                </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>BSM-001 Strategic Planning</li>
                <li>BSM-002 Business Risk Management</li>
                <li>BSM-003 Business Knowledge Management</li>
              </ul>
            </div>

            {/* Business Development */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3">
                <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fcv1npfir35dq50u81pmi8rqj2mi251y7"
                 className="text-blue-600 hover:underline"
                >

                Business Development (BDP)
                </a>
                </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>BDP-001 Business Development Opportunities Identification & Tracking Process</li>
                <li>BDP-002 Proposal Development Process</li>
              </ul>
            </div>

            {/* Contracts */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3">
                <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fq9u34q7pp90kqa7rhiqcowxiwkncomso"
                   className="text-blue-600 hover:underline"
                >

                Contracts (CNT)
                </a>
                
                </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>CNT-001 Contract Administration</li>
                <li>CNT-002 New Contract Start-up and Planning</li>
                <li>CNT-003 New Contract Phase-in</li>
                <li>CNT-004 Contract Modification</li>
              </ul>
            </div>

            {/* Customer Service Delivery */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3">
                <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2F4w3i4mg33nlwkjudd3389b0u1dowbt79"
                
                target="_blank"
                  className="text-blue-600 hover:underline"
                >

                Customer Service Delivery (CSD)
                </a>
                
                </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>CSD-001 Customer Service Delivery</li>
                <li>CSD-002 Establish Understanding of Requirements and Plan Work</li>
                <li>CSD-003 Work Initiation Approval</li>
               <li> CSD-005 Process for Performing and Monitoring Work</li>
               <li>CSD-006 Program/Project Reviews</li>
               <li>CSD-007 Process for Staff Work Authorization</li>
              </ul>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3">
                <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fjqb30yi34as1g3b06rfhebu3s9pjh2pg"
                target="_blank"
                className="text-blue-600 hover:underline"
                >
                Facilities (FAC)
                </a>
                
                </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>FAC-001 Physical Security</li>
                <li>FAC-002 Facilities Services</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3">
                <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fq5ts9ut6cvjfcivjytp6h7hfp9ko2gyk"
                 target="_blank"
                className="text-blue-600 hover:underline"
                >

                Human Resources Management (HRM) 
                </a>
                </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>HRM-001 Hiring/Placement</li>
                <li>HRM-002 Employee Communications</li>
                <li>HRM-003 Employee Training</li>
                <li>HRM-004 Performance Reviews</li>
                <li>HRM-005 Pay Practices</li>
                <li>HRM-006 Remedial and Disciplinary Actions</li>
                <li>HRM-007 Safety & Health</li>
                <li>HRM-008 Employment Terminations</li>
              
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3">
                <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fzcvpzmoipy0nt55v55wdalxdnav3ewhh"
                target="_blank"
                className="text-blue-600 hover:underline"
                >

                Information Technology Infrastructure (ITI)
                </a>
                
                </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>ITI-001 IT Infrastructure</li>
               
              </ul>
            </div>
          
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3">
                <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fp2lu5lu7gzu2alonvcp4n9rb2q3ha3c8"
                 target="_blank"
                className="text-blue-600 hover:underline"
                >

                Procurement (PRO)
                </a>
                
                </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>PRO-001 Procurement</li>
               <li> PRO-002 Vendor Rating</li>
               
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-3">
                <a href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fwomlet11zzo2ihdyknx8tybkdv4v15yp"
                 target="_blank"
                className="text-blue-600 hover:underline"
                >
                Property (PRP)
                </a>
                </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
             <li> PRP-001 Property Management – Customer Provided</li>
             <li> PRP-002 SSAI Asset/Property Control  </li> 
             <li> PRP-003 Receiving, Inspection, & Discrepancy Reporting of Supplies & Materials</li>
               
              </ul>
            </div>
          </div>
          <h3 className="text-[1.2rem] font-bold !text-black mb-3">SSAI's Process Asset Library (PAL)

</h3>
          <p className="space-y-1 text-gray-700 text-xl">SSAI has implemented a process asset library (PAL) to improve information sharing throughout the organization.  The SSAI Process Library serves as a table of contents and repository for key process-related documents, including policies, procedures, guidelines, work instructions, plans, templates, and other relevant materials. The PAL utilizes SSAI's Box environment, but some documents may be stored outside of this environment for security or regulatory reasons. For instance, policies continue to be maintained in the ADP Workforce now tool as it allows for review and sign-off by all employees. Due to the content's sometimes-sensitive nature, access to the folders within the library is generally restricted to managers or those employees with a specific need to access them.  If you need access to a document in the library, please contact your program or department manager.  Access can be granted by Keith Duffy, David McBride, or Josie Pearson.   
          </p>
          <p className="space-y-1 text-gray-700 text-xl">SSAI Process Library: <a
          href="https://ssaihq.account.box.com/login?redirect_url=%2Ffolder%2F259595250355"
          className="text-blue-600 hover:underline"
          >
           SSAI Process Library in Box </a></p>
        </div>
      </div>
    </div>
  )
}