import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ label, title, color, highlights = [], index }) => {
  return (
    <div className="sticky top-20 sm:top-28 w-full mb-6 sm:mb-10">
      <motion.div 
        className="relative w-full bg-[#08090D] border border-white/10 rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden hover:border-white/20 transition-all duration-500 group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {/* Glow Accent Background */}
        <div 
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{ backgroundColor: color }}
        />

        {/* Top Header Row */}
        <div className="flex items-center justify-between border-b border-white/5 pb-4 sm:pb-5 mb-5 sm:mb-8">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          </div>

          <span 
            className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase px-3 py-1 rounded-full border bg-opacity-10"
            style={{ borderColor: `${color}40`, backgroundColor: `${color}10`, color: color }}
          >
            {label}
          </span>
        </div>

        {/* Section Heading */}
        <h3 className="font-outfit text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-5 sm:mb-8">
          {title.split(" ")[0]} <span style={{ color: color }}>{title.split(" ")[1]}</span>
        </h3>

        {/* Numbered Sub-Points Horizontal 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
          {(highlights || []).map((item, idx) => (
            <div 
              key={idx} 
              className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#030406] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span 
                  className="inline-block font-mono text-[11px] font-bold px-2 py-0.5 rounded-md bg-white/5 border border-white/10 mb-2 sm:mb-3"
                  style={{ color: color }}
                >
                  0{idx + 1}
                </span>
                <h4 className="font-outfit font-bold text-white text-sm sm:text-base uppercase tracking-wide mb-1.5">
                  {item.title}
                </h4>
                <p className="font-mono text-[10px] sm:text-[11px] text-white/40 leading-relaxed m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  );
};

export default SkillCard;