import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

// Connect button — now matches the same sentence-case pill style as every other CTA on the site
const NavConnectButton = ({ text, href }) => {
  return (
    <a
      href={href}
      className="hidden lg:flex items-center justify-center h-[36px] px-5 rounded-lg font-medium text-[13px] bg-black text-white dark:bg-white dark:text-black hover:bg-[#00C2FF] hover:text-black transition-colors duration-200"
    >
      {text}
    </a>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { pathname } = useLocation();
  const onFreelance = pathname === '/freelance';

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Hash links start with "/" so they also work when you are on /freelance.
  // Contact stays "#contact" because both pages render the Contact section.
  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Freelance', to: '/freelance', highlight: true },
    { name: 'Contact', href: '#contact' },
  ];

  const linkClass = (active) =>
    `block px-3.5 py-1.5 border border-transparent rounded-lg transition-colors duration-200 hover:text-black dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.05] ${
      active
        ? 'text-black dark:text-white'
        : 'text-black/55 dark:text-white/60'
    }`;

  // Freelance gets its own look so visitors notice it: accent pill with a pulsing dot
  const highlightClass = (active) =>
    `flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-lg border text-[#00A8DD] dark:text-[#00C2FF] transition-colors duration-200 hover:bg-[#00C2FF]/15 ${
      active
        ? 'bg-[#00C2FF]/15 border-[#00C2FF]/40'
        : 'bg-[#00C2FF]/[0.07] border-[#00C2FF]/25'
    }`;

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
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[1100px] h-[58px] z-50 flex items-center bg-white/80 dark:bg-[#08080a]/80 backdrop-blur-md border border-black/[0.09] dark:border-white/[0.08] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-[180%]'
      }`}
    >

      {/* Scroll progress indicator */}
      <motion.div
        className="absolute top-0 left-6 right-6 h-[2px] bg-[#00C2FF] origin-[0%] z-51 rounded-full opacity-80"
        style={{ scaleX }}
      />

      <div className="w-full px-5 sm:px-6 flex justify-between items-center relative">

        <Link to="/" className="font-mono text-sm font-bold text-black dark:text-white tracking-wider">
          shivani<span className="text-[#00C2FF] dark:text-[#00C2FF]">.</span>
        </Link>

        <div className={`fixed top-0 left-0 w-full h-screen bg-[#FAFAF9] dark:bg-[#050507]/98 backdrop-blur-xl flex flex-col justify-center items-center transition-transform duration-300 z-40 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:backdrop-blur-none lg:translate-y-0 lg:flex-row lg:z-auto`}>
          <ul className="flex flex-col gap-8 text-center m-0 p-0 list-none lg:flex-row lg:items-center lg:gap-1 text-sm">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.to ? (
                  <Link
                    to={item.to}
                    className={item.highlight ? highlightClass(onFreelance) : linkClass(onFreelance)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.highlight && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#00C2FF] opacity-60 animate-ping" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00C2FF]" />
                      </span>
                    )}
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={linkClass(false)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <NavConnectButton href="#contact" text="Connect" />

          <button
            className="flex flex-col gap-1.5 bg-none border-none cursor-pointer z-50 relative lg:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-[2px] bg-black dark:bg-white rounded-full transition-transform duration-300 ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-black dark:bg-white rounded-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-black dark:bg-white rounded-full transition-transform duration-300 ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;