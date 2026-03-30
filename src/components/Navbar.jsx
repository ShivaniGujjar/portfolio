import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        
        {/* LOGO: Technical Branding */}
        <div className={styles.logoGroup}>
          <a href="#home" className={styles.logoMain}>
            SHIVANI<span className={styles.dot}>.</span>
          </a>
        </div>

        {/* NAVIGATION: Professional Liquid Links */}
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <a href="#home" className={`${styles.link} ${styles.homeHover}`}>HOME</a>
          </li>
          <li className={styles.navItem}>
            <a href="#about" className={`${styles.link} ${styles.aboutHover}`}>ABOUT</a>
          </li>
          <li className={styles.navItem}>
            <a href="#projects" className={`${styles.link} ${styles.projectsHover}`}>PROJECTS</a>
          </li>
          <li className={styles.navItem}>
            <a href="#contact" className={`${styles.link} ${styles.contactHover}`}>CONTACT</a>
          </li>
        </ul>

        {/* CTA: Mechanical Button */}
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