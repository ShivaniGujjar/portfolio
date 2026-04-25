import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // 📈 SCROLL PROGRESS LOGIC (Wapas active kiya)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const navItems = [{ name: 'HOME' }, { name: 'ABOUT' }, { name: 'PROJECTS' }, { name: 'CONTACT' }];

  return (
    <nav className={styles.navbar}>
      {/* ✅ PROGRESS BAR ANIMATION */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      <div className={styles.navContainer}>
        <div className={styles.logoGroup}>
          <a href="#home" className={styles.logoMain}>
            PORTFOLIO<span className={styles.dot}>.</span>
          </a>
        </div>

        <div className={`${styles.navMenuWrapper} ${isMenuOpen ? styles.menuActive : ''}`}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.name} className={styles.navItem}>
                <a href={`#${item.name.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className={styles.link}>
                  {/* ✅ JACKPOT ROLL EFFECT WRAPPER */}
                  <div className={styles.rollWrapper}>
                    <span className={styles.rollText}>{item.name}</span>
                    <span className={styles.rollText}>{item.name}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          
          <a href="#contact" className={styles.onlyForMobile} onClick={() => setIsMenuOpen(false)}>
            LET'S CONNECT
          </a>
        </div>

        <div className={styles.ctaWrapper}>
          <button 
  className={styles.themeBtn} 
  onClick={() => setIsDark(!isDark)}
  aria-label="Toggle Theme"
>
  <AnimatePresence mode="wait" initial={false}>
    <motion.div
      key={isDark ? "sun" : "moon"}
      initial={{ y: -20, opacity: 0, rotate: -90 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      exit={{ y: 20, opacity: 0, rotate: 90 }}
      transition={{ duration: 0.3, ease: "backOut" }}
      className={styles.iconContainer}
    >
      {isDark ? (
        <Sun size={20} strokeWidth={2.5} color="#F2C94C" />
      ) : (
        <Moon size={20} strokeWidth={2.5} color="#1A1A1A" />
      )}
    </motion.div>
  </AnimatePresence>
</button>
          
          <a href="#contact" className={styles.onlyForDesktop}>
            LET'S CONNECT
          </a>

          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;