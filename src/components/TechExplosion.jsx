import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, 
  SiJavascript, SiTailwindcss, SiGit, SiRedux 
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

// 🎯 Perfectly Elliptical Circular Orbit Coordinates
const skillIcons = [
  { name: "React", icon: SiReact, color: "#00C2FF", x: -380, y: -150, z: 80, rotate: -18, scale: 1.15 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", x: -160, y: -240, z: 120, rotate: 12, scale: 1.05 },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8", x: 160, y: -240, z: 90, rotate: -12, scale: 1.05 },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", x: 380, y: -150, z: 100, rotate: 20, scale: 1.15 },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", x: -420, y: 110, z: 60, rotate: 15, scale: 1.1 },
  { name: "Redux", icon: SiRedux, color: "#764ABC", x: -180, y: 230, z: 80, rotate: -14, scale: 1.0 },
  { name: "Git", icon: SiGit, color: "#FF6C37", x: 180, y: 230, z: 100, rotate: 16, scale: 1.05 },
  { name: "Express", icon: SiExpress, color: "#FFFFFF", x: 420, y: 110, z: 70, rotate: -15, scale: 1.05 },
];

// 🖥️ Monitor Curved Screen initial 4x2 Grid positions
const initialGrid = [
  { x: -105, y: -38, scale: 0.52 },
  { x: -35,  y: -38, scale: 0.52 },
  { x: 35,   y: -38, scale: 0.52 },
  { x: 105,  y: -38, scale: 0.52 },
  { x: -105, y: 32,  scale: 0.52 },
  { x: -35,  y: 32,  scale: 0.52 },
  { x: 35,   y: 32,  scale: 0.52 },
  { x: 105,  y: 32,  scale: 0.52 },
];

