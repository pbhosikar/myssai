import React from "react";
import Image from "next/image";
import Link from "next/link";

const EmployeeFaqs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-36 bg-cover bg-center"
        style={{ backgroundImage: "url('/company/employeefaq/FAQbanner.png')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 flex items-center h-full px-20">
          <h1 className="text-white text-2xl font-bold ml-8">Employee FAQs</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto">
          {/* Frequently Asked Questions Section */}
          <div className=" rounded p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 1</span>
                <span className="text-gray-800">
                 Why did SSAI decide to remove preferred pronouns from the company e-mail signature template?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 2</span>
                <span className="text-gray-800">
                 I noticed the EEO, Affirmative Action and Diversity language has been removed from the SSAI website and mySSAI. Does SSAI no longer support diversity?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 3</span>
                <span className="text-gray-800">
                  Is SSAI planning to continue moving forward with the Employee Resources Groups?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 4</span>
                <span className="text-gray-800">
                  I am hearing that Government Civil Service jobs are being cut. Does SSAI have any information on what the impacts are?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 5</span>
                <span className="text-gray-800">
                 I am worried about my job amid all this uncertainty. Can SSAI provide me any reassurance that my job is secure?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 6</span>
                <span className="text-gray-800">
                  What is SSAI doing to ensure we have jobs if our task is cut?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 7</span>
                <span className="text-gray-800">
                  We hear more information about what is happening in the Federal Government from the news and our customer. Why is SSAI staying silent?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 8</span>
                <span className="text-gray-800">
                  Am I required to have an email signature block? Is there a template my institution can send?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 9</span>
                <span className="text-gray-800">
                 As a remote out-of-state worker on a contract or co-op, am I expected to return to onsite work? Is there information available to read for both co-ops and contractors somewhere?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 10</span>
                <span className="text-gray-800">
                  Are contractors and co-ops who are onsite expected to adhere to GSFC’s “core hours?”
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 11</span>
                <span className="text-gray-800">
                 What schedule flexibilities do contractors and co-ops have? Is it similar to the civil servant Maxiflex?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 12</span>
                <span className="text-gray-800">
                  Are there any protections for contractors and co-ops should a RIF occur at NASA?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 13</span>
                <span className="text-gray-800">
                How would a RIF impact my job (received from many contractors and co-ops)?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 14</span>
                <span className="text-gray-800">
                  Will co-ops and contractors be moved out of offices to make space? Will office occupants be doubled or tripled up?
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 15</span>
                <span className="text-gray-800">
                As a contractor, it hasn’t always been clear exactly what applies to everyone versus only civil servants. Any information from the contractor companies would be helpful.
                </span>
              </div>

              <div className="flex">
                <span className="text-gray-800 font-semibold mr-2">Q 16</span>
                <span className="text-gray-800">
                  What is the latest information about travel as of March 28, 2025?
                </span>
              </div>
            </div>

            <div className="text-start !text-xl mt-6 p-4 text-gray-900">
              <p className="!font-bold">
                Look below for all answers by numerical order.
              </p>
            </div>
          </div>

          {/* Frequently Asked Questions with Answers Section */}
          <div className=" p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions with Answers
            </h2>

            <div className="space-y-6">
              {/* Q1 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 1</span>
                  <span className="text-gray-800 font-semibold">
                    Why did SSAI decide to remove preferred pronouns from the
                    company's e-mail signature template?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> On February 6, 2025, the Office of the Chief Information Officer at NASA sent out a notice announcing that NASA had adopted a uniform signature block for emails that are sent using any nasa.gov email address. All contractors must modify their signature block to follow the appropriate signature block found on page 34 of the NASA Graphic Standards Manual. <Link
    href="https://nasa-external-ocomm.app.box.com/s/q0q5p4iqklt2podwiqemy6787u5l2xt7?utm_medium=email&_hsenc=p2ANqtz-_gZ5ycqJmDsupQFrNQFhwg-eHMGiXULI4GwRmgbEGGkY36VnO_hNrwQOnxBUzkU_o3kTYaxb15gCd3lzxTFL0josLU373ni8xwQAWUYRJcRYF_OEI&_hsmi=346322245&utm_content=346322245&utm_source=hs_email"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 underline"
  >
    NASA Graphic Standards Manual
  </Link>. While you may remove contents (i.e. cell phone, fax numbers, etc.), the signature block should not include additional embellishment. As NASA is our main customer and we communicate with them daily via email, we believe it is in the best interest of the company that we follow their lead. The <Link
    href="https://ssaihq.account.box.com/login?redirect_url=https%3A%2F%2Fssaihq.app.box.com%2Fs%2Fhc67uc50bhb26msd0ci5ea850l1ydl4a"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 underline"
  >
    SSAI email signature template
  </Link> was revised to remove preferred pronouns based on this guidance. 
                  </p>
                </div>
              </div>
              <div className="bg-white rounded shadow-sm p-6">
                <h3 className="text-center font-semibold text-gray-800 mb-4">
                  For Employees who are Contractors working onsite or remotely
                  from a Customer location (NASA or other):
                </h3>

                <div className="flex items-center justify-center">
                  <div className="ml-6">
                    <Image
                      src="/company/employeefaq/emailsignaturemyssai.png" // Replace with your SSAI logo path
                      alt="SSAI Logo"
                      width={600}
                      height={600}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="text-center mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 italic">
                    **NASA contractors can find details regarding the
                    appropriate signature block on page 34 of the{" "}
                    <a
                      href="https://nasa-external-ocomm.app.box.com/s/q0q5p4iqklt2podwiqemy6787u5l2xt7?utm_medium=email&_hsenc=p2ANqtz-94ZSBg2JNcK4qk3OVpC1gRZjAABdfZ34-pyDV7IPDzgDDfU60PXtvIHXlkwNAw1fWleEjP5aL2dUmaHAnQeyBnBzh_4aHJyAa4DGIt9gGTka2roSQ&_hsmi=346322245&utm_content=346322245&utm_source=hs_email"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      NASA Graphic Standards Manual
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Q2 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 2</span>
                  <span className="text-gray-800 font-semibold">
                    I noticed the EEO, Affirmative Action and Diversity language has been removed from the SSAI website and mySSAI. Does SSAI no longer support diversity?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A 1:</strong> This was in response to an Executive Order (EO). Per the President’s Executive Orders, Equal Employment Opportunity, Affirmative Action, and Diversity, Equity, Inclusion, and Accessibility are no longer prioritized by the federal government. We are acting on the advice of our legal counsel not to publicly engage on any of these topics until more guidance is given for Government Contractors. As with all regulatory changes of this nature, we are only doing what we understand is required to maintain compliance and remain competitive in this new and dynamic environment.
                  </p>
                </div>
                 <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A 2:</strong> SSAI supports equal opportunity for all and embraces the positive outcomes from having diverse perspectives. Our People and Culture Statement-- “SSAI is committed to our company-wide culture of non-discrimination, collaboration, innovation, and a sense of belonging. We recognize that there is power in our differences and similarities, styles, ideas, capabilities, and potential as individuals. By working together, we’re more innovative and resilient, physically and psychologically safer, and prepared to conquer any challenge. We facilitate an environment where all are welcomed, heard, and celebrated in a supportive manner in everything we do. Our leadership actively and intentionally engages to increase access to resources, eliminate barriers, and establish an inclusive vision to achieve our goals.“
                  </p>
                </div>
              </div>

              {/* Q3 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 3</span>
                  <span className="text-gray-800 font-semibold">
                Is SSAI planning to continue moving forward with the Employee Resource Groups?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> As January 20, Directors Office of Diversity and Equal Opportunity announced that, in accordance with Presidential Executive Orders, all Employee Resource Groups (ERGs) must be discontinued across the departmental community concerning the quality of services and programs provided to support employees. SSAI will no longer be supporting or facilitating Employee Resource Groups. Activities previously managed or sponsored by ERGs are being evaluated individually. Some activities may be continued through alternative means that align with our business objectives and mission requirements.
                  </p>
                </div>
              </div>

              {/* Q4 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 4</span>
                  <span className="text-gray-800 font-semibold">
                   I am hearing that Government Civil Service jobs are being cut. Does SSAI have any information on what the laypeople are?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> As part of the President's Cost, Efficiency Initiative through the Department of Government Efficiency, all civil servants were offered the opportunity to accept a Voluntary Early Retirement Package (VERP) or a reduction in workforce. This was for federal employees only. SSAI does not have additional insight into what may be coming for the government since Administrators have encouraged us to continue our work effort at full with our typical work, and we're unable to provide any insight as to what may impact might be. What we can promise is that we are making every effort to engage with our customers both within Administration and support functions.
                  </p>
                </div>
              </div>

              {/* Q5 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 5</span>
                  <span className="text-gray-800 font-semibold">
                    I am worried about my job amid all this uncertainty. Can SSAI provide me any reassurance that my job is secure?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> No company is making comprehensive steps to reduce risk and lift the training to find career and twenty alternative opportunities. This is a very dynamic situation and we are monitoring closely and communicating potential alternative opportunities. We will not be leverage employees who are our dear staff and who have information available to read for both co-ops and contractors.
                  </p>
                </div>
              </div>

              {/* Q6 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 6</span>
                  <span className="text-gray-800 font-semibold">
                    What is SSAI doing to ensure we have jobs if our task is cut?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> While SSAI cannot guarantee job security due to the nature of government contracting, we are proactively seeking new contract opportunities and working to diversify our client base. We are also working closely with our current customers to understand their future needs and position ourselves competitively for upcoming opportunities.
                  </p>
                </div>
              </div>

              {/* Q7 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 7</span>
                  <span className="text-gray-800 font-semibold">
            I've hear more information about what is happening in the Federal Government from the news and our customer. Why is SSAI staying silent?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> During these unprecedented times, employees must come communication, as we implemented drop-in hours, where employees will have access to company and program leadership. Additionally, we will be sending future frequent communication and updating these FAQs as we have more information available to add to the list.
                  </p>
                </div>
              </div>

              {/* Q8 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 8</span>
                  <span className="text-gray-800 font-semibold">
                   What information from the customer/task should I focus on interpreting from the news?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> As Yes, the SSAI email signature block templates are available on SSA Please see the e-mail signature block guidance provided to our customers from EIS and T in accordance with their requirements for contractors.
                  </p>
                </div>
              </div>

              {/* Q9 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 9</span>
                  <span className="text-gray-800 font-semibold">
            As a remote out-of-state worker on a contract co-op, am I expected to return to onsite work? Is there information available to read for both co-ops and contractors specifically?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> Return in office policy for the contractors will be updated by the customers and not controlled have one or impact employees who are our civil staff and we are information available to read for both co-ops and contractors.
                  </p>
                </div>
              </div>

              {/* Q10 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 10</span>
                  <span className="text-gray-800 font-semibold">
                   Are contractors and co-ops who are onsite expected to adhere to SSAI's "core hours"?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> All employees are expected to be at a person, it would be current to follow what is on the technical level on which there's work best.
                  </p>
                </div>
              </div>

              {/* Q11 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 11</span>
                  <span className="text-gray-800 font-semibold">
                  What schedule flexibilities do contractors and co-ops have? Is it similar to the civil servant flextime?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> All employees are expected to be able to adhere to follow what is asked by the customer agency, however, SSAI allows staff accommodations on the technical level on which there work best.
                  </p>
                </div>
              </div>

              {/* Q12 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 12</span>
                  <span className="text-gray-800 font-semibold">
                Are there any protections for contractors and co-ops should a RIF occur at NSEA?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> Yes, the federal government processes the ability, in accordance with the FAIR Act to commit any government command over financial assistance at exit.
                  </p>
                </div>
              </div>

              {/* Q13 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 13</span>
                  <span className="text-gray-800 font-semibold">
                   How would a RIF impact my job (overhead from many contractors and co-ops?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong>This current action from OESA or the federal agency focus in placement is to Restart the focus. 13%. We see not sure if there will be multiple timeframe of loss.
                  </p>
                </div>
              </div>

              {/* Q14 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 14</span>
                  <span className="text-gray-800 font-semibold">
           Will co-ops and contractors be moved out of offices to make space? Will office occupants be decided or triaged up?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong>  at Civil customers, including NASA GSFC and has allowed task has committed to balancing the needs of all employees when attempting to working workplace agreements, they would give us civil servants work out our co-ops and contractors.
                  </p>
                </div>
              </div>

              {/* Q15 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 15</span>
                  <span className="text-gray-800 font-semibold">
                 As a contractor, it hasn't always been clear exactly what applies to everyone versus only civil servants. Any information from the contractor companies would be helpful.
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> A contractors
                    guidance are offered via the GSFC and can be accessed in the
                    Support Directories Office's at we are where are the most up
                    to use but if there are additional question through HR.
                  </p>
                </div>
              </div>

              {/* Q16 with Answer */}
              <div>
                <div className="flex mb-2">
                  <span className="text-gray-800 font-semibold mr-2">Q 16</span>
                  <span className="text-gray-800 font-semibold">
                    What is the latest information about travel as of March 26,
                    2025?
                  </span>
                </div>
                <div className="ml-6">
                  <p className="text-gray-700">
                    <strong className="text-gray-800">A:</strong> As there are
                    multiple having not provided formal notice to contractors
                    regarding the approach response track on unit. agency's
                    however, SSAI allows additional staff accommodations on
                    contract task on which there's work best.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeFaqs;
