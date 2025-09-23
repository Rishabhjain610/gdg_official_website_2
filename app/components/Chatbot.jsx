"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://gdg-chatbot-1.onrender.com/chat",
        {
          query: currentInput,
        }
      );
      console.log(response.data)
      const botResponse = { sender: "bot", text: response.data };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      const errorResponse = {
        sender: "bot",
        text: "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorResponse]);
      console.error("Chat API error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
     
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-[35px] sm:right-[20px] right-[10px] sm:w-[100px] sm:h-[100px] h-[60px] w-[60px]   rounded-full shadow-lg text-white z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat"
      >
        <Image src="/chatbot.png" alt="Chatbot" width={80} height={80} />
      </motion.button>

      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-24 right-6 w-[calc(100%-3rem)] max-w-sm h-[60vh] max-h-[500px] bg-black/50 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="font-bold text-white">Ask <span className="text-blue-500">G
              </span><span className="text-yellow-500">D</span><span className="text-red-500">G</span></h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-2xl leading-none"
              >
                &times;
              </button>
            </div>

            
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-white/10 text-gray-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-gray-200 p-3 rounded-xl flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-0"></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></span>
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-400"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form */}
            <div className="p-4 border-t border-white/10">
              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask something..."
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="bg-blue-600 p-2 rounded-lg text-white disabled:bg-gray-500"
                  disabled={isLoading || !input.trim()}
                >
                  <IoArrowForward size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
