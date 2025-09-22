"use client";

import React, { useEffect, useState, memo } from 'react';
import Image from 'next/image';

const iconComponents = {
  blacksimba: {
    component: () => (
      <Image 
        src="/logos/Black Simba.png" 
        alt="Black Simba" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#FF6B35'
  },
  collegepond: {
    component: () => (
      <Image 
        src="/logos/Collegepond.webp" 
        alt="College Pond" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#4A90E2'
  },
  devfolio: {
    component: () => (
      <Image 
        src="/logos/Devfolio.png" 
        alt="Devfolio" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#00D4AA'
  },
  ethindia: {
    component: () => (
      <Image 
        src="/logos/ETHIndia.png" 
        alt="ETH India" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#8B5CF6'
  },
  fra: {
    component: () => (
      <Image 
        src="/logos/FRA.png" 
        alt="FRA" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#EF4444'
  },
  fyregig: {
    component: () => (
      <Image 
        src="/logos/Fyre GIG.png" 
        alt="Fyre Gig" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#F59E0B'
  },
  redfox: {
    component: () => (
      <Image 
        src="/logos/Redfox-Security.png" 
        alt="Redfox Security" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#DC2626'
  },
  taskade: {
    component: () => (
      <Image 
        src="/logos/Taskade.png" 
        alt="Taskade" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#3B82F6'
  },
  tcglobal: {
    component: () => (
      <Image 
        src="/logos/TC Global.jpg" 
        alt="TC Global" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#10B981'
  },
  thedevarmy: {
    component: () => (
      <Image 
        src="/logos/theDevArmy.png" 
        alt="The Dev Army" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#6366F1'
  },
  unstop: {
    component: () => (
      <Image 
        src="/logos/Unstop.png" 
        alt="Unstop" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#8B5CF6'
  },
  wolfram: {
    component: () => (
      <Image 
        src="/logos/Wolfram.png" 
        alt="Wolfram" 
        width={36} 
        height={36}
        className="w-full h-full object-contain"
      />
    ),
    color: '#E879F9'
  }
};

const SkillIcon = memo(({ type }) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

const skillsConfig = [
  { id: 'blacksimba', orbitRadius: 120, size: 65, speed: 0.5, iconType: 'blacksimba', phaseShift: 0, glowColor: 'red', label: 'Black Simba' },
  { id: 'collegepond', orbitRadius: 120, size: 72, speed: 0.5, iconType: 'collegepond', phaseShift: 2 * Math.PI / 3, glowColor: 'red', label: 'College Pond' },
  { id: 'devfolio', orbitRadius: 120, size: 65, speed: 0.5, iconType: 'devfolio', phaseShift: 4 * Math.PI / 3, glowColor: 'red', label: 'Devfolio' },
  { id: 'ethindia', orbitRadius: 180, size: 79, speed: -0.3, iconType: 'ethindia', phaseShift: 0, glowColor: 'blue', label: 'ETH India' },
  { id: 'fra', orbitRadius: 180, size: 72, speed: -0.3, iconType: 'fra', phaseShift: 2 * Math.PI / 3, glowColor: 'blue', label: 'FRA' },
  { id: 'fyregig', orbitRadius: 180, size: 65, speed: -0.3, iconType: 'fyregig', phaseShift: 4 * Math.PI / 3, glowColor: 'blue', label: 'Fyre Gig' },
  { id: 'redfox', orbitRadius: 240, size: 72, speed: 0.4, iconType: 'redfox', phaseShift: 0, glowColor: 'green', label: 'Redfox Security' },
  { id: 'taskade', orbitRadius: 240, size: 65, speed: 0.4, iconType: 'taskade', phaseShift: 2 * Math.PI / 3, glowColor: 'green', label: 'Taskade' },
  { id: 'tcglobal', orbitRadius: 240, size: 72, speed: 0.4, iconType: 'tcglobal', phaseShift: 4 * Math.PI / 3, glowColor: 'green', label: 'TC Global' },
  { id: 'thedevarmy', orbitRadius: 300, size: 65, speed: -0.25, iconType: 'thedevarmy', phaseShift: 0, glowColor: 'yellow', label: 'The Dev Army' },
  { id: 'unstop', orbitRadius: 300, size: 72, speed: -0.25, iconType: 'unstop', phaseShift: 2 * Math.PI / 3, glowColor: 'yellow', label: 'Unstop' },
  { id: 'wolfram', orbitRadius: 300, size: 65, speed: -0.25, iconType: 'wolfram', phaseShift: 4 * Math.PI / 3, glowColor: 'yellow', label: 'Wolfram' }
];

const OrbitingSkill = memo(({ config, angle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;
  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;
  return <div className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out" style={{
    width: `${size}px`,
    height: `${size}px`,
    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
    zIndex: isHovered ? 20 : 10
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`
          relative w-full h-full p-2 bg-white backdrop-blur-sm
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `} style={{
      boxShadow: isHovered ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20` : undefined
    }}>
        <SkillIcon type={iconType} />
        {isHovered && <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none">
            {label}
          </div>}
      </div>
    </div>;
});
OrbitingSkill.displayName = 'OrbitingSkill';

const GlowingOrbitPath = memo(({ radius, glowColor = 'red', animationDelay = 0 }) => {
  const glowColors = {
    red: {
      primary: 'rgba(255, 0, 0, 0.4)',
      secondary: 'rgba(255, 0, 0, 0.2)',
      border: 'rgba(255, 0, 0, 0.3)'
    },
    blue: {
      primary: 'rgba(0, 0, 255, 0.4)',
      secondary: 'rgba(0, 0, 255, 0.2)',
      border: 'rgba(0, 0, 255, 0.3)'
    },
    green: {
      primary: 'rgba(0, 255, 0, 0.4)',
      secondary: 'rgba(0, 255, 0, 0.2)',
      border: 'rgba(0, 255, 0, 0.3)'
    },
    yellow: {
      primary: 'rgba(255, 255, 0, 0.4)',
      secondary: 'rgba(255, 255, 0, 0.2)',
      border: 'rgba(255, 255, 0, 0.3)'
    }
  };
  const colors = glowColors[glowColor] || glowColors.red;
  return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" style={{
    width: `${radius * 2}px`,
    height: `${radius * 2}px`,
    animationDelay: `${animationDelay}s`
  }}>
      {}
      <div className="absolute inset-0 rounded-full animate-pulse" style={{
      background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
      boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
      animation: 'pulse 4s ease-in-out infinite',
      animationDelay: `${animationDelay}s`
    }} />

      {}
      <div className="absolute inset-0 rounded-full" style={{
      border: `1px solid ${colors.border}`,
      boxShadow: `inset 0 0 20px ${colors.secondary}`
    }} />
    </div>;
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    let animationFrameId;
    let lastTime = performance.now();
    const animate = currentTime => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;
      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);
  const orbitConfigs = [
    { radius: 120, glowColor: 'red', delay: 0 },
    { radius: 180, glowColor: 'blue', delay: 1.5 },
    { radius: 240, glowColor: 'green', delay: 0.5 },
    { radius: 300, glowColor: 'yellow', delay: 2.0 }
  ];
  return <main className="w-full h-full flex items-center justify-center overflow-hidden bg-transparent">
      <div className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        
        {}
        <div className="w-20 h-20 bg-transparent rounded-full flex items-center justify-center z-10 relative shadow-2xl">
          <div className="absolute inset-0 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-white blur-2xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          <Image 
                src="/Logo.png" 
                alt="Center Logo" 
                width={80} 
                height={80}
            className="w-full h-full object-contain"
            />
        </div>

        {}
        {orbitConfigs.map(config => <GlowingOrbitPath key={`path-${config.radius}`} radius={config.radius} glowColor={config.glowColor} animationDelay={config.delay} />)}

        {}
        {skillsConfig.map(config => {
        const angle = time * config.speed + (config.phaseShift || 0);
        return <OrbitingSkill key={config.id} config={config} angle={angle} />;
      })}
      </div>
    </main>;
}