import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink, HiCode } from 'react-icons/hi';

import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiSocketdotio, 
  SiRedux, SiTailwindcss, SiFramer, SiJsonwebtokens, 
  SiLangchain, SiGoogle, SiOpenai, SiMarkdown, SiAxios,
  SiMongoose
} from 'react-icons/si';

import { LuSearchCode, LuBrainCircuit } from 'react-icons/lu';

const techData = {
  'REACT': { icon: <SiReact />, color: '#61DAFB' },
  'NODE.JS': { icon: <SiNodedotjs />, color: '#339933' },
  'MONGODB': { icon: <SiMongodb />, color: '#47A248' },
  'EXPRESS': { icon: <SiExpress />, color: '#ffffff' },
  'REDUX': { icon: <SiRedux />, color: '#764ABC' },
  'TAILWIND': { icon: <SiTailwindcss />, color: '#06B6D4' },
  'JWT': { icon: <SiJsonwebtokens />, color: '#FB015B' },
  'AXIOS': { icon: <SiAxios />, color: '#5A29E4' },
  
  'LANGCHAIN': { icon: <SiLangchain />, color: '#1C3C3C' },
  'GEMINI': { icon: <SiGoogle />, color: '#4285F4' },    
  'MISTRAL': { icon: <SiOpenai />, color: '#FF5C00' },   
  'TAVILY': { icon: <LuSearchCode />, color: '#5F57FF' },
  'SOCKET.IO': { icon: <SiSocketdotio />, color: '#ffffff' },
  'MARKDOWN': { icon: <SiMarkdown />, color: '#ffffff' },
  'FRAMER': { icon: <SiFramer />, color: '#E10098' },
  'MONGOOSE': { icon: <SiMongoose />, color: '#880000' }
};

const ProjectCard = ({ id, title, description, techStack, imageSrc, repoLink, liveLink, themeColor }) => {
  return (
    <motion.div 
      // 🛠️ Mapped cubic-bezier curve to standard bracket notation for seamless transition execution
      className="group flex flex-col justify-start relative bg-gradient-to-br from-[#0F0F0F] to-[#080808] border border-white/5 rounded-3xl overflow-hidden max-w-[420px] mx-auto w-full shadow-[inset_0_0_20px_rgba(255,255,255,0.01)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.2,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
      style={{ '--accent': themeColor }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* 🖥️ TERMINAL HEADER */}
      <div className="px-[18px] py-2.5 bg-[#0D0D0D] flex justify-between items-center border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-1.75 h-1.75 rounded-full bg-[#FF5F56]" />
          <span className="w-1.75 h-1.75 rounded-full bg-[#FFBD2E]" />
          <span className="w-1.75 h-1.75 rounded-full bg-[#27C93F]" />
        </div>
        <span className="font-mono text-[0.5rem] text-[#333] font-extrabold tracking-widest">BUILD_V{id}.LOG</span>
      </div>

      {/* 🖼️ IMAGE CONTAINER */}
      <div className="relative p-3">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full rounded-xl aspect-video object-cover filter grayscale-50 brightness-85 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-500" 
          disabled="true"
        />
        <div className="absolute top-[22px] right-[22px] bg-black/90 px-2.5 py-1 rounded-md text-[0.5rem] font-black flex items-center gap-1.5 border border-white/10 text-white">
          <span className="w-1.25 h-1.25 bg-[#FF3E3E] rounded-full shadow-[0_0_8px_#FF3E3E] animate-pulse duration-1000" /> LIVE
        </div>
      </div>

      {/* CARD BODY CONTENT */}
      <div className="px-[22px] pb-5 pt-3 flex flex-col items-start flex-grow w-full">
        
        {/* 🧱 TECH TAG MATRIX */}
        <div className="flex flex-wrap gap-1.5 mb-2 mt-0.5 p-0">
          {techStack.map((tech, i) => {
            const key = tech.toUpperCase();
            const techInfo = techData[key];
            const currentBrandColor = techInfo?.color || '#888';
            
            return (
              <span 
                key={i} 
                className="text-white/60 md:text-[#999] text-[0.6rem] md:text-[0.62rem] font-bold bg-white/5 md:bg-white/3 border border-white/10 px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-all duration-300 group-hover:text-white group-hover:bg-black/40"
                style={{ 
                  '--brand-color': currentBrandColor,
                  borderColor: `var(--brand-color, rgba(255,255,255,0.1))`
                }}
              >
                <span 
                  className="text-xs flex items-center"
                  style={{ 
                    color: 'var(--brand-color)',
                    filter: 'drop-shadow(0 0 4px var(--brand-color))' 
                  }}
                >
                  {techInfo?.icon || <LuBrainCircuit />}
                </span>
                {tech}
              </span>
            );
          })}
        </div>

        {/* TYPOGRAPHY */}
        <h3 className="text-2xl font-black text-white tracking-tighter text-left mb-0.5 mt-2">
          {title}
        </h3>
        <p className="text-sm md:text-[0.85rem] text-[#777] md:text-[#666] leading-relaxed md:leading-tight text-left mb-4">
          {description}
        </p>

        {/* 📊 PERFORMANCE READOUT TRACK */}
        <div className="grid grid-cols-3 w-full bg-white/5 px-3.5 py-2.5 md:p-3.5 mb-3 rounded-xl border border-white/5 gap-2 md:gap-0">
          <div className="flex flex-col items-start gap-1">
            <span className="text-[0.5rem] text-[#444] md:text-[#333] font-black tracking-widest leading-none">PERFORMANCE</span>
            <strong className="font-mono text-[0.7rem] md:text-[0.75rem] text-[#27C93F] font-black leading-none">98.4%</strong>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-[0.5rem] text-[#444] md:text-[#333] font-black tracking-widest leading-none">LOAD</span>
            <strong className="font-mono text-[0.7rem] md:text-[0.75rem] text-white font-black leading-none">OPTIMIZED</strong>
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-[0.5rem] text-[#444] md:text-[#333] font-black tracking-widest leading-none">STATUS</span>
            <strong className="font-mono text-[0.7rem] md:text-[0.75rem] text-[#27C93F] font-black leading-none flex items-center gap-1.5 whitespace-nowrap m-0">
              <span className="w-1.5 h-1.5 bg-[#27C93F] rounded-full shadow-[0_0_10px_#27C93F] flex-shrink-0" /> DEPLOYED
            </strong>
          </div>
        </div>

        {/* 🕹️ CTAs GROUP ACTION TARGETS */}
        <div className="flex gap-2.5 w-full mt-auto">
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noreferrer" 
            className="flex-1 bg-transparent border border-[#999] px-3.5 py-3 md:p-3 text-white rounded-lg font-mono font-extrabold text-[0.8rem] md:text-[0.75rem] tracking-wider flex justify-center items-center gap-2 decoration-none transition-all duration-300 hover:bg-white hover:text-[#080808] hover:border-[var(--accent)]"
          >
            RUN APP <HiOutlineExternalLink className="text-sm" />
          </a>
          <a 
            href={repoLink} 
            target="_blank" 
            rel="noreferrer" 
            className="w-[50px] h-[50px] md:w-12 md:h-12 rounded-lg bg-transparent border border-white/15 text-[#27C93F] flex items-center justify-center font-size-[1.2rem] decoration-none transition-all duration-300 hover:bg-[#27C93F] hover:border-[#27C93F] hover:text-white"
          >
            <HiCode />
          </a>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;