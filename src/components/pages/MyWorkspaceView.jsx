


// 'use client';
// import { useState, useEffect } from 'react';
// import FullCalendar from '@fullcalendar/react';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction';
// import { useSession } from 'next-auth/react';
// import axios from 'axios';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';



// export default function MyWorkspaceView() {
//   const { data: session } = useSession();
//   const [events, setEvents] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [responseMessage, setResponseMessage] = useState({ type: '', message: '' });



//   // Validation Schema with Yup
//   const eventValidationSchema = Yup.object().shape({
//     title: Yup.string()
//       .required('Title is required')
//       .min(3, 'Title must be at least 3 characters'),
//     startDate: Yup.date()
//       .required('Start date is required')
//       .typeError('Invalid date'),
//     startTime: Yup.string()
//       .when('allDay', {
//         is: false,
//         then: (schema) => schema.required('Start time is required'),
//         otherwise: (schema) => schema.notRequired(),
//       }),
//     endDate: Yup.date()
//       .required('End date is required')
//       .min(Yup.ref('startDate'), 'End date must be after start date')
//       .typeError('Invalid date'),
//     endTime: Yup.string()
//       .when('allDay', {
//         is: false,
//         then: (schema) => schema.required('End time is required'),
//         otherwise: (schema) => schema.notRequired(),
//       }),
//     description: Yup.string(),
//     allDay: Yup.boolean(),
//     repeat: Yup.boolean(),
//   });


//   // Fetch events from API on component mount
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         // Replace with your actual API endpoint
//         const response = await axios.get('http://localhost:3000/api/events');
//         // Ensure the response is an array
//         const eventsData = Array.isArray(response.data) ? response.data : [];
//         setEvents(eventsData);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         setEvents([]);
//       }
//     };

//     fetchEvents();
//   }, []);


//   // Prevent body scroll when modal is open
//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = 'hidden';
//       document.body.style.paddingRight = '0px';
//     } else {
//       document.body.style.overflow = 'unset';
//       document.body.style.paddingRight = '0px';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//       document.body.style.paddingRight = '0px';
//     };
//   }, [isModalOpen]);



//   const handleAddEventClick = () => {
//     const today = new Date().toISOString().split('T')[0];
//     setResponseMessage({ type: '', message: '' });
//     setIsModalOpen(true);
//   };



//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setResponseMessage({ type: '', message: '' });
//   };



//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     try {
//       setResponseMessage({ type: '', message: '' });
      
//       const eventPayload = {
//         title: values.title,
//         description: values.description,
//         start: values.allDay 
//           ? values.startDate 
//           : `${values.startDate}T${values.startTime}:00`,
//         end: values.allDay 
//           ? values.endDate 
//           : `${values.endDate}T${values.endTime}:00`,
//         allDay: values.allDay,
//         repeat: values.repeat,
//       };



//       // Replace with your actual API endpoint
//       const response = await axios.post('http://localhost:3000/api/events', eventPayload);



//       // Create a proper event object for FullCalendar
//       const newEvent = {
//         id: response.data.id || Date.now().toString(),
//         title: eventPayload.title,
//         start: eventPayload.start,
//         end: eventPayload.end,
//         allDay: eventPayload.allDay || false,
//         extendedProps: {
//           description: eventPayload.description,
//           repeat: eventPayload.repeat
//         }
//       };

//       // Add the new event to the calendar
//       setEvents(prevEvents => [...prevEvents, newEvent]);



//       setResponseMessage({ 
//         type: 'success', 
//         message: 'Event created successfully!' 
//       });

//       // Reset form
//       resetForm();

//       // Close modal after 2 seconds
//       setTimeout(() => {
//         handleCloseModal();
//       }, 2000);
//     } catch (error) {
//       console.error('Error creating event:', error);
//       setResponseMessage({ 
//         type: 'error', 
//         message: error.response?.data?.message || 'Failed to create event. Please try again.' 
//       });
//     } finally {
//       setSubmitting(false);
//     }
//   };



//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Hero */}
//       <section className="relative w-full bg-gradient-to-r from-gray-100 to-gray-200">
//         <div className="container mx-auto max-w-7xl px-4 py-8">
//           <h1 className="text-3xl font-semibold text-gray-900">My Workspace</h1>
//         </div>
//       </section>



