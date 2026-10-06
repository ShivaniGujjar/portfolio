import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import Freelance from './components/Freelance';

gsap.registerPlugin(ScrollTrigger);

// Main portfolio page (everything except Freelance)
const HomePage = () => (
  <>
    <Home />
    <About />
    <Capabilities />
    <Projects />
    <Contact />
  </>
);

// Separate freelance page. Contact is included so "Choose <package>" can prefill it.
const FreelancePage = () => (
  <>
    <Freelance />
    <Contact />
  </>
);

function App() {
  const lenisRef = useRef(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Smooth Lenis Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

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
      lenisRef.current = null;
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  // On every page change: go to the #section if there is one, else to the top.
  // Also refresh ScrollTrigger because the page height has changed.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const t = setTimeout(() => {
      ScrollTrigger.refresh();
      if (hash) {
        lenis.scrollTo(hash, { offset: -80, immediate: true });
      } else {
        lenis.scrollTo(0, { immediate: true });
      }
    }, 50);

    return () => clearTimeout(t);
  }, [pathname, hash]);

  return (
    <div className="bg-neutral-50 dark:bg-[#050507] min-h-screen text-neutral-900 dark:text-white select-none transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
        <div className="w-full max-w-[1400px] mx-auto pointer-events-auto">
          <Navbar />
        </div>
      </header>

      <main className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/freelance" element={<FreelancePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;