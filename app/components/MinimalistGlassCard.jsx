import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const VARIANTS = {
  emerald: {
    color: "#10b981",
    rgb: "16, 185, 129",
    hsl: "160, 84%, 39%",
  },
  blue: {
    color: "#3b82f6", 
    rgb: "59, 130, 246",
    hsl: "217, 91%, 60%",
  },
  amber: {
    color: "#f59e0b",
    rgb: "245, 158, 11",
    hsl: "43, 96%, 56%",
  },
  rose: {
    color: "#f43f5e",
    rgb: "244, 63, 94", 
    hsl: "351, 89%, 60%",
  },
};

const SIZES = {
  sm: {
    padding: "p-6 pt-10",
    iconSize: "w-5 h-5",
    titleSize: "text-sm",
    descSize: "text-xs",
    iconBg: "w-10 h-10",
  },
  md: {
    padding: "p-8 pt-12", 
    iconSize: "w-6 h-6",
    titleSize: "text-base",
    descSize: "text-sm",
    iconBg: "w-12 h-12",
  },
  lg: {
    padding: "p-10 pt-16",
    iconSize: "w-7 h-7", 
    titleSize: "text-lg",
    descSize: "text-base",
    iconBg: "w-14 h-14",
  },
};

export function MinimalistGlassCard({
  icon,
  title,
  description,
  className = "",
  variant = "emerald",
  size = "md",
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const variantConfig = VARIANTS[variant];
  const sizeConfig = SIZES[size];

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleTouch = () => {
    if (isMobile) {
      setIsActive(!isActive);
      setTimeout(() => setIsActive(false), 2500);
    }
  };

  if (isMobile) {
    return (
      <div
        onClick={handleTouch}
        className={`
          group relative cursor-pointer overflow-hidden rounded-3xl 
          flex flex-col items-center text-center transition-all duration-700 ease-out
          ${sizeConfig.padding} ${className}
        `}
        style={{
          background: isActive 
            ? `linear-gradient(145deg, 
                rgba(${variantConfig.rgb}, 0.08) 0%, 
                rgba(${variantConfig.rgb}, 0.02) 50%,
                rgba(0, 0, 0, 0.4) 100%
              )`
            : `linear-gradient(145deg, 
                rgba(${variantConfig.rgb}, 0.04) 0%, 
                rgba(255, 255, 255, 0.02) 50%,
                rgba(0, 0, 0, 0.3) 100%
              )`,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${isActive ? `rgba(${variantConfig.rgb}, 0.3)` : `rgba(${variantConfig.rgb}, 0.15)`}`,
          boxShadow: isActive 
            ? `
                0 8px 32px rgba(${variantConfig.rgb}, 0.2),
                0 0 0 1px rgba(${variantConfig.rgb}, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            : `
                0 4px 20px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(${variantConfig.rgb}, 0.05),
                inset 0 1px 0 rgba(255, 255, 255, 0.05)
              `,
          transform: isActive ? 'translateY(-2px) scale(1.01)' : 'translateY(0) scale(1)',
        }}
      >
        {/* Glass reflection */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-30"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, ${isActive ? '0.15' : '0.08'}) 0%, 
              transparent 40%, 
              rgba(${variantConfig.rgb}, ${isActive ? '0.1' : '0.05'}) 100%
            )`,
          }}
        />

        {/* Icon container */}
        <div className="relative z-10 mb-6">
          <div 
            className={`
              ${sizeConfig.iconBg} rounded-2xl flex items-center justify-center
              relative transition-all duration-500
            `}
            style={{
              background: isActive 
                ? `linear-gradient(145deg, 
                    rgba(${variantConfig.rgb}, 0.2) 0%, 
                    rgba(${variantConfig.rgb}, 0.1) 100%
                  )`
                : `linear-gradient(145deg, 
                    rgba(${variantConfig.rgb}, 0.1) 0%, 
                    rgba(${variantConfig.rgb}, 0.05) 100%
                  )`,
              border: `1px solid rgba(${variantConfig.rgb}, ${isActive ? '0.3' : '0.2'})`,
              boxShadow: isActive 
                ? `
                    0 4px 20px rgba(${variantConfig.rgb}, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.2)
                  `
                : `
                    0 2px 10px rgba(${variantConfig.rgb}, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
            }}
          >
            {/* Icon glow */}
            <div 
              className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${isActive ? 'opacity-60' : 'opacity-0'}`}
              style={{
                background: `radial-gradient(circle at center, rgba(${variantConfig.rgb}, 0.4), transparent 70%)`,
                filter: 'blur(8px)',
              }}
            />
            
            <span
              className={`relative z-10 ${sizeConfig.iconSize} transition-all duration-500`}
              style={{
                color: isActive ? '#ffffff' : variantConfig.color,
                filter: isActive ? `drop-shadow(0 0 8px rgba(${variantConfig.rgb}, 0.8))` : 'none',
              }}
            >
              {icon}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h3
            className={`font-medium mb-3 transition-all duration-500 ${sizeConfig.titleSize}`}
            style={{
              color: isActive ? '#ffffff' : variantConfig.color,
              textShadow: isActive ? `0 0 20px rgba(${variantConfig.rgb}, 0.6)` : 'none',
            }}
          >
            {title}
          </h3>
          <p
            className={`leading-relaxed transition-all duration-500 ${sizeConfig.descSize}`}
            style={{
              color: isActive ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.6)',
            }}
          >
            {description}
          </p>
        </div>

        {/* Subtle interaction indicator */}
        <div 
          className="absolute bottom-4 right-4 w-2 h-2 rounded-full transition-all duration-300"
          style={{
            backgroundColor: isActive ? '#ffffff' : variantConfig.color,
            opacity: isActive ? 0.8 : 0.4,
            boxShadow: isActive ? `0 0 10px rgba(${variantConfig.rgb}, 0.8)` : 'none',
          }}
        />
      </div>
    );
  }

  // Desktop version - clean hover effects
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`
        group relative cursor-pointer overflow-hidden rounded-3xl 
        flex flex-col items-center text-center
        ${sizeConfig.padding} ${className}
      `}
      style={{
        background: `linear-gradient(145deg, 
          rgba(${variantConfig.rgb}, 0.06) 0%, 
          rgba(255, 255, 255, 0.02) 50%,
          rgba(0, 0, 0, 0.3) 100%
        )`,
        backdropFilter: 'blur(20px)',
        border: `1px solid rgba(${variantConfig.rgb}, 0.2)`,
        boxShadow: `
          0 4px 20px rgba(0, 0, 0, 0.1),
          0 0 0 1px rgba(${variantConfig.rgb}, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.05)
        `,
      }}
    >
      {/* Glass reflection */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.1) 0%, 
            transparent 40%, 
            rgba(${variantConfig.rgb}, 0.05) 100%
          )`,
        }}
      />

      {/* Icon container */}
      <div className="relative z-10 mb-6">
        <motion.div 
          whileHover={{ scale: 1.1, rotateY: 5 }}
          transition={{ duration: 0.3 }}
          className={`
            ${sizeConfig.iconBg} rounded-2xl flex items-center justify-center
            relative transition-all duration-500
          `}
          style={{
            background: `linear-gradient(145deg, 
              rgba(${variantConfig.rgb}, 0.15) 0%, 
              rgba(${variantConfig.rgb}, 0.08) 100%
            )`,
            border: `1px solid rgba(${variantConfig.rgb}, 0.25)`,
            boxShadow: `
              0 2px 10px rgba(${variantConfig.rgb}, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          <span
            className={`relative z-10 ${sizeConfig.iconSize} transition-all duration-300 group-hover:scale-110`}
            style={{
              color: variantConfig.color,
            }}
          >
            {icon}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h3
          className={`font-medium mb-3 transition-all duration-300 ${sizeConfig.titleSize} group-hover:text-white`}
          style={{
            color: variantConfig.color,
          }}
        >
          {title}
        </h3>
        <p
          className={`leading-relaxed transition-all duration-300 ${sizeConfig.descSize} text-white/60 group-hover:text-white/80`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}