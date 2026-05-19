import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Jackpot Effect Button Component
const NavConnectButton = ({ text, href, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group hidden lg:block h-[40px] w-[140px] overflow-hidden rounded-lg font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 bg-white text-black hover:bg-[#FF6C37] hover:text-white"
    >
      <div className="flex flex-col transition-transform duration-500 [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[40px]">
        <span className="flex h-[40px] items-center justify-center">{text}</span>
        <span className="flex h-[40px] items-center justify-center text-white">{text}</span>
      </div>
    </a>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const navItems = [{ name: 'HOME' }, { name: 'ABOUT' },  { name: 'PROJECTS' }, { name: 'CONTACT' }];

  return (
    <nav className="fixed top-2.5 left-1/2 -translate-x-1/2 w-[92%] h-[60px] z-50 flex items-center bg-black/80 backdrop-blur-[15px] border border-white/10 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 lg:top-3.5 lg:w-[95%] lg:max-w-[1400px] lg:h-[70px] lg:rounded-full">
      <motion.div className="absolute top-0 left-5 right-5 h-[2px] bg-[#FF6C37] origin-[0%] z-51 rounded-full" style={{ scaleX }} />
      
      <div className="w-full px-[1.2rem] lg:px-8 flex justify-between items-center">
        <a href="#home" className="text-[1.1rem] font-[950] text-white tracking-tight">
          DEVELOPER<span className="text-[#00C2FF]">.</span>
        </a>
        
        <div className={`fixed top-0 left-0 w-full h-screen bg-[#050508]/98 backdrop-blur-[20px] flex flex-col justify-center items-center transition-transform duration-500 [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] z-40 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:backdrop-blur-none lg:translate-y-0 lg:flex-row lg:z-auto`}>
          <ul className="flex flex-col gap-8 text-center m-0 p-0 list-none lg:flex-row lg:gap-1.5">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={`#${item.name.toLowerCase()}`} 
                  className="group block h-[50px] overflow-hidden relative lg:h-[34px] lg:px-4" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex flex-col transition-transform duration-500 [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[50px] lg:group-hover:-translate-y-[34px]">
                    <span className="h-[50px] flex items-center justify-center text-2xl font-extrabold text-white/60 uppercase tracking-wider lg:text-xs lg:h-[34px]">{item.name}</span>
                    <span className="h-[50px] flex items-center justify-center text-2xl font-extrabold text-[#FF6C37] uppercase tracking-wider lg:text-xs lg:h-[34px]">{item.name}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <NavConnectButton href="#contact" text="LET'S CONNECT" />
          <button className="flex flex-col gap-1.5 bg-none border-none cursor-pointer z-50 relative lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            <span className={`w-6 h-[2px] bg-white rounded-full transition-transform duration-300 ${isMenuOpen ? 'translate-y-[8px] rotate-45' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-white rounded-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-white rounded-full transition-transform duration-300 ${isMenuOpen ? '-translate-y-[8px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;