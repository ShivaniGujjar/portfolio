import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        
        {/* LOGO */}
        <div className={styles.logoGroup}>
          <a href="#home" className={styles.logoMain}>
            PORTFOLIO<span className={styles.dot}>.</span>
          </a>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* NAVIGATION LINKS */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksActive : ''}`}>
          <li className={styles.navItem}>
            <a href="#home" onClick={closeMenu} className={`${styles.link} ${styles.homeHover}`}>HOME</a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" onClick={closeMenu} className={`${styles.link} ${styles.aboutHover}`}>ABOUT</a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects" onClick={closeMenu} className={`${styles.link} ${styles.projectsHover}`}>PROJECTS</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" onClick={closeMenu} className={`${styles.link} ${styles.contactHover}`}>CONTACT</a>
          </li>
          {/* This only shows inside the mobile menu */}
          <li className={styles.mobileCTA}>
            <a href="#contact" onClick={closeMenu} className={styles.connectBtn}>
              LET'S CONNECT
            </a>
          </li>
        </ul>

        {/* DESKTOP CTA */}
        <div className={styles.ctaWrapper}>
          <a href="#contact" className={styles.connectBtn}>
            LET'S CONNECT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;