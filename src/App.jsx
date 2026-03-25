import React from 'react';
import styles from './App.module.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.contentWrapper}>
          <Navbar />
        </div>
      </header>

      <main>
        {/* --- HOME SECTION (MODIFIED) --- */}
        <section id="home" className={styles.homeSection}>
          <div className={styles.contentWrapper}>
            <Home />
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <motion.section
          id="about"
          className={styles.sectionCardYellow}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <About />
        </motion.section>

        {/* --- PROJECTS SECTION --- */}
        <motion.section
          id="projects"
          className={styles.sectionCardPink}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Projects />
        </motion.section>

        {/* --- CONTACT SECTION --- */}
        <motion.section
          id="contact"
          className={styles.sectionCardGreen}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Contact />
        </motion.section>
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.socialLinks}>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;