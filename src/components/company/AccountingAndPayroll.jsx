"use client";

import Image from "next/image";
import Link from "next/link";


export default function AccountingPayroll() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with calculator background */}
      <div
        className="relative h-40 sm:h-48 md:h-56 lg:h-30 bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden"
        style={{
          backgroundImage: `url(/company/accountingandpayroll/accountback.webp)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl font-bold text-gray-100 leading-tight">
              Accounting and Payroll
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-2 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-64">
          {/* Left Section - Pay Schedule and Holiday Schedule */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sm:space-y-12">
              {/* Pay Schedule and Holiday Schedule Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 max-w-6xl mx-auto">
                {/* Pay Schedule Card */}
                <div className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-w-64 h-auto">
                  {/* Image at top */}
                  <div className="relative h-48 sm:h-40 w-full">
                    <Image
                      src='/company/accountingandpayroll/payschedule.png'
                      alt="Pay Schedule"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-4 sm:mb-6">
                      Pay Schedule
                    </h3>
                    <p className="text-xs sm:!text-[13px] text-gray-900 mb-4">
                      Access the link below to view the 2025 Pay Schedule.
                    </p>
                    <Link
                      href="#"
                      className="text-blue-500 hover:text-blue-800 font-medium hover:underline transition-colors text-sm sm:text-base"
                    >
                      Pay Schedule
                    </Link>
                  </div>
                </div>

                {/* Holiday Schedule Card */}
                <div className="bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-w-64 h-auto">
                  {/* Image at top */}
                  <div className="relative h-48 sm:h-40 w-full">
                    <Image
                      src='/company/accountingandpayroll/holidayschedule.webp'
                      alt="Holiday Schedule"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-4 sm:mb-6">
                      Holiday Schedule
                    </h3>
                    <p className="text-xs sm:!text-[13px] text-gray-900 mb-4 sm:mb-6">
                      View all eleven federal holidays for 2024.
                    </p>
                    <Link
                      href="#"
                      className="text-blue-500 hover:text-blue-800 font-medium hover:underline transition-colors text-sm sm:text-base"
                    >
                      ADP Portal
                    </Link>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="rounded-xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Frequently Asked Questions
                </h2>
                <span className="text-gray-600 text-sm sm:text-base">No Results Found</span>
              </div>
            </div>
          </div>

          {/* Right Section - Meet the Team and QuickLinks */}
          <div className="lg:col-span-1">
            <div className="space-y-8 sm:space-y-12">
              {/* Meet the Team */}
              <div className="lg:ml-24">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Meet the Team
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    {/* Profile Image */}
                    <div className="flex-shrink-0 relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                      <Image
                        src='/company/accountingandpayroll/holidayschedule.webp'
                        alt="Saawan Bhatt"
                        className="rounded-full object-cover"
                        fill
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:!text-xl lg:!text-2xl font-bold text-gray-800 truncate">
                        Saawan Bhatt
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Senior Accounting Specialist
                      </p>
                      <p className="text-gray-600 text-xs sm:text-sm">Supervisor</p>
                      <Link
                        href="mailto:saawan.bhatt@ssaihq.com"
                        className="text-blue-500 hover:text-blue-800 text-xs sm:text-sm hover:underline transition-colors break-words"
                      >
                        saawan.bhatt@ssaihq.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* QuickLinks */}
              <div className="lg:ml-24 max-w-full lg:max-w-[400px] w-full">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  QuickLinks
                </h2>
                <div className="space-y-4">
                  {/* Time and Expense */}
                  <div className="border border-gray-200 p-3 sm:p-4">
                    <Link
                      href="#"
                      className="text-blue-500 hover:text-blue-800 text-sm hover:underline transition-colors block"
                    >
                      Time and Expense
                    </Link>
                    <p className="text-gray-600 text-xs sm:!text-sm mt-2 leading-tight">
                      All employees need to enter their time{" "}
                      <span className="font-semibold text-gray-800">daily</span>{" "}
                      and submit their time cards by the{" "}
                      <span className="font-semibold text-gray-800">15th</span>{" "}
                      and the{" "}
                      <span className="font-semibold text-gray-800">
                        last day
                      </span>{" "}
                      of the month, unless informed otherwise.
                    </p>
                  </div>

                  {/* ADP Workforce Now Portal */}
                  <div className="border border-gray-200 p-3 sm:p-4">
                    <Link
                      href="#"
                      className="text-blue-500 hover:text-blue-800 text-sm hover:underline transition-colors block"
                    >
                      ADP Workforce Now Portal
                    </Link>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      Your one stop shop to see your benefits, paychecks and
                      employment status.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-end items-center mt-8 sm:mt-12 lg:mt-16 space-y-4 sm:space-y-0 sm:space-x-6">
          <span className="text-gray-500 text-xs sm:text-sm order-2 sm:order-1">
            Showing 1 to 2 of 2 entries.
          </span>
          <div className="flex items-center space-x-2 order-1 sm:order-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base">
              1
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}