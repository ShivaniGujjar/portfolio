import React from 'react';
import { FiArrowUp, FiActivity } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        
        {/* LEFT: Branding & Registry */}
        <div className={styles.footerLeft}>
          <span className={styles.brand}>SHIVANI GUJJAR</span>
          <span className={styles.divider}>|</span>
          <span className={styles.registry}>©{currentYear}</span>
        </div>

        {/* CENTER: Clean Action */}
        <div className={styles.footerCenter}>
          <button 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
            className={styles.scrollBtn}
          >
            BACK_TO_TOP <FiArrowUp />
          </button>
        </div>

        {/* RIGHT: Operational Status */}
        <div className={styles.footerRight}>
          <div className={styles.statusBox}>
            <span className={styles.pulseDot}></span>
            <span className={styles.statusText}>SYSTEM_OPERATIONAL</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;