import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ label, title, color, techList, features }) => {
  return (
    <motion.div
      className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-colors duration-300 hover:border-white/[0.15]"
    >
      <div>
        {/* Top header — dot instead of 01/02/03, these three aren't a sequence */}
        <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/[0.06] text-xs">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-white/40">{label}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-white/95 tracking-tight mb-6">
          {title}
        </h3>

        <div className="space-y-2 mb-8">
          {features.map((feat, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-[13px] text-white/65"
            >
              <span>{feat.name}</span>
              <span
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] shrink-0"
                style={{ color: color }}
              >
                {feat.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/[0.06]">
        <span className="text-[11px] text-white/35 block mb-2.5">
          Tech stack
        </span>
        <div className="flex flex-wrap gap-1.5">
          {techList.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] text-white/55 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default SkillCard;