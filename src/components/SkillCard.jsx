import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ label, title, desc, icons, color, percentage, index }) => {
  // Config arrays for smooth sticky pile-up animation
  const topValues = ["120px", "160px", "200px"];
  const zIndices = [10, 11, 12]; 

  return (
    <motion.div 
      className="sticky w-[90%] md:w-full max-w-[1100px] mx-auto min-h-auto md:min-h-[320px] bg-[#0D0D0D] border border-white/8 rounded-2xl md:rounded-[32px] p-6 md:p-16 flex flex-col md:flex-row justify-between items-center overflow-hidden transition-all duration-400 mb-[10vh] md:mb-0"
      style={{ 
        '--accent': color,
        top: topValues[index] || "120px",
        zIndex: zIndices[index] || 10,
        boxShadow: "0 -40px 80px rgba(0, 0, 0, 0.95)"
      }}
      initial={{ opacity: 0, y: 30 }} // y shift thoda kam kiya taaki scroll snappy lage
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Margin trigger area optimize kiya
      transition={{ duration: 0.4, ease: "easeOut" }} // 🔥 REMOVED INDEX DELAY FOR INSTANT SMOOTHNESS
    >
      {/* Left Neon Glowing Accent Bar */}
      <div 
        className="absolute left-0 top-0 w-1.5 h-full transition-all duration-300"
        style={{ 
          background: 'var(--accent)',
          boxShadow: '0 0 25px var(--accent)' 
        }} 
      />

      {/* Content Text Matrix */}
      <div className="flex-[1.2] flex flex-col gap-3 md:gap-[1.2rem] w-full text-center md:text-left items-center md:items-start">
        <span className="font-mono text-[0.55rem] md:text-[0.7rem] font-extrabold text-[var(--accent)] tracking-widest bg-white/3 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/5 w-fit">
          {label}
        </span>
        
        <h3 className="text-2xl md:text-[clamp(2rem,4vw,3.2rem)] font-black text-white tracking-tighter leading-none m-0">
          {title}
        </h3>
        
        <p className="text-[#888] text-[0.85rem] md:text-xl max-w-[480px] leading-relaxed md:leading-normal">
          {desc}
        </p>
        
        {/* Progress Bar Track */}
        <div className="flex items-center gap-2.5 md:gap-5 mt-2 md:mt-4 w-full max-w-[450px]">
          <div className="flex-1 h-1.25 md:h-2 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full" 
              style={{ 
                background: color,
                boxShadow: `0 0 15px ${color}`
              }} 
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              transition={{ duration: 1.2, ease: "power2.out" }} // 🔥 REMOVED BAR DELAY
            />
          </div>
          <span className="font-mono text-[0.75rem] md:text-base font-black text-white">
            {percentage}%
          </span>
        </div>
      </div>

      {/* Icons Alignment Wrapper */}
      <div className="flex-1 flex justify-center md:justify-end gap-3 md:gap-5 mt-4 md:mt-0 w-full">
        {icons.map((icon, i) => (
          <motion.div 
            key={i} 
            className="bg-white/3 border border-white/5 p-2.5 md:p-6 rounded-xl md:rounded-2xl text-[1.8rem] md:text-[3.5rem] flex items-center justify-center text-white transition-all duration-300"
            whileHover={{ 
              y: -10, 
              color: color, 
              borderColor: color,
              boxShadow: `0 10px 20px rgba(0, 0, 0, 0.5)`
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;