import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050507] border-t border-white/[0.05] px-5 sm:px-12 py-8">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-xs">

        <div className="flex items-center gap-2 text-white/40">
          <span className="font-medium text-white/80">
            Shivani Gujjar
          </span>
          <span className="text-white/20">•</span>
          <span className="text-white/35">
            © {currentYear}
          </span>
        </div>

        <div className="text-white/35 flex items-center gap-1.5">
          <span>Built with</span>
          <span className="text-[#00C2FF]">React</span>
          <span>&</span>
          <span className="text-[#00C2FF]">Tailwind</span>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group px-4 py-2 bg-white/[0.03] border border-white/[0.08] hover:border-white/20 text-white/50 hover:text-white rounded-lg transition-colors duration-200 flex items-center gap-2 font-medium cursor-pointer"
        >
          <span>Back to top</span>
          <FiArrowUp className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5" />
        </button>

      </div>
    </footer>
  );
};

export default Footer;