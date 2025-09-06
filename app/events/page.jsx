import React from 'react';
import { IoCalendarOutline, IoLocationOutline, IoTimeOutline } from 'react-icons/io5';

const EventsPage = () => {
  // Placeholder data for events
  const events = [
    {
      title: 'Next.js 15 Deep Dive',
      date: 'October 12, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Virtual / Online',
      description: 'Explore the new features of Next.js 15, including React Compiler, partial pre-rendering, and more.'
    },
    {
      title: 'AI & Gemini API Workshop',
      date: 'November 5, 2025',
      time: '5:00 PM - 7:30 PM',
      location: 'TSEC Auditorium',
      description: 'A hands-on workshop on integrating the Google Gemini API into your applications for powerful AI capabilities.'
    },
    {
      title: 'Flutter Festival',
      date: 'December 1, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'TSEC Campus',
      description: 'Join us for a full day of talks, codelabs, and networking focused on building beautiful cross-platform apps with Flutter.'
    }
  ];

  return (
    <div className="min-h-screen w-full text-white px-4 pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-lg text-gray-300">
            Join our community sessions to learn, build, and grow together.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 border border-white/10 rounded-2xl p-6 flex flex-col shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold text-blue-400 mb-3">{event.title}</h2>
              <div className="space-y-3 text-gray-300 mb-4 text-sm">
                <p className="flex items-center gap-2"><IoCalendarOutline /> {event.date}</p>
                <p className="flex items-center gap-2"><IoTimeOutline /> {event.time}</p>
                <p className="flex items-center gap-2"><IoLocationOutline /> {event.location}</p>
              </div>
              <p className="text-gray-400 flex-1 mb-6">{event.description}</p>
              <button className="mt-auto w-full rounded-lg bg-white/10 py-2.5 font-semibold transition-colors duration-200 hover:bg-white/20">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;