'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


export default function MyWorkspaceView() {
  const events = [
    { title: 'Team Sync', start: '2025-10-16T09:00:00' },
    { title: 'Project Review', start: '2025-10-20T13:00:00' },
    { title: 'Company Holiday', start: '2025-10-25', allDay: true },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative w-full bg-gradient-to-r from-gray-100 to-gray-200">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <h1 className="text-3xl font-semibold text-gray-900">My Workspace</h1>
        </div>
      </section>

      {/* Content Grid */}
      <section className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Calendar + Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Sidebar */}
                <aside className="md:w-64 border-r border-gray-200 p-4 space-y-6">
                  <div>
                    <h2 className="text-sm font-semibold text-gray-700 mb-2">My Calendars</h2>
                    <div className="space-y-2 text-sm text-gray-700">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked /> Gopal Thakur
                      </label>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-gray-700 mb-2">MySSAI's Calendars</h2>
                    <div className="space-y-2 text-sm text-gray-700">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked /> SSAI External Event
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked /> SSAI Internal Event
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked /> Company Holiday
                      </label>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-gray-700 mb-2">Other Calendars</h2>
                    <button className="btn btn-light btn-sm">Add other calendar</button>
                  </div>
                </aside>

                {/* Calendar */}
                <div className="flex-1 p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <button className="btn btn-primary">Add Event</button>
                    <div className="ml-auto text-sm text-gray-600">October 2025</div>
                  </div>
                  <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                    height="auto"
                    selectable={true}
                    events={events}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Useful Links */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Useful Links</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-md p-4">
                  <h3 className="font-medium text-gray-900">Time and Expense</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Submit time cards daily by the 15th and last day of the month.
                  </p>
                  <a
                    href="https://workforcenow.adp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Open ADP Workforce Now
                  </a>
                </div>
                <div className="border border-gray-200 rounded-md p-4">
                  <h3 className="font-medium text-gray-900">ADP Workforce Now Portal</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Access benefits, paychecks, and employment status.
                  </p>
                  <a
                    href="https://workforcenow.adp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Open ADP Workforce Now
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">Showing 1 to 2 of 2 entries.</div>
                <div className="flex items-center gap-2">
                  <button className="btn btn-light btn-sm">Prev</button>
                  <button className="btn btn-light btn-sm">1</button>
                  <button className="btn btn-light btn-sm">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
