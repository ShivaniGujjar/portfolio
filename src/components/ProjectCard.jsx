import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineExternalLink, HiCode, HiPlay, HiX } from 'react-icons/hi';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiSocketdotio, 
  SiRedux, SiTailwindcss, SiFramer, SiJsonwebtokens, 
  SiLangchain, SiGoogle, SiOpenai, SiMongoose, SiRedis, SiSupabase
} from 'react-icons/si';
import { LuBrainCircuit } from 'react-icons/lu';

const techData = {
  'REACT': { icon: <SiReact />, color: '#61DAFB' },
  'NODE.JS': { icon: <SiNodedotjs />, color: '#339933' },
  'MONGODB': { icon: <SiMongodb />, color: '#47A248' },
  'MONGOOSE': { icon: <SiMongoose />, color: '#880000' },
  'EXPRESS': { icon: <SiExpress />, color: '#ffffff' },
  'SOCKET.IO': { icon: <SiSocketdotio />, color: '#010101' },
  'REDIS': { icon: <SiRedis />, color: '#DC382D' },
  'SUPABASE': { icon: <SiSupabase />, color: '#3ECF8E' },
  'REDUX': { icon: <SiRedux />, color: '#764ABC' },
  'TAILWIND': { icon: <SiTailwindcss />, color: '#06B6D4' },
  'JWT': { icon: <SiJsonwebtokens />, color: '#FB015B' },
  'DND': { icon: <HiCode />, color: '#FFF' },
  'FRAMER': { icon: <SiFramer />, color: '#E10098' },
  'LANGCHAIN': { icon: <SiLangchain />, color: '#1C3C3C' },
  'GENAI': { icon: <LuBrainCircuit />, color: '#FF6C37' },
  'GEMINI': { icon: <SiGoogle />, color: '#4285F4' },    
  'MISTRAL': { icon: <SiOpenai />, color: '#FF5C00' }
};

const ProjectCard = ({ 
  id = "beam", 
  title = "BEAM", 
  description = "Automated deployment engine that compiles and hosts frontend apps directly from public GitHub repositories.", 
  techStack = ["REACT", "EXPRESS", "SOCKET.IO", "REDIS", "SUPABASE"], 
  imageSrc = "/beam-thumbnail.png", 
  repoLink = "https://github.com/ShivaniGujjar/beam", 
  liveLink = "https://beam-sable.vercel.app/",
  videoSrc,
  stats = [
    { label: "ARCH", val: "MICROSERVICES", color: "#61DAFB" },
    { label: "LOGS", val: "REAL-TIME", color: "#FF5F56" },
    { label: "STATUS", val: "BUILD READY", color: "#27C93F" }
  ]
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="group flex flex-col justify-start relative bg-[#050505] border border-white/[0.08] rounded-[24px] overflow-hidden max-w-[420px] w-full shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
        whileHover={{ y: -4 }}
      >
        {/* Terminal Header */}
        <div className="px-5 py-3 flex justify-between items-center border-b border-white/[0.05]">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
          </div>
          <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase">system_v1.0</span>
        </div>

        {/* Thumbnail Image */}
        <div className="p-3">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full rounded-xl aspect-video object-cover brightness-90 group-hover:brightness-100 transition-all duration-500" 
          />
        </div>

        {/* Body */}
        <div className="px-5 pb-5 pt-1 flex flex-col items-start flex-grow">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {techStack.map((tech, i) => {
              const techKey = tech.toUpperCase();
              const config = techData[techKey] || { icon: <LuBrainCircuit />, color: '#00C2FF' };
              return (
                <span key={i} className="flex items-center gap-1 px-2 py-0.5 bg-white/[0.03] border border-white/[0.05] rounded-md text-[9px] font-mono font-bold tracking-widest uppercase text-white/50">
                  <span style={{ color: config.color }}>{config.icon}</span>
                  {tech}
                </span>
              );
            })}
          </div>

          <h3 className="font-outfit text-xl font-black text-white tracking-tight mb-1.5 uppercase">{title}</h3>
          <p className="font-mono text-xs text-[#777] leading-relaxed mb-4 line-clamp-2">{description}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 w-full bg-[#0A0A0A] p-3 rounded-xl border border-white/[0.03] gap-2 mb-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-[7px] font-mono font-black tracking-[0.2em] text-[#444] uppercase">{stat.label}</span>
                <strong className="font-mono text-[9px] font-bold truncate" style={{ color: stat.color }}>{stat.val}</strong>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 w-full mt-auto">
            {liveLink ? (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex-1 bg-white/5 border border-white/10 hover:bg-white hover:text-black py-2.5 rounded-lg font-mono font-bold text-[11px] tracking-widest uppercase flex justify-center items-center gap-2 transition-all text-white no-underline"
              >
                Run App <HiOutlineExternalLink size={14} />
              </a>
            ) : (
              <button 
                onClick={() => setIsVideoOpen(true)}
                className="flex-1 bg-white/5 border border-white/10 hover:bg-white hover:text-black py-2.5 rounded-lg font-mono font-bold text-[11px] tracking-widest uppercase flex justify-center items-center gap-2 transition-all text-white cursor-pointer"
              >
                Watch Demo <HiPlay size={14} className="text-[#00C2FF]" />
              </button>
            )}

            <a 
              href={repoLink} 
              target="_blank" 
              rel="noreferrer" 
              title="Source Code"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-[#27C93F] hover:border-[#27C93F] hover:text-black transition-all text-white shrink-0"
            >
              <HiCode size={16} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* PORTAL BACKDROP - RENDERED AT BODY LEVEL */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isVideoOpen && (
            <div 
              onClick={() => setIsVideoOpen(false)}
              className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-pointer m-0"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-[#0A0A0C] border border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-default"
              >
                {/* Window Header */}
                <div className="px-5 py-3 bg-[#121215] border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                    <span className="font-mono text-xs text-white/60 ml-2">{title} — Demo Preview</span>
                  </div>
                  <button 
                    onClick={() => setIsVideoOpen(false)}
                    className="w-7 h-7 rounded-lg bg-white/10 text-white hover:bg-[#FF5F56] flex items-center justify-center transition-all cursor-pointer border border-white/10"
                  >
                    <HiX size={16} />
                  </button>
                </div>

                {/* Video Player Stream */}
                <div className="w-full aspect-video bg-black flex items-center justify-center">
                  <video 
                    src={videoSrc} 
                    controls 
                    autoPlay 
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default ProjectCard;