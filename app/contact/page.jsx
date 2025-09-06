import React from 'react';
import { IoMailOutline, IoLocationOutline, IoCallOutline } from 'react-icons/io5';

const ContactPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white px-4 pt-24 pb-12">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-300">
            Have a question or a proposal? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-gray-800/30 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-gray-400">
              Fill up the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <a href="tel:+911234567890" className="flex items-center gap-3 group">
                <IoCallOutline className="text-blue-400 group-hover:text-blue-300" size={20} />
                <span className="text-gray-300 group-hover:text-white transition-colors">+91 12345 67890</span>
              </a>
              <a href="mailto:gdg@tsec.edu" className="flex items-center gap-3 group">
                <IoMailOutline className="text-blue-400 group-hover:text-blue-300" size={20} />
                <span className="text-gray-300 group-hover:text-white transition-colors">gdg@tsec.edu</span>
              </a>
              <div className="flex items-center gap-3">
                <IoLocationOutline className="text-blue-400" size={20} />
                <span className="text-gray-300">TSEC, Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400 transition-colors"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;