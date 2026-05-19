import React from 'react';
import { motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities'; // <-- Highly cohesive new structural node split
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    // MAIN GLOBAL WRAPPER BLOCK
    <div className="bg-brand-black min-h-screen text-white select-none">
      
      {/* 🖥️ GLOBAL REGISTRY FLOATING NAVBAR ACCENT */}
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="w-full max-w-[1400px] mx-auto pointer-events-auto">
          <Navbar />
        </div>
      </header>

      {/* 🚀 SIMPLIFIED MAIN VIEWPORT MATRIX (FIXED OVERFLOW DEADLOCK) */}
      <main className="w-full">
        
        {/* Home Section */}
        <Home />

        {/* About Section Container */}
        <motion.div 
          className="w-full bg-transparent"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.div>

        {/* 📍 Capabilities Stacking Engine Section (Rendered right after About) */}
        <motion.div 
          className="w-full bg-transparent"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Capabilities />
        </motion.div>

        {/* Projects Section Container */}
        <motion.div 
          className="w-full bg-transparent"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.div>

        {/* Contact Section Container */}
        <motion.div 
          className="w-full bg-transparent"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.div>

      </main>
      
      {/* 🏁 ASSEMBLED GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}

export default App;