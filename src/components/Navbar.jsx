import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { name: 'HOME', hoverClass: styles.homeHover },
    { name: 'ABOUT', hoverClass: styles.aboutHover },
    { name: 'PROJECTS', hoverClass: styles.projectsHover },
    { name: 'CONTACT', hoverClass: styles.contactHover }
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        
        {/* LOGO */}
        <div className={styles.logoGroup}>
          <a href="#home" className={styles.logoMain}>
            PORTFOLIO<span className={styles.dot}>.</span>
          </a>
        </div>

        {/* NAVIGATION LINKS & MOBILE MENU */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksActive : ''}`}>
          {navItems.map((item) => (
            <li key={item.name} className={styles.navItem}>
              <a 
                href={`#${item.name.toLowerCase()}`} 
                onClick={closeMenu} 
                className={`${styles.link} ${item.hoverClass}`}
              >
                {/* JACKPOT EFFECT WRAPPER */}
                <div className={styles.rollWrapper}>
                  <span className={styles.rollText}>{item.name}</span>
                  <span className={styles.rollText}>{item.name}</span>
                </div>
              </a>
            </li>
          ))}
          
          {/* Mobile Only Connect Button */}
          <li className={styles.mobileCTA}>
            <a href="#contact" onClick={closeMenu} className={styles.connectBtn}>LET'S CONNECT</a>
          </li>
        </ul>

        {/* DESKTOP CONTROLS & HAMBURGER */}
        <div className={styles.ctaWrapper}>
          <button 
            className={`${styles.themeBtn} ${styles.desktopThemeBtn}`} 
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun size={20} strokeWidth={2.5} color="#F2C94C" />
            ) : (
              <Moon size={20} strokeWidth={2.5} color="#1A1A1A" />
            )}
          </button>
          
          <a href="#contact" className={`${styles.connectBtn} ${styles.desktopCTA}`}>
            LET'S CONNECT
          </a>

          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
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