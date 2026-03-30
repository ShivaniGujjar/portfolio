import React from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className={styles.contactWrapper} id="contact">
      <div className={styles.contactContainer}>
        
        {/* LEFT SIDE: IDENTITY & SOCIALS */}
        <div className={styles.infoSide}>
          <div className={styles.statusBadge}>
            <span className={styles.pulse}></span> AVAILABLE FOR WORK
          </div>
          
          <h2 className={styles.contactTitle}>
            LET'S WORK <br/> 
            <span className={styles.blueText}>TOGETHER.</span>
          </h2>
          
          <p className={styles.contactDesc}>
            I’m currently seeking new opportunities and professional collaborations. 
            If you have a project in mind or just want to discuss a role, 
            feel free to reach out.
          </p>
          
          <div className={styles.iconGrid}>
            <a href="https://github.com/ShivaniGujjar" target="_blank" rel="noreferrer" className={`${styles.iconLink} ${styles.github}`}>
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className={`${styles.iconLink} ${styles.linkedin}`}>
              <FaLinkedinIn />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className={`${styles.iconLink} ${styles.twitter}`}>
              <FaXTwitter />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className={`${styles.iconLink} ${styles.instagram}`}>
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: THE MESSAGE FORM */}
        <div className={styles.formSide}>
          <div className={styles.formHeader}>
            <div className={styles.dots}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <p className={styles.headerText}>SEND A MESSAGE</p>
          </div>
          
          <form className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label>YOUR NAME</label>
              <input type="text" placeholder="Full Name" required />
            </div>
            
            <div className={styles.inputGroup}>
              <label>EMAIL ADDRESS</label>
              <input type="email" placeholder="email@address.com" required />
            </div>

            <div className={styles.inputGroup}>
              <label>TELL ME ABOUT YOUR PROJECT</label>
              <textarea placeholder="Message..." rows="4" required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              SEND MESSAGE →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;