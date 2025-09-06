// 'use client'
// import React from "react";
// import { GridBackground } from "./components/GridBackground";
// const page = () => {
//   return (
//     <div className="min-h-[100vh] ">
//       <GridBackground />

//     </div>
//   );
// };

// export default page;
"use client";
import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
     

      {/* Main Content */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-4 md:px-6 lg:px-24 min-h-screen pt-[150px] sm:pt-0">
        {/* Left Content Section */}
        <div className="max-w-3xl mb-16 sm:mb-0">
          {/* Main Heading */}
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-4">
            LEARN, BUILD, GROW
          </h1>

          {/* Sub Heading */}
          <h2 className="font-montserrat font-medium text-3xl md:text-4xl lg:text-5xl text-white mb-8">
            with
          </h2>

          {/* GDG Info Card */}
          <div className="bg-[#efefef] rounded-2xl p-6 mb-8 max-w-sm shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/Logo.png"
                alt="Google Logo"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <p className="font-montserrat font-semibold text-gray-800">
                  Google
                </p>
                <p className="font-montserrat font-semibold text-gray-800">
                  Developer Groups
                </p>
              </div>
            </div>
            <p className="font-montserrat text-gray-700 text-sm">
              Thadomal Shahani Engineering College
            </p>
          </div>

          {/* CTA Button */}
          <button className="bg-[#fbcd8a] text-white font-montserrat font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            LEARN MORE
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-full sm:max-w-lg flex justify-center">
          <div className="relative">
            <Image
              src="/land.png"
              alt="People collaborating illustration"
              width={500}
              height={500}
              className="object-contain sm:w-[500px] sm:h-[800px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
