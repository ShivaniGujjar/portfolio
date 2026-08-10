import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // 🛠️ FORCE BACKGROUND TO PURE BLACK (bg-[#0A0A0C])
    <footer className="w-full bg-[#0A0A0C] px-[5%] py-12 md:py-8 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 text-center">
        
        {/* LEFT: Branding */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-[15px] font-mono">
          <span className="font-black text-base md:text-[0.8rem] text-white tracking-widest uppercase">
            Shivani Gujjar
          </span>
          <span className="hidden md:inline text-[#222]">|</span>
          <span className="text-[0.65rem] font-bold text-white/40 tracking-widest">
            ©{currentYear}
          </span>
        </div>

        {/* CENTER: Back To Top */}
        <div className="w-full md:w-auto flex justify-center">
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
            className="group w-[90%] max-w-[300px] md:w-auto bg-[#1A1A1E] border border-white/10 text-white font-mono text-[0.75rem] font-black uppercase tracking-widest px-8 py-4 md:py-2.5 rounded-xl md:rounded-md cursor-pointer flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white hover:text-black"
          >
            BACK TO TOP 
            <FiArrowUp className="text-base" />
          </button>
        </div>

        

      </div>
    </footer>
  );
};

export default Footer;