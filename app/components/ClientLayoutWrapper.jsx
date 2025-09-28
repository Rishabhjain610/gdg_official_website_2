"use client";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import { usePathname } from "next/navigation";
import { GridBackground } from "./GridBackground";
import Chatbot from "./Chatbot";
import { AnimatePresence,motion } from "framer-motion";
export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <GridBackground>
        <AnimatePresence>
          <motion.div
            className="relative z-10 flex flex-col"
            key={pathname} // Key to trigger animation on route change
            
          >
            <main className="flex-1">{children}</main>
          </motion.div>
        </AnimatePresence>
      </GridBackground>
      <Footer />
      <Chatbot />
    </>
  );
}
