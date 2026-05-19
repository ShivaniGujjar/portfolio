import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // 1. MAIN FOOTER BOX WRAPPER
    <footer className="w-full bg-brand-black px-[5%] py-12 md:py-8 border-t border-white/5 transition-all duration-400">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 text-center">
        
        {/* LEFT: Branding & Registry Metadata */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-[15px] font-mono">
          <span className="font-black text-base md:text-[0.8rem] text-white tracking-widest md:tracking-wider">
            SHIVANI GUJJAR
          </span>
          <span className="hidden md:inline text-[#222] text-[0.8rem]">|</span>
          <span className="text-[0.65rem] font-bold text-[#444] tracking-widest">
            ©{currentYear}
          </span>
        </div>

        {/* CENTER: Back To Top Interactive Terminal Trigger */}
        <div className="w-full md:w-auto flex justify-center">
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
            className="group w-[90%] max-w-[300px] md:w-auto bg-[#DDD] md:bg-[#EEEEEE] border border-white/10 md:border-white/8 text-black font-mono text-[0.75rem] md:text-[0.7rem] font-black uppercase tracking-wider md:tracking-widest px-6 py-3.5 md:py-2.5 rounded-xl md:rounded-md cursor-pointer flex items-center justify-center gap-2.5 transition-all duration-300 hover:-translate-y-0.75 hover:bg-brand-orange hover:border-brand-orange hover:text-white hover:shadow-[0_5px_15px_rgba(246,128,72,0.15)]"
          >
            BACK TO TOP 
            <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-0.5 text-base md:text-sm" />
          </button>
        </div>

        {/* RIGHT: Operational Status Monitor */}
        <div className="w-full md:w-auto flex justify-center">
          <div className="flex items-center gap-2.5 bg-[#27C93F]/3 border border-[#27C93F]/10 px-6 py-2.5 md:px-3.5 md:py-1.5 rounded-full md:rounded-sm">
            <span className="w-1.5 h-1.5 bg-[#27C93F] rounded-full shadow-[0_0_10px_rgba(39,201,63,0.4)] animate-pulse duration-1000" />
            <span className="font-mono text-[0.65rem] font-black text-[#27C93F] tracking-wider">
              SYSTEM_OPERATIONAL
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;