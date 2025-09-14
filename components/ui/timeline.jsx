"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-0 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="text-blue-500">E</span>
          <span className="text-yellow-500">v</span>
          <span className="text-red-500">e</span>
          <span className="text-blue-500">n</span>
          <span className="text-yellow-500">t</span>
          <span className="text-red-500">s</span>
        </motion.h1>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          // Add 'group' here for hover state
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10 group"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full rounded-4xl">
              <div
                className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none"
                style={{
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: "1px",
                }}
              >
                <div
                  className="absolute inset-[-200%] opacity-0 transition-opacity duration-100 group-hover:opacity-100 animate-spin"
                  style={{
                    background:
                      "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 340deg, rgb(107 114 128) 360deg)", // text-neutral-500 color
                    animationDuration: "5s",
                  }}
                />
              </div>

              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>

              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[4px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-gradient-to-t from-red-500 via-yellow-200 via-blue-800 to-green-500 from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
