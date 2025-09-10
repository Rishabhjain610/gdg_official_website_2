

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { 
  IoArrowForward, 
  IoCalendarOutline, 
  IoPeopleOutline, 
  IoCodeSlashOutline,
  IoTrophyOutline 
} from "react-icons/io5";
import { PulseCardDemo } from "./components/PulseCardDemo";
import { PulseCard } from "./components/PulseCard";
import { Zap } from "lucide-react";
const Page = () => {
  // Counter state for animation
  const [counters, setCounters] = useState({
    members: 0,
    events: 0,
    domains:0,
  });

  const stats = [
    { key: 'members', icon: <IoPeopleOutline size={24} />, number: 200, label: "Members" },
    { key: 'events', icon: <IoCalendarOutline size={24} />, number: 50, label: "Events" },
    { key: 'domains', icon: <IoCodeSlashOutline size={24} />, number: 5, label: "Domains" },
   
  ];

  const features = [
    {
      title: "Learn",
      description: "Master cutting-edge technologies with hands-on workshops and expert-led sessions.",
      icon: "📚"
    },
    {
      title: "Build",
      description: "Create innovative projects and contribute to open-source initiatives.",
      icon: "🛠️"
    },
    {
      title: "Network",
      description: "Connect with like-minded developers and industry professionals.",
      icon: "🤝"
    }
  ];

  // Animated counter effect
  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));
        
        const timer = setInterval(() => {
          start += Math.ceil(end / 100);
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [stat.key]: start
          }));
        }, stepTime);
      });
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative text-white">
      
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-red-900/8"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-yellow-900/6 via-transparent to-green-900/8"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center mt-5 lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Official GDG Chapter</span>
            </div>

            {/* Main Heading - One Line with Google Colors */}
            {/* <h1 className="text-4xl md:text-6xl lg:text-[60px] font-bold mb-6 leading-tight">
              <span className="text-blue-500">LEARN, </span>
              <span className="text-red-500">BUILD, </span>
              <span className="text-yellow-500">GROW</span>
            </h1> */}
            <div className="overflow-hidden mb-4 sm:text-left ">
              <h1 className="text-5xl  md:text-6xl lg:text-7xl font-bold leading-tight ">
                <span className="text-blue-500">LEARN, </span>
                <span className="text-red-500">BUILD, </span>
                <span className="text-yellow-500">GROW</span>
                
              </h1>
              <span className="text-4xl font-bold  leading-tight text-left">with</span>
              
            </div>

            {/* Sub Heading */}
             
          
            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/events">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  Join Community
                  <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/events">
                <button className="border-2 border-white/20 hover:border-white/40 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/5">
                  Explore Events
                </button>
              </Link>
            </div> */}
            <div className="bg-white/10 rounded-3xl w-full sm:w-[500px] p-3 py-6 sm:p-5 sm:gap-4 items-center mb-8 flex  sm:flex-row backdrop-blur-sm">
             <img src="/Logo.png" alt="GDG TSEC Banner"  className="w-[80px] h-[40px] sm:w-[90px] sm:h-[50px] " />
             <div className="">
                <h1 className="text-[18px] sm:text-[25px]">Google Developer Group</h1>
                <h1 className="text-blue-300 text-[4px]sm:text-lg">Thadomal Shahani Engineering College</h1>
             </div>
            </div>
            

            {/* Animated Stats with Background */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-blue-400 mb-2 flex justify-center lg:justify-start group-hover:text-blue-300 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {counters[stat.key]}+
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - GDG Card (Unchanged) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md shadow-2xl">
                {/* GDG Logo and Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <Image
                      src="/Logo.png"
                      alt="GDG TSEC Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                    
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">GDG TSEC</h3>
                    <p className="text-white text-sm">Google Developer Group</p>
                    <p className="text-blue-300 text-xs">Thadomal Shahani Engineering College</p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                        <p className="text-gray-300 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Badge with Google Colors */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">Powered by</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold text-sm">Google</span>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements with Google Colors */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000" />
              <div className="absolute top-1/2 -left-6 w-12 h-12 bg-yellow-500/20 rounded-full blur-lg animate-pulse delay-500" />
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator - Moved to the right */}
        <div className="absolute bottom-8 left-1/2 lg:left-[55%] transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium opacity-75">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400/50 rounded-full flex justify-center backdrop-blur-sm bg-white/5 shadow-lg">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 via-red-400 to-yellow-400 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
            What is <span className="text-blue-400">GDG</span>?
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8">
            Google Developer Groups (GDG) are local communities of developers who are interested in Google's developer technology. Each local group is called a GDG chapter and can host a variety of technical activities for developers - from just a few people getting together to watch our latest videos, to large gatherings with demos and tech talks, to hackathons.
          </p>
          
          {/* Feature Cards */}
          {/* <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-3">Global Community</h3>
              <p className="text-gray-300 text-sm">Connect with developers worldwide and be part of Google's global developer ecosystem.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Latest Technologies</h3>
              <p className="text-gray-300 text-sm">Stay updated with cutting-edge Google technologies and development tools.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Collaborative Learning</h3>
              <p className="text-gray-300 text-sm">Learn together through workshops, hackathons, and knowledge sharing sessions.</p>
            </div>
          </div> */}
          <PulseCard
      icon={<Zap />}
      title="Lightning Fast"
      description="Optimized for speed and performance"
      variant="blue"
      size="lg"
      glowEffect={true}
    />
        </div>
      </section>
    </div>
  );
};

export default Page;