//       {/* Content Grid */}
//       <section className="container mx-auto max-w-7xl px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left: Calendar + Sidebar */}
//           <div className="lg:col-span-2">
//             <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
//               <div className="flex flex-col md:flex-row">
//                 {/* Sidebar */}
//                 <aside className="md:w-64 border-r border-gray-200 p-4 space-y-6">
//                   <div>
//                     <h2 className="text-sm font-semibold text-gray-700 mb-2">My Calendars</h2>
//                     <div className="space-y-2 text-sm text-gray-700">
//                       <label className="flex items-center gap-2">
//                         <input type="checkbox" defaultChecked /> {session?.user?.name || 'My Calendar'}
//                       </label>
//                     </div>
//                   </div>
//                   <div>
//                     <h2 className="text-sm font-semibold text-gray-700 mb-2">MySSAI's Calendars</h2>
//                     <div className="space-y-2 text-sm text-gray-700">
//                       <label className="flex items-center gap-2">
//                         <input type="checkbox" defaultChecked /> SSAI External Event
//                       </label>
//                       <label className="flex items-center gap-2">
//                         <input type="checkbox" defaultChecked /> SSAI Internal Event
//                       </label>
//                       <label className="flex items-center gap-2">
//                         <input type="checkbox" defaultChecked /> Company Holiday
//                       </label>
//                     </div>
//                   </div>
//                   <div>
//                     <h2 className="text-sm font-semibold text-gray-700 mb-2">Other Calendars</h2>
//                     <button className="btn btn-light btn-sm">Add other calendar</button>
//                   </div>
//                 </aside>



//                 {/* Calendar */}
//                 <div className="flex-1 p-4">
//                   <div className="flex items-center gap-3 mb-4">
//                     <button 
//                       className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-colors"
//                       onClick={handleAddEventClick}
//                     >
//                       Add Event
//                     </button>
//                     <div className="ml-auto text-sm text-gray-600">October 2025</div>
//                   </div>
//                   {events && events.length >= 0 && (
//                     <FullCalendar
//                       plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//                       initialView="dayGridMonth"
//                       headerToolbar={{
//                         left: 'prev,next today',
//                         center: 'title',
//                         right: 'dayGridMonth,timeGridWeek,timeGridDay',
//                       }}
//                       height="auto"
//                       selectable={true}
//                       events={events}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>



//           {/* Right: Useful Links */}
//           <div className="space-y-6">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//               <h2 className="text-lg font-semibold text-gray-900 mb-4">Useful Links</h2>
//               <div className="space-y-4">
//                 <div className="border border-gray-200 rounded-md p-4">
//                   <h3 className="font-medium text-gray-900">Time and Expense</h3>
//                   <p className="mt-1 text-sm text-gray-600">
//                     Submit time cards daily by the 15th and last day of the month.
//                   </p>
//                   <a
//                     href="https://workforcenow.adp.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline text-sm"
//                   >
//                     Open ADP Workforce Now
//                   </a>
//                 </div>
//                 <div className="border border-gray-200 rounded-md p-4">
//                   <h3 className="font-medium text-gray-900">ADP Workforce Now Portal</h3>
//                   <p className="mt-1 text-sm text-gray-600">
//                     Access benefits, paychecks, and employment status.
//                   </p>
//                   <a
//                     href="https://workforcenow.adp.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline text-sm"
//                   >
//                     Open ADP Workforce Now
//                   </a>
//                 </div>
//               </div>
//             </div>



//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//               <div className="flex items-center justify-between">
//                 <div className="text-sm text-gray-600">Showing 1 to 2 of 2 entries.</div>
//                 <div className="flex items-center gap-2">
//                   <button className="btn btn-light btn-sm">Prev</button>
//                   <button className="btn btn-light btn-sm">1</button>
//                   <button className="btn btn-light btn-sm">Next</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>



//       {/* Event Modal */}
//       {isModalOpen && (
//         <>
//           <style jsx global>{`
//             input::placeholder,
//             textarea::placeholder {
//               color: #9ca3af !important;
//               opacity: 1;
//             }
//             input::-webkit-input-placeholder,
//             textarea::-webkit-input-placeholder {
//               color: #9ca3af !important;
//             }
//             input::-moz-placeholder,
//             textarea::-moz-placeholder {
//               color: #9ca3af !important;
//               opacity: 1;
//             }
//             input:-ms-input-placeholder,
//             textarea:-ms-input-placeholder {
//               color: #9ca3af !important;
//             }
            
//             input[type="text"],
//             input[type="date"],
//             input[type="time"],
//             textarea {
//               color: #000000 !important;
//             }
            
