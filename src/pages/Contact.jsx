import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [btnText, setBtnText] = useState("SEND MESSAGE →");

  const sendEmail = (e) => {
    e.preventDefault();
    setBtnText("SENDING...");

    // EmailJS logic
    emailjs.sendForm(
      'service_4sp6weh',   // Step 1 wali Service ID
      'template_ie0ka9k',  // Step 2 wali Template ID
      form.current,
      '6se8NWjesf5hBewkW'    // Step 3 wali Public Key
    )
    .then((result) => {
        console.log(result.text);
        setBtnText("SUCCESS! ✅");
        form.current.reset(); // Form clear kar dega
        setTimeout(() => setBtnText("SEND MESSAGE →"), 3000);
    }, (error) => {
        console.log(error.text);
        setBtnText("FAILED! ❌");
        setTimeout(() => setBtnText("SEND MESSAGE →"), 3000);
    });
  };

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
            <a href="https://x.com/Inavish_Buttar" target="_blank" rel="noreferrer" className={`${styles.iconLink} ${styles.twitter}`}>
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/shivani_gujjar04/" target="_blank" rel="noreferrer" className={`${styles.iconLink} ${styles.instagram}`}>
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
          
          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label>YOUR NAME</label>
              {/* Important: name attribute Template se match hona chahiye */}
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

            <button type="submit" className={styles.submitBtn}>
              {btnText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;