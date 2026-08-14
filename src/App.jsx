import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth Lenis Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Initial resize refresh
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return (
    <div className="bg-brand-black min-h-screen text-white select-none">
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="w-full max-w-[1400px] mx-auto pointer-events-auto">
          <Navbar />
        </div>
      </header>

      <main className="w-full">
        <Home />
        <About />
        <Capabilities />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;