//             /* Modal scroll styling */
//             .modal-body::-webkit-scrollbar {
//               width: 8px;
//             }
//             .modal-body::-webkit-scrollbar-track {
//               background: #f1f1f1;
//               border-radius: 4px;
//             }
//             .modal-body::-webkit-scrollbar-thumb {
//               background: #888;
//               border-radius: 4px;
//             }
//             .modal-body::-webkit-scrollbar-thumb:hover {
//               background: #555;
//             }
//           `}</style>
//           <div 
//             className="fixed inset-0 z-50 flex items-center justify-center p-4" 
//             style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
//             onClick={handleCloseModal}
//           >
//             <Formik
//               initialValues={{
//                 title: '',
//                 description: '',
//                 startDate: new Date().toISOString().split('T')[0],
//                 startTime: '10:00',
//                 endDate: new Date().toISOString().split('T')[0],
//                 endTime: '11:00',
//                 allDay: false,
//                 repeat: false,
//               }}
//               validationSchema={eventValidationSchema}
//               onSubmit={handleSubmit}
//             >
//               {({ values, errors, touched, isSubmitting, setFieldValue }) => (
//                 <Form 
//                   className="bg-white rounded-lg shadow-2xl w-full flex flex-col" 
//                   style={{ maxWidth: '1400px', maxHeight: '90vh' }}
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   {/* Modal Header */}
//                   <div className="flex items-center justify-between px-12 py-6 border-b border-gray-200 flex-shrink-0">
//                     <h2 className="text-2xl font-semibold text-gray-900">New Event</h2>
//                     <button
//                       type="button"
//                       onClick={handleCloseModal}
//                       className="text-gray-400 hover:text-gray-600 text-3xl font-light leading-none"
//                     >
//                       ×
//                     </button>
//                   </div>



//                   {/* Modal Body - Scrollable */}
//                   <div className="px-12 py-8 space-y-6 overflow-y-auto flex-grow modal-body">
//                     {/* Response Message */}
//                     {responseMessage.message && (
//                       <div className={`p-4 rounded-md ${
//                         responseMessage.type === 'success' 
//                           ? 'bg-green-50 border border-green-200 text-green-800' 
//                           : 'bg-red-50 border border-red-200 text-red-800'
//                       }`}>
//                         <div className="flex items-center gap-2">
//                           {responseMessage.type === 'success' ? (
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                             </svg>
//                           ) : (
//                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                               <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                             </svg>
//                           )}
//                           <span className="font-medium">{responseMessage.message}</span>
//                         </div>
//                       </div>
//                     )}



//                     {/* Title */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Title
//                       </label>
//                       <Field
//                         type="text"
//                         name="title"
//                         className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 ${
//                           errors.title && touched.title ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                         placeholder="Enter event title"
//                       />
//                       <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
//                     </div>



//                     {/* Starts */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Starts <span className="text-red-500">*</span>
//                       </label>
//                       <div className="flex gap-3">
//                         <div className="flex-1">
//                           <Field
//                             type="date"
//                             name="startDate"
//                             className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
//                               errors.startDate && touched.startDate ? 'border-red-500' : 'border-gray-300'
//                             }`}
//                           />
//                           <ErrorMessage name="startDate" component="div" className="text-red-500 text-sm mt-1" />
//                         </div>
//                         <div className="flex-1">
//                           <Field
//                             type="time"
//                             name="startTime"
//                             disabled={values.allDay}
//                             className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
//                               errors.startTime && touched.startTime ? 'border-red-500' : 'border-gray-300'
//                             } ${values.allDay ? 'disabled:bg-gray-100 disabled:cursor-not-allowed' : ''}`}
//                           />
//                           <ErrorMessage name="startTime" component="div" className="text-red-500 text-sm mt-1" />
//                         </div>
//                       </div>
//                     </div>



//                     {/* Ends */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Ends <span className="text-red-500">*</span>
//                       </label>
//                       <div className="flex gap-3">
//                         <div className="flex-1">
//                           <Field
//                             type="date"
//                             name="endDate"
//                             className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
//                               errors.endDate && touched.endDate ? 'border-red-500' : 'border-gray-300'
//                             }`}
//                           />
//                           <ErrorMessage name="endDate" component="div" className="text-red-500 text-sm mt-1" />
//                         </div>
//                         <div className="flex-1">
//                           <Field
//                             type="time"
//                             name="endTime"
//                             disabled={values.allDay}
//                             className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
//                               errors.endTime && touched.endTime ? 'border-red-500' : 'border-gray-300'
//                             } ${values.allDay ? 'disabled:bg-gray-100 disabled:cursor-not-allowed' : ''}`}
//                           />
//                           <ErrorMessage name="endTime" component="div" className="text-red-500 text-sm mt-1" />
//                         </div>
//                       </div>
//                     </div>



