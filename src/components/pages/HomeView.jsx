'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

function ImageCarousel({ slides, interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides?.length, interval]);

  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Responsive height tuned for large displays; keep images contained */}
      <div className="relative h-[320px] md:h-[420px] lg:h-[520px] xl:h-[600px] bg-white">
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.src}
            alt={slide.alt || ''}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
              idx === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      {/* Controls */}
      <button
        aria-label="Previous Slide"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow ring-1 ring-gray-300"
      >
        ‹
      </button>
      <button
        aria-label="Next Slide"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow ring-1 ring-gray-300"
      >
        ›
      </button>
      {/* Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 w-2 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
      {/* Caption overlay (blue pill) */}
      {(slides[current]?.caption || slides[current]?.linkText || slides[current]?.alt) && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center px-4">
          {slides[current]?.linkUrl ? (
            <a
              href={slides[current].linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={
                slides[current]?.caption || slides[current]?.linkText || slides[current]?.alt || ''
              }
              className="block bg-blue-600 text-white font-semibold rounded-full p-[10px] shadow-lg hover:bg-blue-700 transition-colors text-center leading-tight max-w-[820px]"
              style={{
                fontSize: '12px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {slides[current]?.caption || slides[current]?.linkText || slides[current]?.alt}
            </a>
          ) : (
            <div
              title={slides[current]?.caption || slides[current]?.alt || ''}
              className="bg-blue-600 text-white font-semibold rounded-full p-[10px] shadow-lg text-center leading-tight max-w-[820px]"
              style={{
                fontSize: '12px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {slides[current]?.caption || slides[current]?.alt}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Tabs({ tabs }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="flex gap-6 border-b mb-4" role="tablist">
        {tabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => setActive(idx)}
            className={`pb-3 -mb-px border-b-2 transition-colors ${
              active === idx
                ? 'border-blue-600 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            aria-selected={active === idx}
            role="tab"
            type="button"
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div role="tabpanel">{tabs[active].content}</div>
    </div>
  );
}

function FeedbackForm() {
  const [submitting, setSubmitting] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      // Simple client-only acknowledgement
      alert('Thank you for your feedback!');
    }, 400);
  };
  return (
    <form onSubmit={submit} className="space-y-6 text-black text-sm">
      <h2 className="component-heading">SSAI Feedback from Employees</h2>
      <p className="journal-content-article text-sm text-gray-700">
        Please use this form to provide mySSAI and general company feedback. All submissions are
        anonymous. If you would like a direct response, please include your name and email, and
        phone number in your submission.
      </p>
      <p className="text-sm text-gray-500">* Indicates Required Fields</p>

      {/* Name / Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="label font-medium">
            <span className="label-text text-black">Name</span>
            <span className="ml-1 text-gray-400">Optional</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Optional"
            className="input input-bordered w-full text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
            style={{ border: '1px solid gray' }}
          />
        </div>
        <div>
          <label htmlFor="email" className="label font-medium">
            <span className="label-text text-black">Email</span>
            <span className="ml-1 text-gray-400">Optional</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Optional"
            className="input input-bordered w-full text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
            style={{ border: '1px solid gray' }}
          />
        </div>
      </div>

      {/* DateTime / Select */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="datetime" className="label font-medium">
            <span className="label-text text-black">Date and Time</span>
            <span className="ml-1 text-red-500">*</span>
          </label>
          <input
            id="datetime"
            type="datetime-local"
            name="datetime"
            required
            className="input input-bordered w-full text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
            style={{ border: '1px solid gray' }}
          />
        </div>
        <div>
          <label htmlFor="category" className="label font-medium">
            <span className="label-text text-black">Select from List</span>
            <span className="ml-1 text-red-500">*</span>
          </label>
          <select
            id="category"
            name="category"
            required
            defaultValue=""
            className="select select-bordered w-full text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
            style={{ border: '1px solid gray' }}
          >
            <option value="" disabled>
              Choose an Option
            </option>
            <option>mySSAI Home</option>
            <option>mySSAI MyWorkspace</option>
            <option>mySSAI MyHR</option>
            <option>mySSAI Company</option>
          </select>
        </div>
      </div>

      {/* Comments */}
      <div>
        <label htmlFor="comments" className="label font-medium">
          <span className="label-text text-black">Comments</span>
          <span className="ml-1 text-red-500">*</span>
        </label>
        <textarea
          id="comments"
          name="comments"
          required
          placeholder="Add your feedback"
          className="textarea textarea-bordered w-full min-h-[140px] text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
          style={{ border: '1px solid gray' }}
        />
      </div>

      {/* Upload */}
      <div>
        <label htmlFor="upload" className="label font-medium">
          <span className="label-text text-black">Upload</span>
        </label>
        <div className="join w-full">
          <input
            id="upload"
            name="upload"
            type="file"
            className="file-input file-input-bordered join-item w-full text-black text-sm rounded-md shadow-sm p-1"
            style={{ border: '1px solid gray' }}
          />
        </div>
      </div>

      {/* Internal use only */}

      <div className="bg-gray-50 rounded-lg">
        <div className="collapse-title font-medium text-black text-sm">
          FOR COMMUNICATIONS AND I.T. USE ONLY.
        </div>
        <hr className="border-gray-200 my-6" />
        <div className="collapse-content space-y-4">
          <div>
            <span className="font-semibold">Feedback Status</span>
            <div className="mt-2 flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  defaultChecked
                  value="waiting"
                  className="radio radio-primary"
                />
                <span>Waiting for Review</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="in_progress"
                  className="radio radio-primary"
                />
                <span>In Progress</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="status"
                  value="complete"
                  className="radio radio-primary"
                />
                <span>Complete</span>
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-2">For Communications and IT use only.</p>
          </div>
          <div>
            <label htmlFor="statusComments" className="label font-medium">
              <span className="label-text text-black">Feedback Status Comments</span>
            </label>
            <div className="tooltip" data-tip="Add Feedback Status Solution">
              <textarea
                id="statusComments"
                name="statusComments"
                placeholder="Add Feedback Status Solution"
                className="textarea textarea-bordered w-full min-h-[120px] text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
                style={{ border: '1px solid gray' }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">
              After reviewing and addressing feedback, document the appropriate solution.
            </p>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: '#0b5fff', color: 'white' }}
          disabled={submitting}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

function CostEfficiencyForm() {
  const [submitting, setSubmitting] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      // Simple client-only acknowledgement
      alert('Thanks for your cost-efficiency idea!');
    }, 400);
  };
  return (
    <form onSubmit={submit} className="space-y-6 text-black text-sm">
      <h2 className="component-heading">SSAI Cost-Efficiency Feedback Form</h2>
      <p className="text-sm text-gray-500">* Indicates Required Fields</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ce_name" className="label font-medium">
            <span className="label-text text-black">First and Last Name</span>
            <span className="ml-1 text-gray-400">Optional</span>
          </label>
          <input
            id="ce_name"
            type="text"
            name="name"
            placeholder=""
            className="input input-bordered w-full text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
            style={{ border: '1px solid gray' }}
          />
        </div>
        <div>
          <label htmlFor="ce_email" className="label font-medium">
            <span className="label-text text-black">Email Address</span>
            <span className="ml-1 text-gray-400">Optional</span>
          </label>
          <input
            id="ce_email"
            type="email"
            name="email"
            placeholder=""
            className="input input-bordered w-full text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
            style={{ border: '1px solid gray' }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="ce_date" className="label font-medium">
            <span className="label-text text-black">Please select today's date.</span>
          </label>
          <input
            id="ce_date"
            type="date"
            name="date"
            className="input input-bordered w-full text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
            style={{ border: '1px solid gray' }}
          />
        </div>
        <div>
          <label htmlFor="ce_select" className="label font-medium">
            <span className="label-text text-black">Select from List</span>
          </label>
          <select
            id="ce_select"
            name="category"
            className="select select-bordered w-full text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
            style={{ border: '1px solid gray' }}
            defaultValue=""
          >
            <option value="" disabled>
              Choose an Option
            </option>
            <option>Operational Efficiency</option>
            <option>Resource Utilization</option>
            <option>Technology and Tools</option>
            <option>Process Improvement</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="ce_name" className="label font-medium">
          <span className="label-text text-black">Other (please specify)</span>
        </label>
        <input
          id="ce_name"
          type="text"
          name="other"
          placeholder=""
          className="input input-bordered w-full text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
          style={{ border: '1px solid gray' }}
        />
      </div>
      <div>
        <label htmlFor="ce_details" className="label font-medium">
          <span className="label-text text-black">
            Please select from the list above and share your ideas on how SSAI can improve
            cost-efficiency
          </span>
        </label>
        <textarea
          id="ce_details"
          name="details"
          placeholder="Share your ideas here..."
          className="textarea textarea-bordered w-full min-h-[140px] text-black text-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 p-1"
          style={{ border: '1px solid gray' }}
        />
      </div>
      <p className="text-sm text-gray-700">
        Thank you for helping improve SSAI's cost-efficiency. We review submissions regularly.
      </p>
      <div className="flex gap-3">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={submitting}
          style={{ backgroundColor: '#007bff', color: '#fff' }}
        >
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export default function HomeView() {
  const { data: session } = useSession();
  // Slides sourced from legacy home_main_content.html and local /img assets
  const successSlides = [
    { src: '/img/SBAicon (1).png', alt: '' },
    {
      src: '/img/2ec8a7ca-cbb5-5ff9-6748-3bc2ec3becd4_3f766572.png',
      alt: '',
    },
    {
      src: '/img/5a3ca43f-82fd-0a76-1507-5eb4b3d4c98a_3f766572.png',
      alt: '',
    },
    { src: '/img/TWPicon.png', alt: '' },
    { src: '/img/Screenshot 2024-10-22 at 11.55.32 AM.png', alt: '' },
  ];

  const recentSlides = [
    {
      src: '/img/5b03165f-b8e5-7e1d-1836-742b0f97232a_3f766572.jpeg',
      alt: 'AUSA Event Post #2',
      linkUrl: 'https://my.ssai.app/ausa2',
      linkText: 'AUSA Event Post #2 - featuring Ray Baldon',
    },
  ];

  // Company Spotlight slides (screenshots + selected images from /img)
  const spotlightSlides = [
    { src: '/img/Screenshot 2025-03-09 at 3.08.22 PM.png', alt: 'AMS 2025: Part 2 Highlights' },
    { src: '/img/Screenshot 2025-03-09 at 3.10.24 PM.png', alt: 'AMS 2025: Part 1 Highlights' },
    {
      src: '/img/Screenshot 2025-03-09 at 3.11.47 PM.png',
      alt: 'Data Analytics in Health IT Webinar',
    },
    { src: '/img/Screenshot 2025-03-09 at 3.21.10 PM.png', alt: 'C2024 Semi Annual Employee Mtg.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        id="msdd"
        className="container lfr-layout-structure-item-f6b4bf1f-ee8c-a188-2240-3294afc15429 lfr-layout-structure-item-container h-64 md:h-96 lg:h-[420px] bg-cover bg-center bg-no-repeat"
        style={{
          ['--background-image-file-entry-id']: 81320,
          ['--lfr-background-image-f6b4bf1f-ee8c-a188-2240-3294afc15429']:
            "url('/img/website-banner-v6.png')",
          backgroundImage: "url('/img/website-banner-v6.png')",

          maxHeight: '250px',
        }}
      >
        <style>{`
          @media (max-width: 300px) {
            #msdd {
              background-image: url('/img/website-banner-v6.png') !important;
            }
          }
          @media (max-width: 1000px) and (min-width: 300px) {
            #msdd {
              background-image: url('/img/website-banner-v6.png') !important;
            }
          }
        `}</style>
      </div>
      {/* Welcome Header Section */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="welcome-header">
            <div className="max-w-4xl mx-auto space-y-4">
              <h1>Welcome {session?.user?.name || 'User'}!!</h1>
              <p style={{ lineHeight: '1.6', fontSize: '0.9rem' }} className="mt-10">
                <span className="text-blue-600 font-semibold">mySSAI</span> is our company-wide
                internal-access platform for employees. You can use mySSAI to access resources,
                learn more about who we are as a company, and stay up-to-date with the latest
                company news.
              </p>
              <p
                className="mt-4"
                style={{
                  lineHeight: '1.6',
                  fontSize: '0.9rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '2px solid #e5e7eb',
                }}
              >
                SSAI promotes an open-door policy and values transparency with all employees. We
                recognize that employees may encounter issues and want to speak with a trusted
                person. Employees are encouraged to reach out directly to{' '}
                <strong>Human Resources</strong> or to contact{' '}
                <strong>SSAI's Ombudsman, Brij Gambhir</strong>, for support at{' '}
                <strong>brij.gambhir@ssaihq.com</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Upcoming Events Feed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="component-heading" style={{ marginBottom: '16px' }}>
                Upcoming Events Feed
              </h2>

              {/* Event Cards */}
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow list-group-item">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="event-date">2025-10-31</span>
                    </div>
                    <div className="flex-1 profile-content-column">
                      <h2>Bloom Meditation Session</h2>
                      <div className="journal-content-article space-y-2">
                        <p>
                          There is a{' '}
                          <strong>
                            Bloom Meditation Session occurring on Friday, October 31, 2025, from
                            11:30 AM - 12 PM ET
                          </strong>
                          .
                        </p>
                        <p>
                          <a
                            href="https://aka.ms/JoinTeamsMeeting?omkt=en-US"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Need help?
                          </a>
                          <a
                            href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_YjAyOWFhYjQtZTQ2MS00OTVlLTk3MWItOGIxZDI1NGVlN2M0%40thread.v2/0?context=%7b%22Tid%22%3a%227005d458-45be-48ae-8140-d43da96dd17b%22%2c%22Oid%22%3a%2294fe4230-7dd4-4d0c-b664-2501220e336a%22%7d"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Join the meeting now
                          </a>
                        </p>
                        <p>Meeting ID: 286 792 001 747</p>
                        <p>Passcode: r8ay7rT2</p>
                        <p>
                          For questions, please contact <strong>Mark Solomon</strong> (
                          <a
                            href="mailto:mark.solomon@ssaihq.com"
                            className="text-blue-600 hover:underline"
                          >
                            mark.solomon@ssaihq.com
                          </a>
                          ).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow list-group-item">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-24 h-24 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src="/img/Screenshot 2024-10-08 at 7.56.47 PM.png"
                        alt="Timesheets Due"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 profile-content-column">
                      <h2>Timesheets Due</h2>
                      <div className="journal-content-article space-y-2">
                        <p>
                          Your next{' '}
                          <strong>
                            Timesheets are due on Friday, October 31, 2025, at 12 PM ET
                          </strong>
                          . Approvals are due by <strong>4 PM ET</strong>.
                        </p>
                        <p>
                          SSAI’s new Time and Expense system can be accessed{' '}
                          <a
                            href="https://ocicpte-cpweb.bussvc.ssaihq.com/CPWeb/cploginform.htm?1713220391"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            here
                          </a>
                          .
                        </p>
                        <p>
                          For instructions, visit the Box link{' '}
                          <a
                            href="https://ssaihq.app.box.com/file/1444400711260"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            here
                          </a>
                          .
                        </p>
                        <p>
                          To see the 2025 schedule for due dates, check this{' '}
                          <a
                            href="https://ssaihq.box.com/s/meapyzhu92dq5iskill4uy8d76yhz1ey"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            link
                          </a>
                          .
                        </p>
                        <p>
                          For issues, email{' '}
                          <a
                            href="mailto:IT_help@ssaihq.com"
                            className="text-blue-600 hover:underline"
                          >
                            IT_help@ssaihq.com
                          </a>
                          or{' '}
                          <a
                            href="mailto:Payroll_help@ssaihq.com"
                            className="text-blue-600 hover:underline"
                          >
                            Payroll_help@ssaihq.com
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow list-group-item">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-24 h-24 rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src="/img/Computer image.webp"
                        alt="IT Updates"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 profile-content-column">
                      <h2>IT Updates</h2>
                      <div className="journal-content-article space-y-2">
                        <p>
                          October is <strong>Cybersecurity Awareness Month</strong>, and this week’s
                          focus is on <strong>safe web browsing</strong>.
                        </p>
                        <ul className="list-disc list-inside">
                          <li>Always type website addresses yourself—avoid unknown links.</li>
                          <li>Avoid clicking on pop-up ads or “free” downloads.</li>
                          <li>Be cautious on public Wi-Fi—don’t sign into sensitive accounts.</li>
                          <li>Keep your browser and plugins up to date.</li>
                        </ul>
                        <p>
                          Need help? Visit the{' '}
                          <a
                            href="https://ssaihq.app.box.com/file/1920510637523"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            login guidance
                          </a>
                          , email{' '}
                          <a
                            href="mailto:it_help@ssaihq.com"
                            className="text-blue-600 hover:underline"
                          >
                            {' '}
                            it_help@ssaihq.com
                          </a>
                          , or visit{' '}
                          <a
                            href="https://my.ssai.app/home?page_number_5bbfeebd-44de-657f-2f2a-e6271182d73d=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            mySSAI
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow list-group-item">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="event-date">2025-10-01</span>
                    </div>
                    <div className="flex-1 profile-content-column">
                      <h2>Performance Engagement Program (PEP) Review</h2>
                      <div className="journal-content-article space-y-2">
                        <p>
                          On <strong>Wednesday, October 1, 2025</strong>, SSAI will send out this
                          year’s <strong>Performance Review</strong> through{' '}
                          <a
                            href="https://workforcenow.adp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            ADP Workforce Now
                          </a>
                          .
                        </p>
                        <p>
                          <strong>Key deadlines:</strong> Employees update goals by Sept 30,
                          complete self-evaluations by Oct 15, supervisors finalize by Nov 1, and
                          acknowledgments due by Nov 15.
                        </p>
                        <p>
                          <strong>PEP System Guides</strong> are available{' '}
                          <a
                            href="https://d5btfj04.na1.hubspotlinks.com/Ctc/ZX+113/d5btfj04/VWghb78CBTjfW7GBzJl3MQDMgW8cYYgJ5mcTKfN179mqq3m2ndW7lCdLW6lZ3kMW3wl5zs3dd0cgV5_z6g4g_kcrV5vJ935CKNY8W4krJTv6SVJ9gW6WWM9r3rjmsMW7F21Fq73SC9QW4NWRMs1k1zPPW1rDRsC4BqTDpW362T8v6_pQVbW7B_9HP5CX9j0W5mnXfR1NkflBW54BpNH78Dny2W2czbtK4jC71gW2YJfBS265sGCW2rqjb44qLpM6W4THcNH1qJpdcW1yC_4m5fkb0cW8YgFTF53M4xHW9d2tCd2R-ZdFM3mvlZjwC7cW2t28xl8TP_C8W203nlp33NX5mVfPNtF5DvlmdW15HY2-59KRZ-f44nb2d04"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            here
                          </a>
                          .
                        </p>
                        <p>
                          Questions? Contact <strong>Josie Pearson</strong> (
                          <a
                            href="mailto:josie.pearson@ssaihq.com"
                            className="text-blue-600 hover:underline"
                          >
                            josie.pearson@ssaihq.com
                          </a>
                          ).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow list-group-item">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="event-date">2025-07-16</span>
                    </div>
                    <div className="flex-1 profile-content-column">
                      <h2>Action you can take regarding NASA science!</h2>
                      <div className="journal-content-article space-y-2">
                        <p>
                          You can contact your elected officials as an individual regarding how much
                          NASA science matters. Even if you don’t live in key districts or states,
                          your calls and emails still count and can make a difference. You can also
                          request a 15-minute Zoom meeting with a legislative staffer to share your
                          views, and encourage family and friends to reach out.
                        </p>
                        <p>
                          <a
                            href="https://ssaihq.box.com/s/7t9pn2wu3zcphwpu2gdqirsrfikw79x6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Click here{' '}
                          </a>
                          for detailed suggestions from the <strong>Planetary Society</strong> for
                          interested individuals, along with potential contacts.
                        </p>
                        <p>
                          If you have questions, contact <strong>Dawn Alexander</strong>(
                          <a
                            href="mailto:dawn.alexander@ssaihq.com"
                            className="text-blue-600 hover:underline"
                          >
                            dawn.alexander@ssaihq.com
                          </a>
                          ).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Tabs - Feedback Forms */}
              <div className="mt-8 max-w-3xl">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <Tabs
                    tabs={[
                      { title: 'SSAI Feedback Form', content: <FeedbackForm /> },
                      { title: 'Cost-Efficiency Feedback Form', content: <CostEfficiencyForm /> },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Resources and Quick Links */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="component-heading" style={{ marginBottom: '16px' }}>
                Company Spotlight
              </h2>
              <Image unoptimized Carousel slides={spotlightSlides} interval={5000} />
            </div>
            {/* Social CTA */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
              <h2 className="component-heading text-center">
                Like, comment and share SSAI's latest posts
              </h2>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-5 md:gap-5">
                <a
                  href="https://www.linkedin.com/company/ssai/posts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/linkedin-1.png"
                    alt="LinkedIn"
                    className="h-9 md:h-9 w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://www.instagram.com/ssaihq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/Instagram-1.png"
                    alt="Instagram"
                    className="h-9 md:h-6 w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://www.facebook.com/SciSysApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/facebook-1.png"
                    alt="Facebook"
                    className="h-9 md:h-6 w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <a href="https://twitter.com/ssaihq" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/img/x-1.png"
                    alt="X"
                    className="h-9 md:h-6 w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@ScienceSystemsandApplicationsI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/YouTube-1.png"
                    alt="YouTube"
                    className="h-9 md:h-6 w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://bsky.app/profile/did:plc:v2y6tqzu75ibekt4bz37fcwg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/img/Bluesky_Logo.png"
                    alt="Bluesky"
                    className="h-9 md:h-6 w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>

            {/* Resources Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="section-heading">Resources</h2>
              <div className="space-y-3">
                <a
                  href="https://ocicpte-cpweb.bussvc.ssaihq.com/CPWeb/masterPage.htm#A0"
                  className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors resource-link"
                >
                  <h3>Time and Expense</h3>
                  <p>
                    All employees need to enter their time daily and submit their time cards by the
                    15th and last day of the month, unless informed otherwise.
                  </p>
                </a>
                <a
                  href="https://online.adp.com/signin/v1/?APPID=WFNPortal&productId=80e309c3-7085-bae1-e053-3505430b5495&returnURL=https://workforcenow.adp.com/&callingAppId=WFN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors resource-link"
                >
                  <h3>ADP Workforce Now Portal</h3>
                  <p>Your one stop shop to see your benefits, paychecks and employment status.</p>
                </a>
                <a
                  href="mailto:procurement@ssaihq.com"
                  className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors resource-link"
                >
                  <h3>Procurement Communications</h3>
                  <p>
                    All vendor communications related to new vendor set up should be emailed to our
                    central procurement email address: procurement@ssaihq.com
                  </p>
                </a>
                <a
                  href="mailto:it_help@ssaihq.com"
                  className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors resource-link"
                >
                  <h3>IT HelpDesk</h3>
                  <p>Contact: it_help@ssaihq.com</p>
                </a>
                <a
                  href="mailto:connect@ssaihq.com"
                  className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors resource-link"
                >
                  <h3>Communications HelpDesk</h3>
                  <p>Contact: connect@ssaihq.com</p>
                </a>
                <a
                  href="mailto:payroll_help@ssaihq.com"
                  className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors resource-link"
                >
                  <h3>Payroll HelpDesk</h3>
                  <p>Contact: payroll_help@ssaihq.com</p>
                </a>
                <a
                  href="mailto:hr@ssaihq.com"
                  className="block p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors resource-link"
                >
                  <h3>HR HelpDesk</h3>
                  <p>Contact: hr@ssaihq.com</p>
                </a>
              </div>
            </div>
            {/* Company Spotlight Slider */}

            {/* Celebrating Our Successes Slider */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
              <h2 className="component-heading">Celebrating Our Successes</h2>
              <Image unoptimized Carousel slides={successSlides} interval={5000} />
            </div>
            {/* Recent Events/Happenings */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="section-heading">Recent Events/Happenings</h2>
              <Image unoptimized Carousel slides={recentSlides} interval={5000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
