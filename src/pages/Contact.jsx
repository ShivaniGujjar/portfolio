import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [btnText, setBtnText] = useState("SEND MESSAGE →");

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnText("SENDING...");

    emailjs.sendForm(
      'service_4sp6weh',   
      'template_ie0ka9k',  
      form.current,
      '6se8NWjesf5hBewkW'    
    )
    .then((result) => {
        setBtnText("SUCCESS! ✅");
        form.current.reset();
        setTimeout(() => setBtnText("SEND MESSAGE →"), 3000);
    }, (error) => {
        setBtnText("FAILED! ❌");
        setTimeout(() => setBtnText("SEND MESSAGE →"), 3000);
    });
  };

  return (
    <section className={styles.contactWrapper} id="contact">
      <div className={styles.contactContainer}>
        
        {/* LEFT SIDE: IDENTITY & SOCIALS */}
        <motion.div 
          className={styles.infoSide}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.statusBadge}>
            <span className={styles.pulse}></span> AVAILABLE FOR WORK
          </div>
          
          <h2 className={styles.contactTitle}>
            LET'S WORK <br/> 
            <span className={styles.blueText}>TOGETHER.</span>
          </h2>
          
          <p className={styles.contactDesc}>
            I’m currently seeking new opportunities and professional collaborations. 
            If you have a project in mind or just want to discuss a role, feel free to reach out.
          </p>
          
          <div className={styles.iconGrid}>
            <motion.a whileHover={{ y: -5 }} href="https://github.com/ShivaniGujjar" target="_blank" rel="noreferrer" className={`${styles.iconLink} ${styles.github}`}>
              <FaGithub />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="#" target="_blank" rel="noreferrer" className={`${styles.iconLink} ${styles.linkedin}`}>
              <FaLinkedinIn />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="https://x.com/Inavish_Buttar" target="_blank" rel="noreferrer" className={`${styles.iconLink} ${styles.twitter}`}>
              <FaXTwitter />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="https://www.instagram.com/shivani_gujjar04/" target="_blank" rel="noreferrer" className={`${styles.iconLink} ${styles.instagram}`}>
              <FaInstagram />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE: THE MESSAGE FORM WINDOW */}
        <motion.div 
          className={styles.formSide}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.formHeader}>
            <div className={styles.dots}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <p className={styles.headerText}>SEND A MESSAGE</p>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label>YOUR NAME</label>
              <input type="text" name="from_name" placeholder="Full Name" required />
            </div>
            
            <div className={styles.inputGroup}>
              <label>EMAIL ADDRESS</label>
              <input type="email" name="reply_to" placeholder="email@address.com" required />
            </div>

            <div className={styles.inputGroup}>
              <label>TELL ME ABOUT YOUR PROJECT</label>
              <textarea name="message" placeholder="Message..." rows="4" required></textarea>
            </div>

            <motion.button 
              type="submit" 
              className={styles.submitBtn}
              whileTap={{ scale: 0.98 }}
            >
              {btnText}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;