//                     {/* All Day Checkbox */}
//                     <div>
//                       <label className="flex items-center gap-2 cursor-pointer">
//                         <Field
//                           type="checkbox"
//                           name="allDay"
//                           className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                         />
//                         <span className="text-sm font-medium text-gray-700">All Day</span>
//                       </label>
//                     </div>



//                     {/* Repeat Checkbox */}
//                     <div>
//                       <label className="flex items-center gap-2 cursor-pointer">
//                         <Field
//                           type="checkbox"
//                           name="repeat"
//                           className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                         />
//                         <span className="text-sm font-medium text-gray-700">Repeat</span>
//                       </label>
//                     </div>



//                     {/* Description */}
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Description
//                       </label>
//                       <Field
//                         as="textarea"
//                         name="description"
//                         rows="6"
//                         className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-gray-50 ${
//                           errors.description && touched.description ? 'border-red-500' : 'border-gray-300'
//                         }`}
//                         placeholder="Enter event description..."
//                       />
//                       <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
//                     </div>
//                   </div>



//                   {/* Modal Footer */}
//                   <div className="flex items-center gap-3 px-12 py-6 border-t border-gray-200 flex-shrink-0">
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       {isSubmitting ? 'Publishing...' : 'Publish'}
//                     </button>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </>
//       )}
//     </main>
//   );
// }





'use client';
import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



