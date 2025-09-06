'use client'
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-[radial-gradient(ellipse_at_center,_#111827,_#000)]">
      <DotLottieReact
        src="https://lottie.host/eb4efa76-a1b5-4684-b820-0847764d5786/Tkv7oviplK.lottie"
        loop
        autoplay
        style={{ width: 700, height: 700 }}
      />
    </div>
  );
};

export default Loader;