'use client';

import Image from 'next/image';

import React, { useState } from 'react';
import {
  IoMailOutline,
  IoLocationOutline,
  IoLogoLinkedin
} from 'react-icons/io5';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [status, setStatus] = useState('idle'); // idle | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('idle');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-white px-4 pt-24 pb-12">
      
      <div className="max-w-7xl  mx-auto w-full">

      <div className="text-center mb-12"> 
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 text-white"> 
          <span className="text-blue-400">Get </span> 
          <span className="text-yellow-400">In </span> 
          <span className="text-red-400">Touch</span> 
        </h1> 
        <p className="text-lg text-gray-300"> Have a question or a proposal? We'd love to hear from you. </p> 
      </div>

        {/* Header */}
      <div className="grid lg:grid-cols-3 gap-12 bg-neutral-800/30 border border-white/10 rounded-2xl p-8 backdrop-blur-sm max-h-1/4">

        {/* Left: Contact Info + Form (2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-gray-400">
              Fill up the form and our team will get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <a
                href="https://share.google/VLz9L7Y2cMQLMSKou"
                className="flex items-center gap-3 group"
                target="_blank"
              >
                <IoLogoLinkedin
                  className="text-blue-400 group-hover:text-blue-300"
                  size={20}
                />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  LinkedIn Profile
                </span>
              </a>
              <a
                href="mailto:gdg@tsec.edu"
                className="flex items-center gap-3 group"
              >
                <IoMailOutline
                  className="text-blue-400 group-hover:text-blue-300"
                  size={20}
                />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  dsctsec@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-3">
                <IoLocationOutline className="text-blue-400" size={20} />
                <span className="text-gray-300">TSEC, Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="hidden"
              name="access_key"
              value="fbd42e37-388e-4c75-bd3f-d158d27b3e8c"
            />

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-400 transition-colors"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg transition-colors"
            >
              Send Message
            </button>

            {/* Status Message */}
            {status === 'success' && (
              <p className="text-green-400 font-semibold mt-2">
                ✅ Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 font-semibold mt-2">
                ❌ Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>

        {/* Right: Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/contact.png"
            alt="Contact Illustration"
            width={700}
            height={500}
            className="object-contain w-full max-w-xl md:max-w-xl lg:max-w-full"
          />
        </div>
      </div>


        {/* Google Maps */}
        <motion.div
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
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
