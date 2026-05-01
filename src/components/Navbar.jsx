import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const navItems = [{ name: 'HOME' }, { name: 'ABOUT' }, { name: 'PROJECTS' }, { name: 'CONTACT' }];

  return (
    <nav className={styles.navbar}>
      <motion.div className={styles.progressBar} style={{ scaleX }} />

      <div className={styles.navContainer}>
        <a href="#home" className={styles.logoMain}>
          DEVELOPER<span className={styles.dot}>.</span>
        </a>

        <div className={`${styles.navMenuWrapper} ${isMenuOpen ? styles.menuActive : ''}`}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={`#${item.name.toLowerCase()}`} className={styles.link} onClick={() => setIsMenuOpen(false)}>
                  <div className={styles.rollWrapper}>
                    <span className={styles.rollText}>{item.name}</span>
                    <span className={styles.rollText}>{item.name}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className={styles.onlyForMobile} onClick={() => setIsMenuOpen(false)}>LET'S CONNECT</a>
        </div>

        <div className={styles.ctaWrapper}>
          <a href="#contact" className={styles.onlyForDesktop}>LET'S CONNECT</a>
          <button className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
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