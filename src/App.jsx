import React from 'react';
import styles from './App.module.css';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import our new Footer
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className={styles.appWrapper}>
      <header className={styles.header}>
        <div className={styles.contentWrapper}>
          <Navbar />
        </div>
      </header>

      <main>
        <section id="home" className={styles.mainSection}>
          <div className={styles.contentWrapper}>
            <Home />
          </div>
        </section>

        {/* --- Sections are now clean and unified --- */}
        <motion.section 
          id="about" 
          className={styles.mainSection}
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
        >
          <About />
        </motion.section>

        <motion.section 
          id="projects" 
          className={styles.mainSection}
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
        >
          <Projects />
        </motion.section>

        <motion.section 
          id="contact" 
          className={styles.mainSection}
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
        >
          <Contact />
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;