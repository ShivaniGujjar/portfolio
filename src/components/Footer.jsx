import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        {/* LEFT: Identity */}
        <div className={styles.footerSection}>
          <p className={styles.brand}>SHIVANI GUJJAR</p>
          <p className={styles.subText}>© {currentYear} • EST 2024</p>
        </div>

        {/* CENTER: Action */}
        <div className={styles.footerSection}>
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
            className={styles.topButton}
          >
            BACK TO TOP ↑
          </button>
        </div>

        {/* RIGHT: Status */}
        <div className={styles.footerSection}>
          <p className={styles.statusText}>
            <span className={styles.cyanPulse}></span> SYSTEM ONLINE
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;