import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const scrollToContact = (e) => {
    e.preventDefault();
    // Use the ID of your contact section or footer
    const contactSection = document.getElementById('contact'); 
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Shivani</div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {/* Changed to an anchor tag for easy linking, styled as a button */}
      <a 
        href="#contact" 
        className={styles.talkButton} 
        onClick={scrollToContact}
      >
        Let’s Connect
      </a>
    </nav>
  );
}

export default Navbar;