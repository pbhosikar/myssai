"use client"

const faqData = [
  {
    question:
      "New Hire question can related to accessing Time & Expense tile on same day their account created in Costpoint.",
    answer:
      "They need to check first with Payroll team that when did they created their account in costpoint and found if account created same day they need to wait till next day for accessing it.",
    details: [
      "NOTE : For all questions above, we can troubleshoot more if the problem is not solved. If that's the case, they should reach out to it_help@ssaihq.com or can call 301-867-2100.",
    ],
  },
  {
    question: "Unable to connect hub.ssaihq.com VPN through Cisco anyconnect.",
    answer:
      "Most NASA users may not be aware that ehub.ssaihq.com VPN is no longer available and has been replaced by the Barracuda CGA VPN.",
  },
  {
    question: "Unable to do Teams screen sharing on MAC.",
    answer: "Troubleshooting - Users with a Mac can have 15-minute admin privileges.",
    details: [
      "Users must have a NASA badge and card reader to elevate the privileges.",
      'Steps: Go to launchpad, open self-service and search for "Elevate account privileges," then click on start.',
      "Once it's done, go to system settings, privacy and security, then screen & system audio recording, toggle on Teams, and restart your application.",
    ],
  },
  {
    question: "How to change password for remote desktop RPM?",
    answer: `Once you get into remote desktop, single right mouse click on the screen and refresh it. Then, for Windows laptops, use the key combo “Ctrl+Alt+End” and for Mac laptops, use “control+option+delete” on your physical keyboard. It will prompt a screen. Click on "Change password" and type in the password provided by IT or your own old password in the old password field, then change it with the new one.`,
  },
  {
    question: "Issues with accessing Costpoint and RPM or can't connect to Deltek and RPM.AT a time only one VPN will work",
    answer: `For Windows users:`,
    details: [
        "1. Close CloudGen completely by quitting it through its settings.",
        "2. Open Command Prompt (cmd).",
        '3. Execute the "ipconfig /flushdns" command and then close Command Prompt',
    `4. Open CloudGen from the Start Menu and ensure it is connected.`,
    `5. Open Deltek through CloudGen or the OKTA Dashboard.`
    ],
},
{
    question: "For Mac users:",

    details: [
       `1. Click on the CGA (fishfin) icon at the top of the screen.`,
       "2. If the icon is not visible at the top, look for it in launchpad named as Access, open it and wait until it appears at the top and is connected.",

     `3. Click on the icon again and click on the gear icon to check if it is connected or not. Now try accessing Costpoint.`, 
  `4. One troubleshooting step we can try is repairing the VPN adapter if CGA is acting weird.`,
  `NOTE: More troubleshooting can be done but above are basic users can try. `    ],
},
]

export default function FAQSection() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">IT Frequently Asked Questions</h1>

        <div className="space-y-0">
          {faqData.map((item, index) => (
            <div key={index}>
              <div className="py-6 p-5 border border-gray-200">
                {/* Question */}
                <p className="text-gray-800 text-base leading-relaxed mb-3">{item.question}</p>

                {/* Answer - Bold */}
                <p className="font-bold text-gray-900 text-base leading-relaxed mb-3">{item.answer}</p>

                {/* Details */}
                {item.details && item.details.length > 0 && (
                  <div className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-800 text-base !font-bold leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Divider - except for last item */}
              {/* {index < faqData.length - 1 && <div className="border border-gray-200"></div>} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}