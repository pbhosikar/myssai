export default function ITMessageSection() {
    return (
      <div className="max-w-4xl mx-auto p-6 font-sans">
        {/* Message from IT Team Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Message from IT Team</h1>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the IT Help Desk!</h2>
            <p className="text-gray-700 mb-4">
              Here at SSAI, our IT Help Desk is dedicated to providing you with the best possible support for all your technical needs. We encourage you to review the Quick Tips below for helpful information and solutions to common issues. These tips are designed to save you time and get you back to work faster.
            </p>
            <p className="text-gray-700 mb-4">
              If you need further assistance or have any questions, please don't hesitate to contact us at <span className="text-blue-600">it_help@ssaihq.com</span>.<br />
              We're here to help!
            </p>
            <p className="text-gray-700 font-medium">
              Stay productive and connected!
            </p>
          </div>
        </div>
  
        {/* IT Quick Tips Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">IT Quick Tips</h1>
          <div className="border-t-2 border-gray-300 my-6"></div>
        </div>
  
        {/* IT Update Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">IT Update</h2>
          
          {/* Trip Report eForm */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Trip Report eForm Now Live!
            </h3>
            <p className="text-gray-700 mb-3">
              We are excited to announce the launch of the new <span className="font-bold">Trip Report eForm</span>, designed to streamline the process of reporting travel activities and outcomes. This eForm offers a user-friendly experience, allowing employees to document trip details and submit reports efficiently. With enhanced workflow automation, travel reports will now be routed directly to Travel Admin's for review, ensuring faster processing and better accuracy. The Trip Report eForm is part of our ongoing effort to modernize internal processes and improve operational efficiency. Start using the Trip Report eForm today and enjoy a smoother, more efficient travel reporting process!
            </p>
            <p className="text-gray-700">
              All eForms can be access via your OKTA Dashboard or the following link: <span className="text-blue-600">https://ir.ssai.app</span>
            </p>
          </div>
  
          {/* SSAI Network Status */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              SSAI Network Status July 2024
            </h3>
            <p className="text-gray-700 mb-3">
              Here is an important communication to read in SSAI Box regarding the Weekly IT Update.
            </p>
            <p className="text-gray-700">
              If you have trouble accessing the Box document, please email IT Support at <span className="text-blue-600">it_help@ssaihq.com</span>.
            </p>
          </div>
        </div>
      </div>
    );
  }