export default function MyWorkspaceView() {
  const { data: session } = useSession();
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ type: '', message: '' });

  // JSON Server base URL
  const JSON_SERVER_URL = 'http://localhost:3001/events';



  // Validation Schema with Yup
  const eventValidationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required')
      .min(3, 'Title must be at least 3 characters'),
    startDate: Yup.date()
      .required('Start date is required')
      .typeError('Invalid date'),
    startTime: Yup.string()
      .when('allDay', {
        is: false,
        then: (schema) => schema.required('Start time is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
    endDate: Yup.date()
      .required('End date is required')
      .min(Yup.ref('startDate'), 'End date must be after start date')
      .typeError('Invalid date'),
    endTime: Yup.string()
      .when('allDay', {
        is: false,
        then: (schema) => schema.required('End time is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
    description: Yup.string(),
    allDay: Yup.boolean(),
    repeat: Yup.boolean(),
  });


  // Fetch events from JSON Server on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(JSON_SERVER_URL);
        // Ensure the response is an array
        const eventsData = Array.isArray(response.data) ? response.data : [];
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]);
      }
    };

    fetchEvents();
  }, []);


  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isModalOpen]);



  const handleAddEventClick = () => {
    const today = new Date().toISOString().split('T')[0];
    setResponseMessage({ type: '', message: '' });
    setIsModalOpen(true);
  };



  const handleCloseModal = () => {
    setIsModalOpen(false);
    setResponseMessage({ type: '', message: '' });
  };



  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setResponseMessage({ type: '', message: '' });
      
      const eventPayload = {
        title: values.title,
        description: values.description,
        start: values.allDay 
          ? values.startDate 
          : `${values.startDate}T${values.startTime}:00`,
        end: values.allDay 
          ? values.endDate 
          : `${values.endDate}T${values.endTime}:00`,
        allDay: values.allDay,
        repeat: values.repeat,
      };



      // POST to JSON Server
      const response = await axios.post(JSON_SERVER_URL, eventPayload);



      // Create a proper event object for FullCalendar
      const newEvent = {
        id: response.data.id || Date.now().toString(),
        title: response.data.title,
        start: response.data.start,
        end: response.data.end,
        allDay: response.data.allDay || false,
        extendedProps: {
          description: response.data.description,
          repeat: response.data.repeat
        }
      };

      // Add the new event to the calendar
      setEvents(prevEvents => [...prevEvents, newEvent]);



      setResponseMessage({ 
        type: 'success', 
        message: 'Event created successfully!' 
      });

      // Reset form
      resetForm();

      // Close modal after 2 seconds
      setTimeout(() => {
        handleCloseModal();
      }, 2000);
    } catch (error) {
      console.error('Error creating event:', error);
      setResponseMessage({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to create event. Please try again.' 
      });
    } finally {
      setSubmitting(false);
    }
  };



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
                        <input type="checkbox" defaultChecked /> {session?.user?.name || 'My Calendar'}
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
                    <button 
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-colors"
                      onClick={handleAddEventClick}
                    >
                      Add Event
                    </button>
                    <div className="ml-auto text-sm text-gray-600">October 2025</div>
                  </div>
                  {events && events.length >= 0 && (
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
                  )}
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



      {/* Event Modal */}
      {isModalOpen && (
        <>
          <style jsx global>{`
            input::placeholder,
            textarea::placeholder {
              color: #9ca3af !important;
              opacity: 1;
            }
            input::-webkit-input-placeholder,
            textarea::-webkit-input-placeholder {
              color: #9ca3af !important;
            }
            input::-moz-placeholder,
            textarea::-moz-placeholder {
              color: #9ca3af !important;
              opacity: 1;
            }
            input:-ms-input-placeholder,
            textarea:-ms-input-placeholder {
              color: #9ca3af !important;
            }
            
            input[type="text"],
            input[type="date"],
            input[type="time"],
            textarea {
              color: #000000 !important;
            }
            
            /* Modal scroll styling */
            .modal-body::-webkit-scrollbar {
              width: 8px;
            }
            .modal-body::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 4px;
            }
            .modal-body::-webkit-scrollbar-thumb {
              background: #888;
              border-radius: 4px;
            }
            .modal-body::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
          `}</style>
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4" 
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
            onClick={handleCloseModal}
          >
            <Formik
              initialValues={{
                title: '',
                description: '',
                startDate: new Date().toISOString().split('T')[0],
                startTime: '10:00',
                endDate: new Date().toISOString().split('T')[0],
                endTime: '11:00',
                allDay: false,
                repeat: false,
              }}
              validationSchema={eventValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting, setFieldValue }) => (
                <Form 
                  className="bg-white rounded-lg shadow-2xl w-full flex flex-col" 
                  style={{ maxWidth: '1400px', maxHeight: '90vh' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between px-12 py-6 border-b border-gray-200 flex-shrink-0">
                    <h2 className="text-2xl font-semibold text-gray-900">New Event</h2>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="text-gray-400 hover:text-gray-600 text-3xl font-light leading-none"
                    >
                      ×
                    </button>
                  </div>



                  {/* Modal Body - Scrollable */}
                  <div className="px-12 py-8 space-y-6 overflow-y-auto flex-grow modal-body">
                    {/* Response Message */}
                    {responseMessage.message && (
                      <div className={`p-4 rounded-md ${
                        responseMessage.type === 'success' 
                          ? 'bg-green-50 border border-green-200 text-green-800' 
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}>
                        <div className="flex items-center gap-2">
                          {responseMessage.type === 'success' ? (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          )}
                          <span className="font-medium">{responseMessage.message}</span>
                        </div>
                      </div>
                    )}



                    {/* Title */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                      </label>
                      <Field
                        type="text"
                        name="title"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 ${
                          errors.title && touched.title ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter event title"
                      />
                      <ErrorMessage name="title" component="div" className="text-red-500 text-sm mt-1" />
                    </div>



                    {/* Starts */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Starts <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-3">
                        <div className="flex-1">
                          <Field
                            type="date"
                            name="startDate"
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
                              errors.startDate && touched.startDate ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          <ErrorMessage name="startDate" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="flex-1">
                          <Field
                            type="time"
                            name="startTime"
                            disabled={values.allDay}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
                              errors.startTime && touched.startTime ? 'border-red-500' : 'border-gray-300'
                            } ${values.allDay ? 'disabled:bg-gray-100 disabled:cursor-not-allowed' : ''}`}
                          />
                          <ErrorMessage name="startTime" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                    </div>



                    {/* Ends */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ends <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-3">
                        <div className="flex-1">
                          <Field
                            type="date"
                            name="endDate"
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
                              errors.endDate && touched.endDate ? 'border-red-500' : 'border-gray-300'
                            }`}
                          />
                          <ErrorMessage name="endDate" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="flex-1">
                          <Field
                            type="time"
                            name="endTime"
                            disabled={values.allDay}
                            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
                              errors.endTime && touched.endTime ? 'border-red-500' : 'border-gray-300'
                            } ${values.allDay ? 'disabled:bg-gray-100 disabled:cursor-not-allowed' : ''}`}
                          />
                          <ErrorMessage name="endTime" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                    </div>



                    {/* All Day Checkbox */}
                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <Field
                          type="checkbox"
                          name="allDay"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">All Day</span>
                      </label>
                    </div>



                    {/* Repeat Checkbox */}
                    <div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <Field
                          type="checkbox"
                          name="repeat"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm font-medium text-gray-700">Repeat</span>
                      </label>
                    </div>



                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <Field
                        as="textarea"
                        name="description"
                        rows="6"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-gray-50 ${
                          errors.description && touched.description ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Enter event description..."
                      />
                      <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>



                  {/* Modal Footer */}
                  <div className="flex items-center gap-3 px-12 py-6 border-t border-gray-200 flex-shrink-0">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Publishing...' : 'Publish'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </>
      )}
    </main>
  );
}
