import Image from "next/image";
import FAQSection from "./FAQSection";

export default function PhishingEmail() {
    return (
      <div className="min-h-screen bg-white">
        {/* Main Container */}
        <div className="max-w-6xl mx-auto px-8 py-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Phishing Email Section */}
              <section className="space-y-4">
                <h1 className="text-3xl font-bold text-center text-gray-900">Phishing Email</h1>
  
                <p className="text-gray-700 leading-relaxed text-center">
                  Phishing emails often look like legitimate messages but are designed to steal your personal or company
                  information. Be cautious of:
                </p>
  
                {/* Warning Points */}
                <ul className="ml-4 text-center">
                  <li className="text-gray-700">
                    <span className="font-bold">*</span> Unfamiliar senders or suspicious email addresses
                  </li>
                  <li className="text-gray-700">
                    <span className=" ">*</span>{" "}
                    <span className="">Urgent or alarming messages asking for sensitive information</span>
                  </li>
                  <li className="text-gray-700">
                    <span className=" ">*</span> Links or attachments that you weren't expecting
                  </li>
                </ul>
  
                {/* Action Text */}
                <p className="text-gray-700 leading-relaxed pt-4 text-center">
                  If you're unsure, don't click any links or download attachments. Instead, report the email to{" "}
                  <a href="mailto:it_help@ssaihq.com" className="text-blue-600 hover:underline font-semibold">
                    it_help@ssaihq.com
                  </a>{" "}
                  for verification. For additional information, click the button below to view the Phishing Awareness
                  Video. Stay vigilant to keep your data safe!
                </p>
  
  <div className="w-full flex items-center justify-center">
                 <a href="https://www.youtube.com/watch?si=_vF_vXV2TczZ8h1h&v=o0btqyGWIQw&feature=youtu.be" target="_blank" className="text-center text-blue-600 px-6 py-2 rounded font-semibold transition-colors border border-blue-600">
                    
                  Phishing Awareness Video
                 
                    </a>
               </div>


                
              </section>
  
              {/* Concur Section */}
              <section className="space-y-6">
                {/* Concur Logo */}
                <div className="flex justify-center">
  <div className="bg-blue-600 rounded-lg w-40 h-40 flex items-center justify-center overflow-hidden">
    <Image
      src="/img/company/information_technology/concurimage.png" // Update with your actual image path
      alt="CONCUR"
      width={160}
      height={160}
      className="w-full h-full object-cover"
    />
  </div>
</div>
  
                {/* Concur Registration */}
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">Concur Account Registration</h2>
                  <p className="text-gray-700 text-sm">To register for Concur, follow these general steps:</p>
  
                  {/* Steps */}
                  <ol className="text-gray-700 space-y-1 text-center text-sm">
                    <li>1. Access the Concur registration page.</li>
                    <li>2. Sign up using your company email address.</li>
                    <li>3. Set up your account by completing the required profile information.</li>
                  </ol>
  
                  {/* Support Text */}
                  <p className="text-gray-700 pt-4 text-sm">
                    For any questions or issues during the registration process click Concur Registration Help below or
                    reach out to{" "}
                    <a href="mailto:it_help@ssaihq.com" className="text-blue-600 hover:underline font-semibold">
                      it_help@ssaihq.com
                    </a>{" "}
                    for support!
                  </p>
                </div>
               <div className="w-full flex items-center justify-center">
                 <a href="https://ssaihq.app.box.com/s/hocwhthpys1gwwmlha8nywlkd6lfhqz8" target="_blank" className="text-center text-blue-600 px-6 py-2 rounded font-semibold transition-colors border border-blue-600">
                    
                  Concur Registration Help
                 
                    </a>
               </div>
                <div className="max-w-4xl mx-auto">
                
          {/* Gear Icon */} <div className="pt-4 flex justify-center">
                  
                </div>
                <div className="flex justify-center">
  <div className="bg-blue-600 rounded-lg w-40 h-40 flex items-center justify-center overflow-hidden">
    <Image
      src="/img/company/information_technology/efrom.png" // Update with your actual image path
      alt="CONCUR"
      width={160}
      height={160}
      className="w-full h-full object-cover"
    />
  </div>
</div>
  
     
  
          {/* Main Heading */}
          <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">Voucher E-Form Launch</h1>
  
          {/* Section 1: Accessing the Voucher eForm */}
          <div className="mb-12">
            <h2 className="text-center text-lg font-bold text-gray-900 mb-4 underline">Accessing the Voucher eForm</h2>
            <p className="text-center text-gray-700 mb-4">You can access the Voucher eForm in two convenient ways:</p>
            <ol className="text-center text-gray-700 space-y-2 mb-6">
              <li>
                <span className="font-semibold">1. Entra ID Dashboard</span> – Locate and click the Voucher eForm tile.
              </li>
              <li>
                <span className="font-semibold">2. Direct Access</span> – Visit{" "}
                <a
                  href="https://fr.ssai.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  https://fr.ssai.app
                </a>{" "}
                to go directly to the form.
              </li>
            </ol>
          </div>
  
          {/* Section 2: Steps for Voucher Submission */}
          <div>
            <h2 className="text-center text-lg font-bold text-gray-900 mb-6 underline">Steps for Voucher Submission</h2>
  
            {/* Step 1 */}
            <div className="mb-8">
              <h3 className="text-center font-bold text-gray-900 mb-3">1. Employee Submission</h3>
              <p className="text-center text-gray-700">
                Log into the eForms portal, fill out the required information on the Voucher eForm, and submit it.
              </p>
            </div>
  
            {/* Step 2 */}
            <div className="mb-8">
              <h3 className="text-center font-bold text-gray-900 mb-3">2. Supervisor/Manager Approval</h3>
              <p className="text-center text-gray-700">
                After submission, your Supervisor/Manager will receive an approval notification in Box Storage. They can
                either approve or reject the form.
              </p>
            </div>
  
            {/* Step 3 */}
            <div className="mb-8">
              <h3 className="text-center font-bold text-gray-900 mb-3">3. Group Lead Approval</h3>
              <p className="text-center text-gray-700">
                Once approved by the Supervisor, an email notification is sent to the Group Lead for further approval or
                rejection.
              </p>
            </div>
  
            {/* Step 4 */}
            <div>
              <h3 className="text-center font-bold text-gray-900 mb-3">4. Accounting Approval and Reimbursement</h3>
              <p className="text-center text-gray-700">
                After the Group Lead's approval, the form moves to Accounting for final review. Upon approval, Accounting
                initiates the reimbursement process and will notify you with the voucher number and payment timeline.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
        <div className="w-full flex items-center justify-center">
                 <a href="https://my.ssai.app/%7B%22en_US%22:%22%22%7D" target="_blank" className="text-center text-blue-600 px-6 py-2 rounded font-semibold transition-colors border border-blue-600">
                    
                 Voucher E-Form Submission Guide
                 
                    </a>
               </div>
       
          {/* Gear Icon */}
          <div className="flex justify-center">
  <div className="rounded-lg w-full h-40 flex items-center justify-center overflow-hidden">
    <Image
      src="/img/company/information_technology/kyocera.png"
      alt="CONCUR"
      width={431}
      height={117}
      className="w-full h-full lg:w-[431px] lg:h-[117px] md:h-[117px] object-cover"
    />
  </div>
</div>
  
          {/* E-Forms Label */}
        
  
          {/* Main Heading */}
          <h1 className="text-center text-3xl font-bold text-gray-900 mb-4">Setup & Printing</h1>
  
          {/* Section 1: Accessing the Voucher eForm */}
          <div className="mb-12">
            <h2 className="text-center text-lg font-bold text-gray-900 underline">Step 1:</h2>
            <p className="text-center text-gray-700 "> Use <a href="https://ky.ssai.app/" target="_blank" className="text-blue-600">https://ky.ssai.app</a> to access Kyocera’s login page. Alternatively, you can use
           <a href="https://science-systems-and-applications.cps-us.kyocera.biz/login" target="_blank" className="text-blue-600"> https://science-systems-and-applications.cps-us.kyocera.biz/login </a></p>
            <h2 className="text-center text-lg font-bold text-gray-900  underline">Step 2:</h2>
            <p className="text-center text-gray-700 ">Log in from the homepage using the Microsoft login option and your SSAI credentials.</p>
            <h2 className="text-center text-lg font-bold text-gray-900 underline">Step 3:</h2>
            <p className="text-center text-gray-700 ">Once logged in, select Applications from the sidebar and download the version suitable
for your device (you may need administrative access to complete the download). Please
contact IT_help@ssaihq.com for assistance with the install if needed.</p>
<h2 className="text-center text-lg font-bold text-gray-900  underline">Step 4:</h2>
            <p className="text-center text-gray-700 ">After the download finishes, log in to the Kyocera app using the Microsoft Login option
            and your SSAI credentials on your PC or Mac.</p>

           <h2 className="text-center text-lg font-bold text-gray-900 underline">Step 5a:</h2>
            <p className="text-center text-gray-700 ">After installation, a new printer named 'Kyocera Cloud Print and Scan' will be added to
your computer. This should be the primary printer you select for all print jobs. To
retrieve your prints, follow Step 7 if the software is installed and you're logged into the
Kyocera Cloud Print and Scan software on your machine. If not, refer to Step 5b for an
alternative browser-based printing method. (App version has a 500 MB file capacity).</p>
<h2 className="text-center text-lg font-bold text-gray-900  underline">Step 5b:</h2>
            <p className="text-center text-gray-700">On the web version of Kyocera which is suitable for devices where the cloud print
software is not installed (to include Phones, PC, Mac, tablets), in a new browser session
log in using the info in step 1 and 2, select Jobs from the sidebar to begin uploading
the documents you want to print. Once on the Jobs screen, click Upload to choose the
documents (ensure they are in a compatible format, this version has a 10 MB limit).</p>
<h2 className="text-center text-lg font-bold text-gray-900 underline">Step 6:
</h2>
            <p className="text-center text-gray-700 ">After uploading your documents, click on your name in the top-right corner of the
screen. A drop-down menu will appear—select User Profile. On the profile page, click
the Credentials tab to view your printer PIN.</p>

<h2 className="text-center text-lg font-bold text-gray-900  underline">Step 7:
</h2>
            <p className="text-center text-gray-700 ">Go to any Kyocera printer and select Cloud Print and Scan. You’ll be prompted to
            enter the PIN you found in Step 6.</p>
            <h2 className="text-center text-lg font-bold text-gray-900 mb-4 underline">Step 8:
</h2>
            <p className="text-center text-gray-700 ">Once you’ve entered your pin, you will be prompted to select between print and scan.
Select print then select your document which should have first been uploaded at Step 5.
After you select it, you will be given the option to customize print settings and then print
it.</p>
<p className="text-center text-gray-700 mb-4">Note: For more information on Box Scanner Documentation and scanning a document, click <a href="https://ssaihq.box.com/s/i0y9kjt3uvzz5v68sjs94yzaf6l7jxl9" target="_blank" className="text-blue-600">here.</a></p>
          {/* Section 2: Steps for Voucher Submission */}
         </div>

         </div>
         <FAQSection/>
         </section>
         </div>
        
            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Video Placeholder */}
              <div className="bg-gray-300 rounded-lg h-56 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-400 text-4xl mb-2">📹</div>
                </div>
              </div>
  
              {/* Video Note */}
              <p className="text-gray-600 italic text-xs leading-relaxed">
                **If the video does not play, you may have to refresh and sign in again for the video to play.
              </p>
  
              {/* Box Training Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Box Training!</h3>
  
                <p className="text-gray-700 leading-relaxed text-sm">
                  New to Box? This quick training video will help you get started with the platform. We'll cover essential
                  features, including how to navigate the All Files page (your Box home dashboard), and efficiently access
                  your most critical content. You'll also learn how to interpret folder color-coding, understand
                  permission levels, and identify who has access to your files, ensuring secure and organized
                  collaboration. For more formal training and documentation on Box, click the links below!
                </p>
  
                {/* Links */}
                <div className="space-y-2 pt-2">
                  <a href="#" className="block text-blue-600 hover:underline font-semibold text-sm">
                    Box Training!
                  </a>
                  <a href="#" className="block text-blue-600 hover:underline font-semibold text-sm">
                    Box Support Documents!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  