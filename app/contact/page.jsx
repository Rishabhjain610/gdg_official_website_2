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

        <div
        className="flex justify-center w-full my-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d120671.48411950935!2d72.75345847992571!3d19.064446407214863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sAdvocate%20Nari%20Gursahani%20Marg%2C%2037th%20Rd%2C%20off%20Linking%20Road%2C%20TPS%20III%2C%20Bandra%20West%2C%20Mumbai%2C%20400050!3m2!1d19.0644642!2d72.8358329!5e0!3m2!1sen!2sin!4v1756120463116!5m2!1sen!2sin"
          className="rounded-4xl shadow-lg w-full max-w-4xl h-[450px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
    </div>
  );
};
export default ContactPage;