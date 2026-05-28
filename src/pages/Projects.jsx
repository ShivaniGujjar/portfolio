import React from 'react';
import { FiExternalLink, FiCode } from 'react-icons/fi';

const ProjectCard = ({ title, description, techStack, imageSrc, repoLink, liveLink, themeColor }) => {
  return (
    <div className="group relative bg-[#0A0A0C] border border-white/[0.05] rounded-[32px] p-6 hover:border-[#00C2FF]/30 transition-all duration-500 flex flex-col h-full shadow-2xl">
      
      {/* Browser-style Header */}
      <div className="flex gap-1.5 mb-4 opacity-50">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
      </div>

      {/* Image Container */}
      <div className="w-full h-[200px] rounded-2xl mb-6 border border-white/5 overflow-hidden relative group-hover:border-white/10 transition-colors">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">{description}</p>

      {/* Tech Stack Chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {techStack.map((tech, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-white/60 tracking-wider">
            {tech.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Metrics Footer */}
      <div className="grid grid-cols-3 gap-2 mb-6 border-t border-white/5 pt-6">
        <div className="text-center">
          <p className="text-[9px] uppercase text-white/30 mb-1">Perf</p>
          <p className="text-[#27C93F] font-bold text-xs">98.4%</p>
        </div>
        <div className="text-center border-l border-white/5">
          <p className="text-[9px] uppercase text-white/30 mb-1">Load</p>
          <p className="text-white font-bold text-xs">OPTIMIZED</p>
        </div>
        <div className="text-center border-l border-white/5">
          <p className="text-[9px] uppercase text-white/30 mb-1">Status</p>
          <p style={{ color: themeColor }} className="font-bold text-xs">DEPLOYED</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <a 
          href={liveLink} 
          target="_blank" 
          rel="noreferrer"
          className="flex-1 py-3 rounded-xl bg-white text-black font-bold text-[10px] hover:bg-[#FF6C37] hover:text-white transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
        >
          Run App <FiExternalLink />
        </a>
        <a 
          href={repoLink}
          target="_blank" 
          rel="noreferrer"
          className="px-4 rounded-xl border border-white/10 hover:border-white/30 transition-all flex items-center justify-center"
        >
          <FiCode className="text-white/60" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;