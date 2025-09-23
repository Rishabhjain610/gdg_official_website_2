"use client";

import OrbitingSkills from "@/components/ui/OrbittingSkills";
import Chatbot from "../components/Chatbot";
export default function Sponsors() {
  return (
    <div className="relative z-30 grid min-h-screen grid-cols-1 gap-8 overflow-hidden bg-linear-to-b from-background via-background to-black/50  sm:my-24">
      <div className="min-h-screen flex items-center justify-center bg-transparent">
      <OrbitingSkills />
      <Chatbot />
    </div>
    </div>
  );
}