const TechExplosion = () => {
  const triggerRef = useRef(null);
  const pinRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Initial State inside Monitor Screen
      gsap.set(".floating-3d-icon", {
        x: (i) => initialGrid[i].x,
        y: (i) => initialGrid[i].y,
        z: 0,
        scale: (i) => initialGrid[i].scale,
        opacity: 1,
        rotate: 0,
      });

      // 2. Smooth Scrubbed Pinning Timeline
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: pinRef.current,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // Step 1: Explode outwards into circular orbit
      mainTl.to(".floating-3d-icon", {
        x: (i) => skillIcons[i].x,
        y: (i) => skillIcons[i].y,
        z: (i) => skillIcons[i].z,
        scale: (i) => skillIcons[i].scale,
        rotate: (i) => skillIcons[i].rotate,
        opacity: 1,
        duration: 2,
        stagger: 0.04,
        ease: "power2.out"
      })
      // Step 2: Gentle Float Expansion
      .to(".floating-3d-icon", {
        y: (i) => skillIcons[i].y + (i % 2 === 0 ? 12 : -12),
        rotate: (i) => skillIcons[i].rotate + (i % 2 === 0 ? 4 : -4),
        duration: 1.5,
        ease: "sine.inOut"
      });

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="relative w-full h-[220vh] bg-[#020204]">
      <section 
        ref={pinRef} 
        className="w-full h-screen flex flex-col items-center justify-center overflow-hidden select-none relative"
        style={{ perspective: "1200px" }}
      >
        {/* 🌌 TOP & BOTTOM SEAMLESS BLEND GRADIENTS */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020204] via-[#020204]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020204] via-[#020204]/80 to-transparent z-20 pointer-events-none" />

        {/* Ambient Glow Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#00C2FF]/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#FF6C37]/[0.02] rounded-full blur-[150px] pointer-events-none" />

        {/* 🏆 PERFECTLY POSITIONED HEADER */}
        <div className="absolute top-12 sm:top-16 w-full text-center z-30 pointer-events-none flex flex-col items-center justify-center">
          <h2 className="font-outfit text-[2.5rem] sm:text-[3.5rem] md:text-[4.2rem] font-black leading-none text-white tracking-tighter uppercase m-0 flex items-center justify-center gap-3">
            TECH <span className="text-[#00C2FF]">STACK</span>
          </h2>
          <div className="mt-3.5 w-16 h-[3px] bg-[#00C2FF] rounded-full shadow-[0_0_12px_#00C2FF]" />
        </div>

        {/* 📺 3D MONITOR MODEL */}
        <div 
          className="clay-computer-model relative flex flex-col items-center z-10 will-change-transform mt-16 sm:mt-20"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div 
            className="relative w-[300px] sm:w-[420px] aspect-[4/3] bg-gradient-to-b from-[#1a1f2c] via-[#0f131d] to-[#080a10] rounded-[42px] p-5 flex flex-col justify-between items-center"
            style={{
              boxShadow: `
                0 35px 70px rgba(0,0,0,0.95), 
                0 0 50px rgba(0, 194, 255, 0.12),
                inset 0 6px 12px rgba(255, 255, 255, 0.15),
                inset 0 -12px 24px rgba(0, 0, 0, 0.8)
              `,
              transformStyle: "preserve-3d"
            }}
          >
            {/* Header Bar */}
            <div className="w-full flex justify-between items-center px-2 pb-2 z-10">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444] shadow-[0_0_8px_#ef4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#eab308] shadow-[0_0_8px_#eab308]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-[0_0_8px_#27C93F]" />
              </div>
              <span className="font-mono text-[9px] text-[#00C2FF] font-bold tracking-widest">[CRT_DEV_3D]</span>
            </div>

            {/* Curved Glass Screen */}
            <div 
              className="w-full h-full my-1 bg-[#04060a] rounded-[28px] border-2 border-[#00C2FF]/30 flex flex-col items-center justify-center relative overflow-hidden p-4"
              style={{
                boxShadow: "inset 0 0 35px rgba(0, 194, 255, 0.25), 0 0 20px rgba(0,0,0,0.9)"
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c2ff0d_1px,transparent_1px),linear-gradient(to_bottom,#00c2ff0d_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            </div>

            <div className="w-full flex justify-between items-center px-4 pt-2 z-10">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1e2736] border border-white/10" />
                <div className="w-2 h-2 rounded-full bg-[#1e2736] border border-white/10" />
              </div>
              <span className="font-mono text-[8px] text-white/30 tracking-[0.25em]">MERN_OS</span>
            </div>
          </div>

          {/* Stand Base */}
          <div className="w-20 h-9 bg-gradient-to-b from-[#1a202c] via-[#0d1118] to-[#06080c] border-x border-white/10 shadow-2xl" />
          <div 
            className="w-48 h-4 bg-gradient-to-r from-[#0d1118] via-[#222b3c] to-[#0d1118] rounded-[20px] border border-white/20"
            style={{
              boxShadow: "0 18px 35px rgba(0,0,0,0.9), inset 0 2px 4px rgba(255,255,255,0.2)"
            }}
          />
        </div>

        {/* 🚀 SKILL BADGES */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
          style={{ transformStyle: "preserve-3d" }}
        >
          {skillIcons.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={idx}
                className="floating-3d-icon absolute group flex flex-col items-center justify-center pointer-events-auto cursor-pointer"
              >
                <div 
                  className="w-12 h-12 sm:w-15 sm:h-15 rounded-xl sm:rounded-2xl bg-[#0b0f17]/95 border-2 backdrop-blur-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
                  style={{
                    borderColor: `${skill.color}88`,
                    boxShadow: `0 8px 25px ${skill.color}33`,
                    transformStyle: "preserve-3d"
                  }}
                >
                  <IconComponent 
                    style={{ color: skill.color }} 
                    className="text-2xl sm:text-3xl filter drop-shadow-[0_0_10px_currentColor]" 
                  />
                </div>

                <span 
                  className="mt-1 font-mono text-[8px] sm:text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-black/80 border border-white/15 backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity"
                  style={{ color: skill.color }}
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

      </section>
    </div>
  );
};

export default TechExplosion;