import React, { useState } from "react";

export default function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-inset"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-semibold text-white pr-4">
            {question}
          </h3>
          <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''} text-blue-400`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 pb-6">
          <div className="border-t border-white/10 pt-4">
            <p className="text-gray-300 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}