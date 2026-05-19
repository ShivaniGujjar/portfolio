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
  'DND': { icon: <HiCode />, color: '#FFF' },
  'FRAMER': { icon: <SiFramer />, color: '#E10098' },
  'LANGCHAIN': { icon: <SiLangchain />, color: '#1C3C3C' },
  'GEMINI': { icon: <SiGoogle />, color: '#4285F4' },    
  'MISTRAL': { icon: <SiOpenai />, color: '#FF5C00' }
};

const ProjectCard = ({ id, title, description, techStack, imageSrc, repoLink, liveLink, themeColor }) => {
  return (
    <motion.div 
      className="group flex flex-col justify-start relative bg-[#050505] border border-white/[0.08] rounded-[24px] overflow-hidden max-w-[420px] w-full shadow-2xl transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]"
    >
      {/* Terminal Header */}
      <div className="px-5 py-3 flex justify-between items-center border-b border-white/[0.05]">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
          <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
          <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
        </div>
        <span className="font-jetbrains text-[8px] text-[#333] font-bold tracking-[0.2em]">BUILD_V{id}.LOG</span>
      </div>

      {/* Image */}
      <div className="p-3">
        <img src={imageSrc} alt={title} className="w-full rounded-xl aspect-video object-cover brightness-90 group-hover:brightness-100 transition-all duration-500" />
      </div>

      {/* Body */}
      <div className="px-5 pb-5 pt-1 flex flex-col items-start flex-grow">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {techStack.map((tech, i) => (
            <span key={i} className="flex items-center gap-1 px-2 py-0.5 bg-white/[0.03] border border-white/[0.05] rounded-md text-[9px] font-bold tracking-widest uppercase text-white/50">
              <span style={{ color: techData[tech.toUpperCase()]?.color }}>{techData[tech.toUpperCase()]?.icon || <LuBrainCircuit />}</span>
              {tech}
            </span>
          ))}
        </div>

        <h3 className="font-outfit text-xl font-black text-white tracking-tight mb-1.5 uppercase">{title}</h3>
        <p className="font-outfit text-xs text-[#777] leading-relaxed mb-4 line-clamp-2">{description}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 w-full bg-[#0A0A0A] p-3 rounded-xl border border-white/[0.03] gap-2 mb-4">
          {[
            { label: "PERF", val: "98.4%", color: "#27C93F" },
            { label: "LOAD", val: "OPTIMIZED", color: "#FFF" },
            { label: "STATUS", val: "DEPLOYED", color: "#27C93F" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              <span className="text-[7px] font-black tracking-[0.2em] text-[#333] uppercase">{stat.label}</span>
              <strong className="font-mono text-[10px] font-bold" style={{ color: stat.color }}>{stat.val}</strong>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 w-full mt-auto">
          <a href={liveLink} target="_blank" rel="noreferrer" className="flex-1 bg-white/5 border border-white/10 hover:bg-white hover:text-black py-2 rounded-lg font-bold text-[11px] tracking-widest uppercase flex justify-center items-center gap-2 transition-all">
            Run App <HiOutlineExternalLink size={12} />
          </a>
          <a href={repoLink} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-[#27C93F] hover:border-[#27C93F] transition-all">
            <HiCode size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;