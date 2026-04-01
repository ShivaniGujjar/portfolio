import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { Sun, Moon } from 'lucide-react'; // Icons import kar liye

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
          <li className={styles.navItem}><a href="#home" onClick={closeMenu} className={`${styles.link} ${styles.homeHover}`}>HOME</a></li>
          <li className={styles.navItem}><a href="#about" onClick={closeMenu} className={`${styles.link} ${styles.aboutHover}`}>ABOUT</a></li>
          <li className={styles.navItem}><a href="#projects" onClick={closeMenu} className={`${styles.link} ${styles.projectsHover}`}>PROJECTS</a></li>
          <li className={styles.navItem}><a href="#contact" onClick={closeMenu} className={`${styles.link} ${styles.contactHover}`}>CONTACT</a></li>
          
          {/* Mobile Only Connect Button */}
          <li className={styles.mobileCTA}>
            <a href="#contact" onClick={closeMenu} className={styles.connectBtn}>LET'S CONNECT</a>
          </li>
        </ul>

        {/* DESKTOP CONTROLS & HAMBURGER WRAPPER */}
        <div className={styles.ctaWrapper}>
          
          {/* UPDATED THEME TOGGLE BUTTON */}
          <button 
            className={`${styles.themeBtn} ${styles.desktopThemeBtn}`} 
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
          >
            {/* Professional Icons with strokeWidth to match your bold text */}
            {isDark ? (
              <Sun size={20} strokeWidth={2.5} color="#F2C94C" />
            ) : (
              <Moon size={20} strokeWidth={2.5} color="#1A1A1A" />
            )}
          </button>
          
          {/* Desktop Only Connect Button */}
          <a href="#contact" className={`${styles.connectBtn} ${styles.desktopCTA}`}>
            LET'S CONNECT
          </a>

          {/* HAMBURGER (Visible on mobile only) */}
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