import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Connect button — now matches the same sentence-case pill style as every other CTA on the site
const NavConnectButton = ({ text, href }) => {
  return (
    <a
      href={href}
      className="hidden lg:flex items-center justify-center h-[36px] px-5 rounded-lg font-medium text-[13px] bg-white text-black hover:bg-[#00C2FF] transition-colors duration-200"
    >
      {text}
    </a>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smart scroll: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMenuOpen) return;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[1100px] h-[58px] z-50 flex items-center bg-[#08080a]/80 backdrop-blur-md border border-white/[0.08] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-[180%]'
      }`}
    >

      {/* Scroll progress indicator */}
      <motion.div
        className="absolute top-0 left-6 right-6 h-[2px] bg-[#00C2FF] origin-[0%] z-51 rounded-full opacity-80"
        style={{ scaleX }}
      />

      <div className="w-full px-5 sm:px-6 flex justify-between items-center relative">

        <a href="#home" className="font-mono text-sm font-bold text-white tracking-wider">
          Shivani<span className="text-[#00C2FF]">.</span>
        </a>

        <div className={`fixed top-0 left-0 w-full h-screen bg-[#050507]/98 backdrop-blur-xl flex flex-col justify-center items-center transition-transform duration-300 z-40 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:backdrop-blur-none lg:translate-y-0 lg:flex-row lg:z-auto`}>
          <ul className="flex flex-col gap-8 text-center m-0 p-0 list-none lg:flex-row lg:gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.05] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <NavConnectButton href="#contact" text="Connect" />

          <button
            className="flex flex-col gap-1.5 bg-none border-none cursor-pointer z-50 relative lg:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-[2px] bg-white rounded-lg transition-transform duration-300 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-white rounded-lg transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-white rounded-lg transition-transform duration-300 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;