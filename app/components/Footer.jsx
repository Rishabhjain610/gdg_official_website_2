"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoMail,
  IoLocation,
} from "react-icons/io5";
import { cn } from "../../lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
    
      <div className="border-t border-white/10 bg-black backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <Image
                  src="/Logo.png"
                  alt="GDG Logo"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-white text-lg font-bold">
                    Google Developers Group
                  </h3>
                  <p className="text-blue-400 text-sm">
                    Thadomal Shahani Engineering College
                  </p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Building the future through technology and innovation at
                Thadomal Shahani Engineering College.
              </p>

              
              <div className="flex gap-3">
                <Link
                  href="https://www.instagram.com/gdg_tsec?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className={cn(
                    "p-2 rounded-lg bg-white/5 text-gray-400 transition-all duration-300 hover:bg-white/10",
                    "hover:text-pink-400"
                  )}
                  aria-label="Instagram"
                >
                  <IoLogoInstagram size={20} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/gdg-tsec/?originalSubdomain=in"
                  className={cn(
                    "p-2 rounded-lg bg-white/5 text-gray-400 transition-all duration-300 hover:bg-white/10",
                    "hover:text-blue-400"
                  )}
                  aria-label="LinkedIn"
                >
                  <IoLogoLinkedin size={20} />
                </Link>
              </div>
            </div>

           
            <div className="md:col-span-1">
              <h4 className="text-white text-base font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teams"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Teams
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            
            <div className="md:col-span-1">
              <h4 className="text-white text-base font-semibold mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="mailto:dsctsec@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <IoMail size={16} />
                    dsctsec@gmail.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"
                  >
                    <IoLocation size={16} />
                    TSEC, Mumbai
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-center text-center ">
              <div className="text-gray-400 text-sm">
                © {currentYear} GDG TSEC. Made with ❤️ by GDG Tech Team.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
