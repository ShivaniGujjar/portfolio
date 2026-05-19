import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiJavascript 
} from 'react-icons/si';

const About = () => {
  const boxHover = {
    hover: { 
      y: -8, 
      borderColor: "rgba(0, 194, 255, 0.4)", 
      backgroundColor: "rgba(0, 194, 255, 0.02)",
      transition: { duration: 0.3, ease: "easeOut" } 
    }
  };

  return (
    <section className="w-full max-w-[1250px] mx-auto px-8 pb-4 relative bg-brand-black pt-16 md:pt-28 mt-0" id="about">
      
      {/* ⚡ Upper Separator from Home */}
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent md:hidden" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#00C2FF]/30 to-transparent md:hidden" />

      {/* 🏆 CENTERED HEADING LAYER WITH INTEGRATED ENHANCED MARQUEE */}
      <div className="w-full text-center pt-4 pb-12 z-10 relative md:pt-16 md:mb-8 flex flex-col items-center justify-center">
        
        {/* 🌀 Background Marquee - 100% Balanced Scaled Layout Wrapper */}
        {/* 🛠️ Adjusted text-[2.2rem] on mobile to prevent clipping or dynamic overlapping noise */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen min-w-full whitespace-nowrap opacity-[0.035] pointer-events-none z-0 select-none overflow-hidden">
          <motion.h1 
            className="text-[2.2rem] sm:text-[4.5rem] md:text-[11rem] lg:text-[13rem] font-black text-white uppercase tracking-tighter m-0 display-inline-block"
            animate={{ x: [0, -1400] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            MERN STACK • CREATIVE DEVELOPER • MCA GRADUATE • MERN STACK • CREATIVE DEVELOPER • MCA GRADUATE • MERN STACK • CREATIVE DEVELOPER • MCA GRADUATE •
          </motion.h1>
        </div>

        {/* Foreground Header Text */}
        {/* 🛠️ FIXED OVERFLOW CLIPPING: Applied leading-[1.15] and loaded safety vertical breathing padding py-2 */}
        <h2 className="text-[2.5rem] sm:text-[3.2rem] md:text-[clamp(2.2rem,6vw,4rem)] font-black text-white tracking-tighter uppercase m-0 leading-[1.15] py-2 relative z-10 select-none">
          ABOUT <span className="text-brand-blue-bright drop-shadow-[0_0_20px_rgba(0,194,255,0.2)]">ME</span>
        </h2>
        <div className="w-[50px] h-1.5 bg-brand-blue-bright mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(0,194,255,0.4)] relative z-10"></div>
      </div>

      {/* 🍱 BENTO GRID */}
      <div className="grid grid-cols-1 gap-[30px] px-2.5 relative z-2 lg:grid-cols-3 lg:grid-rows-[260px_260px] lg:gap-5 lg:px-0">
        
        {/* 🆔 IDENTITY BOX */}
        <motion.div 
          className="group flex flex-col justify-end relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-[1.8rem] min-h-[220px] shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-all duration-300 lg:col-span-2 lg:bg-[#080808] lg:border-white/5 lg:rounded-[32px] lg:p-9 lg:min-h-0" 
          variants={boxHover} 
          whileHover="hover"
        >
          <span className="absolute top-5 left-5 sm:top-[30px] sm:left-[35px] flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-mono text-[0.55rem] font-bold text-[#888] tracking-widest uppercase transition-all duration-300 before:content-[''] before:w-1.25 before:h-1.25 before:bg-brand-blue-bright before:rounded-full before:shadow-[0_0_8px_#00C2FF] group-hover:bg-[rgba(0,194,255,0.1)] group-hover:border-[rgba(0,194,255,0.3)] group-hover:text-white">
            IDENTITY
          </span>
          <div className="mb-5">
            <p className="font-mono text-[0.8rem] sm:text-base md:text-2xl text-brand-blue-bright font-extrabold tracking-widest mb-2 lg:mb-1">
              MERN STACK DEVELOPER
            </p>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[3.5rem] font-black leading-[1.1] lg:leading-[0.9] tracking-tight sm:tracking-tighter text-white m-0">
              SHIVANI GUJJAR
            </h2>
          </div>
          <div className="mt-2.5 text-[#27C93F] flex items-center gap-2.5 font-black text-[0.75rem]">
            <span className="w-1.75 h-1.75 bg-[#27C93F] rounded-full shadow-[0_0_10px_#27C93F] animate-ping duration-1000"></span> 
            AVAILABLE FOR WORK
          </div>
        </motion.div>

        {/* 🎯 MISSION BOX */}
        <motion.div 
          className="group flex flex-col justify-center items-center relative bg-[#FFB800] text-black border-none rounded-3xl p-[1.8rem] min-h-[220px] text-center shadow-[0_10px_30px_rgba(255,184,0,0.15)] lg:row-span-2 lg:rounded-[32px] lg:p-9 lg:min-h-0" 
          variants={boxHover} 
          whileHover={{ y: -8, scale: 1.01 }}
        >
          <span className="absolute top-5 left-5 sm:top-[30px] sm:left-[35px] flex items-center gap-2 px-3 py-1.5 bg-black/5 border border-black/10 rounded-full font-mono text-[0.55rem] font-bold text-black/50 tracking-widest uppercase before:content-[''] before:w-1.25 before:h-1.25 before:bg-black before:rounded-full group-hover:bg-white/5 group-hover:text-[#aaa]">
            MISSION
          </span>
          <p className="text-[1.4rem] sm:text-[1.6rem] lg:text-[2.2rem] font-black leading-1.3 lg:leading-[1.1] text-black">
            Developing <span className="bg-black text-[#FFB800] px-2 py-0.5 rounded-md">Scalable</span> MERN solutions with pixel-perfect precision.
          </p>
        </motion.div>

        {/* 🎓 ACADEMIC BOX */}
        <motion.div 
          className="group flex flex-col justify-end relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-[1.8rem] min-h-[200px] shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-all duration-300 lg:bg-[#080808] lg:border-white/5 lg:rounded-[32px] lg:p-9 lg:min-h-0" 
          variants={boxHover} 
          whileHover="hover"
        >
          <span className="absolute top-5 left-5 sm:top-[30px] sm:left-[35px] flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-mono text-[0.55rem] font-bold text-[#888] tracking-widest uppercase transition-all duration-300 before:content-[''] before:w-1.25 before:h-1.25 before:bg-brand-blue-bright before:rounded-full group-hover:bg-[rgba(0,194,255,0.1)] group-hover:border-[rgba(0,194,255,0.3)] group-hover:text-white">
            ACADEMIC
          </span>
          <div>
            <h4 className="text-[1.8rem] font-black text-white m-0">MCA GRADUATE</h4>
            <p className="text-[#555] text-[0.9rem] mt-1">2026 Batch • IT Specialization</p>
            <div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 border border-[#27C93F] text-[#27C93F] rounded-full text-[0.65rem] font-black">
              CREDENTIALS_VERIFIED
            </div>
          </div>
        </motion.div>

        {/* 🛠️ TECH STACK BOX */}
        <motion.div 
          className="group flex flex-col justify-center items-center relative bg-[#0A0A0C] border border-white/10 rounded-3xl p-8 min-h-[220px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] transition-all duration-500 hover:border-brand-blue-bright/40 lg:bg-[#080808] lg:border-white/5 lg:rounded-[32px] lg:p-9 lg:min-h-0" 
          variants={boxHover} 
          whileHover="hover"
        >
          <span className="absolute top-5 left-5 sm:top-[30px] sm:left-[35px] flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-mono text-[0.55rem] font-bold text-[#888] tracking-widest uppercase transition-all duration-300 before:content-[''] before:w-1.25 before:h-1.25 before:bg-brand-blue-bright before:rounded-full before:shadow-[0_0_8px_#00C2FF] group-hover:bg-[rgba(0,194,255,0.1)] group-hover:border-[rgba(0,194,255,0.3)] group-hover:text-white">
            TECH-STACK
          </span>

          <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-bright/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 mt-8 relative z-10 sm:gap-x-16 lg:mt-10">
            <motion.div className="flex items-center justify-center text-[3.5rem] transition-all duration-300 hover:scale-115" style={{ color: '#61DAFB', filter: 'drop-shadow(0 0 15px rgba(97, 218, 251, 0.45))' }} whileHover={{ rotate: 15 }}><SiReact /></motion.div>
            <motion.div className="flex items-center justify-center text-[3.5rem] transition-all duration-300 hover:scale-115" style={{ color: '#339933', filter: 'drop-shadow(0 0 15px rgba(51, 153, 51, 0.45))' }} whileHover={{ rotate: -15 }}><SiNodedotjs /></motion.div>
            <motion.div className="flex items-center justify-center text-[3.5rem] transition-all duration-300 hover:scale-115" style={{ color: '#47A248', filter: 'drop-shadow(0 0 15px rgba(71, 162, 72, 0.45))' }} whileHover={{ rotate: 15 }}><SiMongodb /></motion.div>
            <motion.div className="flex items-center justify-center text-[3.5rem] transition-all duration-300 hover:scale-115" style={{ color: '#F7DF1E', filter: 'drop-shadow(0 0 15px rgba(247, 223, 30, 0.45))' }} whileHover={{ rotate: -15 }}><SiJavascript /></motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default About;