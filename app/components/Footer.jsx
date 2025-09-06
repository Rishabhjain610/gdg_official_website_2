'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoMail, IoLocation } from 'react-icons/io5';
import { cn } from '../../lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <IoLogoGithub size={20} />, href: '#', color: 'hover:text-gray-300' },
    { name: 'Instagram', icon: <IoLogoInstagram size={20} />, href: '#', color: 'hover:text-pink-400' },
    { name: 'LinkedIn', icon: <IoLogoLinkedin size={20} />, href: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: <IoLogoTwitter size={20} />, href: '#', color: 'hover:text-sky-400' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Teams', href: '/teams' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const contactInfo = [
    { icon: <IoMail size={16} />, text: 'gdg@tsec.edu', href: 'mailto:gdg@tsec.edu' },
    { icon: <IoLocation size={16} />, text: 'TSEC, Mumbai', href: '#' },
  ];

  return (
    <footer className="relative">
      {/* Main footer content */}
      <div className="border-t border-white/10 bg-black backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Brand Section */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image 
                  src="/Logo.png" 
                  alt="GDG Logo" 
                  width={40} 
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-white text-lg font-bold">GDG TSEC</h3>
                  <p className="text-gray-400 text-xs">Developer Community</p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Building the future through technology and innovation at Thadomal Shahani Engineering College.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={cn(
                      'p-2 rounded-lg bg-white/5 text-gray-400 transition-all duration-300 hover:bg-white/10',
                      social.color
                    )}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-white text-base font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-white text-base font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <Link
                      href={info.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"
                    >
                      {info.icon}
                      {info.text}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-4">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors duration-200 text-sm"
                  />
                  <button className="px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-200 text-sm">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="text-gray-400 text-sm">
                © {currentYear} GDG TSEC. Made with ❤️ by developers.
              </div>
              <div className="flex gap-4 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;