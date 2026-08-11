import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { VscGithubInverted } from 'react-icons/vsc';

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

// GitHub Theme Colors matching dark UI
const githubTheme = {
  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
};

const About = () => {
  return (
    <section className="relative w-full bg-[#050507] pt-36 md:pt-48 pb-16 overflow-hidden z-20" id="about">
      
      {/* 🌌 TOP SEAMLESS FADE GRADIENT OVERLAY (Blends upper Tech Stack section) */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#020204] via-[#050507]/90 to-transparent pointer-events-none z-10" />

      {/* Background Marquee Text (Moved to Top) */}
<div className="absolute top-1/7 left-0 w-full whitespace-nowrap opacity-[0.03] pointer-events-none z-0 select-none overflow-hidden pt-4">
  <motion.h1 
    className="font-outfit text-[3rem] sm:text-[5rem] md:text-[9rem] xl:text-[11rem] font-black text-white uppercase tracking-tighter m-0 inline-block leading-none"
    animate={{ x: [0, -1400] }}
    transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
  >
    MERN STACK • CREATIVE DEVELOPER • MERN STACK • CREATIVE DEVELOPER •
  </motion.h1>
</div>

      <div className="w-full max-w-[1200px] mx-auto px-5 lg:px-8 relative z-20">

        {/* 🏆 HEADING */}
        <div className="w-full text-center pt-4 pb-16 relative flex flex-col items-center justify-center">
          <h2 className="font-outfit text-[2.8rem] sm:text-[5rem] md:text-[5rem] font-black text-white tracking-tighter uppercase m-0 leading-none select-none flex items-center justify-center gap-4">
            ABOUT <span className="text-[#00C2FF]">ME</span>
          </h2>
          <div className="mt-6 w-16 h-[3px] bg-[#00C2FF] rounded-full shadow-[0_0_12px_#00C2FF]"></div>
        </div>

        {/* 🍱 NEW BALANCED BENTO GRID */}
        <div className="grid grid-cols-1 gap-5 relative md:grid-cols-3 md:grid-rows-[250px_270px] lg:gap-6">
          
          {/* 🆔 TOP-LEFT: IDENTITY BOX (Compact Column 1) */}
          <motion.div 
            className="group flex flex-col justify-end relative bg-[#0A0A0C] border border-white/[0.05] rounded-[32px] p-6 shadow-2xl hover:border-[#00C2FF]/30 transition-colors duration-500 pt-16" 
            whileHover={{ y: -5 }}
          >
            <CardBadge text="IDENTITY" dotClass="bg-[#00C2FF] shadow-[0_0_8px_#00C2FF]" borderClass="border-[#00C2FF]/20" bgClass="bg-[#00C2FF]/5" />
            <div className="mb-1 mt-auto relative z-10">
              <p className="font-jetbrains text-[15px] font-bold text-[#00C2FF] tracking-[0.15em] mb-1.5 uppercase">Mern Stack Developer</p>
              <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-white uppercase">Shivani Gujjar</h2>
            </div>
            <div className="mt-3 flex items-center gap-2.5 font-jetbrains text-[10px] font-black tracking-widest text-[#27C93F] uppercase relative z-10">
              <span className="w-2 h-2 bg-[#27C93F] rounded-full animate-ping shadow-[0_0_12px_#27C93F]"></span> Available For Work
            </div>
          </motion.div>

          {/* 🎓 TOP-MIDDLE: ACADEMIC TIMELINE BOX (Compact Column 2) */}
          <motion.div 
            className="group flex flex-col justify-end relative bg-[#0A0A0C] border border-white/[0.05] rounded-[32px] p-6 shadow-2xl hover:border-white/20 transition-colors duration-500 pt-16" 
            whileHover={{ y: -5 }}
          >
            <CardBadge text="ACADEMIC" dotClass="bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.6)]" borderClass="border-white/20" bgClass="bg-white/5" />
            <div className="flex flex-col gap-3 h-full justify-end relative z-10 mt-4">
              <div>
                <h4 className="font-outfit text-lg sm:text-xl font-bold text-white tracking-wide m-0">MCA <span className="text-white/40 font-light text-sm">@ LPU</span></h4>
                <p className="font-jetbrains text-[10px] text-[#00C2FF] mt-1 tracking-widest">2024 — 2026</p>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent"></div>
              <div>
                <h4 className="font-outfit text-base sm:text-lg font-bold text-white/70 tracking-wide m-0">BCA <span className="text-white/30 font-light text-xs">@ GGSIPU</span></h4>
                <p className="font-jetbrains text-[10px] text-white/30 mt-1 tracking-widest">2021 — 2023</p>
              </div>
            </div>
          </motion.div>

          {/* 🎯 RIGHT SIDE: MISSION BOX (Full Vertical Row Span 2) */}
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

          {/* 🟢 BOTTOM-LEFT: WIDE 2026 GITHUB ACTIVITY BOX (Spans 2 Columns Wide) */}
          <motion.div 
            className="group flex flex-col justify-between relative bg-[#0A0A0C] border border-white/[0.05] rounded-[32px] p-6 shadow-2xl hover:border-[#27C93F]/40 transition-colors duration-500 md:col-span-2 pt-16 overflow-hidden" 
            whileHover={{ y: -5 }}
          >
            <CardBadge text="LIVE CONTRIBUTIONS" dotClass="bg-[#27C93F] shadow-[0_0_8px_#27C93F]" borderClass="border-[#27C93F]/20" bgClass="bg-[#27C93F]/5" />
            
            <div className="my-auto pt-1 z-10 w-full flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-between mb-2 px-1">
                <span className="font-jetbrains text-[10px] text-white/60 uppercase tracking-widest flex items-center gap-1.5">
                  <VscGithubInverted className="text-xs text-white" /> 2026 COMMITS
                </span>
                <span className="font-jetbrains text-[9px] text-[#27C93F] font-bold tracking-wider">LIVE GITHUB API</span>
              </div>

              {/* Wide Calendar Container - Perfect Fit without scrolling */}
              <div className="w-full bg-[#050507] p-3 rounded-2xl border border-white/5 flex items-center justify-center overflow-x-auto scrollbar-none">
                <GitHubCalendar 
                  username="shivanigujjar"
                  year={2026}
                  theme={githubTheme}
                  fontSize={9}
                  blockSize={8.5}
                  blockMargin={3.5}
                  colorScheme="dark"
                />
              </div>
            </div>

            <div className="pt-2 border-t border-white/5 flex justify-between items-center font-jetbrains text-[9px] text-white/40 uppercase tracking-wider relative z-10">
              <span>Jan — Dec 2026</span>
              <span className="text-[#39d353]">Auto Synced</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;