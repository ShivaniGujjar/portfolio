import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMongodb, SiJavascript } from 'react-icons/si';

// ==========================================
// 🏷️ REUSABLE PILL BADGE COMPONENT
// ==========================================
const CardBadge = ({ text, dotClass, borderClass, bgClass, textClass = "text-white" }) => (
  <div className={`absolute top-6 left-6 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border ${borderClass} ${bgClass} backdrop-blur-sm z-20`}>
    <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`}></span>
    <span className={`font-jetbrains text-[10px] font-bold tracking-[0.2em] uppercase mt-[1px] ${textClass}`}>
      {text}
    </span>
  </div>
);

// ==========================================
// 🧑‍💻 MAIN ABOUT COMPONENT
// ==========================================
const About = () => {
  return (
    <section className="relative w-full bg-[#050507] pt-24 md:pt-32 pb-12 overflow-hidden" id="about">
      
      {/* Background Marquee Text */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen min-w-full whitespace-nowrap opacity-[0.02] pointer-events-none z-0 select-none overflow-hidden">
        <motion.h1 
          className="font-outfit text-[3rem] sm:text-[5rem] md:text-[9rem] xl:text-[11rem] font-black text-white uppercase tracking-tighter m-0 inline-block"
          animate={{ x: [0, -1400] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          MERN STACK • CREATIVE DEVELOPER • MERN STACK • CREATIVE DEVELOPER •
        </motion.h1>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-8 relative z-10">

        {/* 🏆 FIXED HEADING (Styled like Detailed Capabilities) */}
        <div className="w-full text-center pt-4 pb-16 relative flex flex-col items-center justify-center">
          <h2 className="font-outfit text-[2.8rem] sm:text-[4rem] md:text-[5rem] font-black text-white tracking-tighter uppercase m-0 leading-none select-none flex items-center justify-center gap-4">
            ABOUT <span className="text-[#00C2FF]">ME</span>
          </h2>
          {/* Cyan Line Divider */}
          <div className="mt-6 w-16 h-[3px] bg-[#00C2FF] rounded-full"></div>
        </div>

        {/* 🍱 PREMIUM HYBRID BENTO GRID */}
        <div className="grid grid-cols-1 gap-5 relative md:grid-cols-3 md:grid-rows-[260px_260px] lg:gap-6">
          
          {/* 🆔 IDENTITY BOX */}
          <motion.div 
            className="group flex flex-col justify-end relative bg-[#0A0A0C] border border-white/[0.05] rounded-[32px] p-8 shadow-2xl hover:border-[#00C2FF]/30 transition-colors duration-500 md:col-span-2 pt-16" 
            whileHover={{ y: -5 }}
          >
            <CardBadge text="IDENTITY" dotClass="bg-[#00C2FF] shadow-[0_0_8px_#00C2FF]" borderClass="border-[#00C2FF]/20" bgClass="bg-[#00C2FF]/5" />
            <div className="mb-2 mt-auto relative z-10">
              <p className="font-jetbrains text-xs sm:text-sm md:text-base font-bold text-[#00C2FF] tracking-[0.15em] mb-2.5 uppercase">Mern Stack Developer</p>
              <h2 className="font-outfit text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-black leading-none tracking-tight text-white uppercase">Shivani Gujjar</h2>
            </div>
            <div className="mt-5 flex items-center gap-3 font-jetbrains text-[10px] font-black tracking-widest text-[#27C93F] uppercase relative z-10">
              <span className="w-2 h-2 bg-[#27C93F] rounded-full animate-ping shadow-[0_0_12px_#27C93F]"></span> Available For Work
            </div>
          </motion.div>

          {/* 🎯 MISSION BOX */}
          <motion.div 
            className="group flex flex-col items-center justify-center relative bg-[#FFB800] border-none rounded-[32px] p-8 lg:p-10 text-center shadow-[0_15px_40px_rgba(255,184,0,0.15)] hover:shadow-[0_20px_50px_rgba(255,184,0,0.3)] transition-all duration-500 md:row-span-2 pt-16" 
            whileHover={{ y: -5, scale: 1.01 }}
          >
            <CardBadge text="MISSION" dotClass="bg-black" borderClass="border-black/20" bgClass="bg-black/5" textClass="text-black/60 group-hover:text-black" />
            <p className="font-outfit text-[1.4rem] sm:text-[1.6rem] md:text-[1.8rem] lg:text-[2.2rem] font-black leading-[1.2] text-black mt-4 relative z-10">
              Developing <br/>
              <span className="bg-black text-[#FFB800] px-3 py-1 rounded-lg mt-2 mb-2 inline-block shadow-xl">Scalable</span> <br/>
              MERN solutions with pixel-perfect precision.
            </p>
          </motion.div>

          {/* 🎓 ACADEMIC TIMELINE BOX */}
          <motion.div 
            className="group flex flex-col justify-end relative bg-[#0A0A0C] border border-white/[0.05] rounded-[32px] p-8 shadow-2xl hover:border-white/20 transition-colors duration-500 pt-16" 
            whileHover={{ y: -5 }}
          >
            <CardBadge text="ACADEMIC" dotClass="bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.6)]" borderClass="border-white/20" bgClass="bg-white/5" />
            <div className="flex flex-col gap-4 h-full justify-end relative z-10 mt-6">
              <div>
                <h4 className="font-outfit text-xl sm:text-2xl font-bold text-white tracking-wide m-0">MCA <span className="text-white/40 font-light text-lg">@ LPU</span></h4>
                <p className="font-jetbrains text-[10px] sm:text-[11px] text-[#00C2FF] mt-1.5 tracking-widest">2024 — 2026</p>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
              <div>
                <h4 className="font-outfit text-lg sm:text-xl font-bold text-white/70 tracking-wide m-0">BCA <span className="text-white/30 font-light text-base">@ GGSIPU</span></h4>
                <p className="font-jetbrains text-[10px] sm:text-[11px] text-white/30 mt-1.5 tracking-widest">2021 — 2023</p>
              </div>
            </div>
          </motion.div>

          {/* 🛠️ TECH STACK GLOW BOX */}
          <motion.div 
            className="group flex flex-col justify-center items-center relative bg-[#0A0A0C] border border-white/[0.05] rounded-[32px] p-8 shadow-2xl hover:border-[#00C2FF]/30 transition-colors duration-500 pt-16" 
            whileHover={{ y: -5 }}
          >
            <CardBadge text="TECH STACK" dotClass="bg-[#00C2FF]" borderClass="border-[#00C2FF]/30" bgClass="bg-[#00C2FF]/10" />
            <div className="grid grid-cols-2 gap-8 mt-6 relative z-10 lg:gap-12">
              <SiReact className="text-[3rem] text-[#61DAFB]" />
              <SiNodedotjs className="text-[3rem] text-[#339933]" />
              <SiMongodb className="text-[3rem] text-[#47A248]" />
              <div className="w-[3rem] h-[3rem] bg-[#F7DF1E] rounded-lg flex items-center justify-center">
                <SiJavascript className="text-[2rem] text-black" />
              </div>
            </div>
          </motion.div>

        </div>

        

      </div>
    </section>
  );
};

export default About;