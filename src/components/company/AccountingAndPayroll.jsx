"use client";

import Image from "next/image";
import Link from "next/link";
import backimg from "../../../public/company/accountingandpayroll/accountback.webp";

export default function AccountingPayroll() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with calculator background */}
      <div
        className="relative h-30 bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden"
       style={{
  backgroundImage: `url(${backimg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
}}

      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-xl md:text-2xl font-bold text-gray-100 leading-tight">
              Accounting and Payroll
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Pay Schedule and Holiday Schedule */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pay Schedule and Holiday Schedule Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pay Schedule Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"></div>
                  <div className="relative z-10">
                    {/* Calendar representation */}
                    <div className="bg-white rounded-lg shadow-md p-4 transform -rotate-3">
                      <div className="grid grid-cols-7 gap-1 text-xs">
                        <div className="text-center font-bold text-red-500">
                          S
                        </div>
                        <div className="text-center font-bold">M</div>
                        <div className="text-center font-bold">T</div>
                        <div className="text-center font-bold">W</div>
                        <div className="text-center font-bold">T</div>
                        <div className="text-center font-bold">F</div>
                        <div className="text-center font-bold text-red-500">
                          S
                        </div>
                        {Array.from({ length: 28 }, (_, i) => (
                          <div
                            key={i}
                            className={`text-center py-1 ${
                              i === 14
                                ? "bg-blue-500 text-white rounded font-bold"
                                : i === 29
                                ? "bg-green-500 text-white rounded font-bold"
                                : "text-gray-600"
                            }`}
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                      <div className="text-center mt-2 text-sm font-bold text-blue-600">
                        PAYDAY
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Pay Schedule
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Access the link below to view the 2025 Pay Schedule.
                  </p>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
                  >
                    Pay Schedule
                  </Link>
                </div>
              </div>

              {/* Holiday Schedule Card */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 overflow-hidden">
                  {/* City skyline silhouette */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900 to-transparent">
                    <svg
                      viewBox="0 0 400 60"
                      className="w-full h-full opacity-30"
                    >
                      <rect
                        x="0"
                        y="30"
                        width="30"
                        height="30"
                        fill="currentColor"
                      />
                      <rect
                        x="35"
                        y="20"
                        width="25"
                        height="40"
                        fill="currentColor"
                      />
                      <rect
                        x="65"
                        y="35"
                        width="20"
                        height="25"
                        fill="currentColor"
                      />
                      <rect
                        x="90"
                        y="15"
                        width="30"
                        height="45"
                        fill="currentColor"
                      />
                      <rect
                        x="125"
                        y="25"
                        width="25"
                        height="35"
                        fill="currentColor"
                      />
                      <rect
                        x="155"
                        y="10"
                        width="35"
                        height="50"
                        fill="currentColor"
                      />
                      <rect
                        x="195"
                        y="30"
                        width="20"
                        height="30"
                        fill="currentColor"
                      />
                      <rect
                        x="220"
                        y="20"
                        width="30"
                        height="40"
                        fill="currentColor"
                      />
                      <rect
                        x="255"
                        y="35"
                        width="25"
                        height="25"
                        fill="currentColor"
                      />
                      <rect
                        x="285"
                        y="15"
                        width="20"
                        height="45"
                        fill="currentColor"
                      />
                      <rect
                        x="310"
                        y="25"
                        width="35"
                        height="35"
                        fill="currentColor"
                      />
                      <rect
                        x="350"
                        y="30"
                        width="25"
                        height="30"
                        fill="currentColor"
                      />
                      <rect
                        x="380"
                        y="20"
                        width="20"
                        height="40"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-center text-white">
                      <div className="border-4 border-red-500 rounded-full px-8 py-4 bg-blue-800 bg-opacity-50 backdrop-blur-sm">
                        <span className="text-2xl font-bold">Holiday</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Holiday Schedule
                  </h3>
                  <p className="text-gray-600 mb-4">
                    View all eleven federal holidays for 2024.
                  </p>
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
                  >
                    ADP Portal
                  </Link>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">
                  <svg
                    className="mx-auto w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">No Results Found</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Meet the Team */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Meet the Team
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    SB
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Saawan Bhatt
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Senior Accounting Specialist
                    </p>
                    <p className="text-gray-600 text-sm">Supervisor</p>
                    <Link
                      href="mailto:saawan.bhatt@ssaihq.com"
                      className="text-blue-600 hover:text-blue-800 text-sm hover:underline transition-colors"
                    >
                      saawan.bhatt@ssaihq.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* QuickLinks */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                QuickLinks
              </h2>
              <div className="space-y-6">
                {/* Time and Expense */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold text-lg hover:underline transition-colors block"
                  >
                    Time and Expense
                  </Link>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
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
                <div className="border-l-4 border-green-500 pl-4">
                  <Link
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-semibold text-lg hover:underline transition-colors block"
                  >
                    ADP Workforce Now Portal
                  </Link>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    Your one stop shop to see your benefits, paychecks and
                    employment status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-16 space-x-6">
          <span className="text-gray-500 text-sm">
            Showing 1 to 2 of 2 entries.
          </span>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <svg
                className="w-5 h-5"
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
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              1
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <svg
                className="w-5 h-5"
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
