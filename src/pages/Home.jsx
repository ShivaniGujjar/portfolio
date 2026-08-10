import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FiCode, FiGitCommit, FiGlobe } from 'react-icons/fi';

// ==========================================
// 🔢 SEQUENTIAL NUMBER TICKER COMPONENT
// ==========================================
const CountUpNumber = ({ targetNumber, suffix = "+", colorClass = "text-[#00C2FF]" }) => {
  const numRef = useRef(null);

  useLayoutEffect(() => {
    const obj = { count: 0 };
    
    let ctx = gsap.context(() => {
      gsap.to(obj, {
        count: targetNumber,
        duration: 2,
        delay: 0.6,
        ease: "power2.out",
        onUpdate: () => {
          if (numRef.current) {
            numRef.current.innerText = Math.floor(obj.count);
          }
        }
      });
    }, numRef);

    return () => ctx.revert();
  }, [targetNumber]);

  return (
    <div className="font-outfit text-2xl sm:text-3xl font-black text-white tracking-tight leading-none inline-flex items-center">
      <span ref={numRef}>0</span>
      <span className={colorClass}>{suffix}</span>
    </div>
  );
};

// ==========================================
// 🚀 SLEEK JACKPOT BUTTON
// ==========================================
const JackpotButton = ({ text, href, isPrimary, target, rel }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`group relative h-[52px] sm:h-[56px] w-full sm:w-[175px] overflow-hidden rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center border ${
        isPrimary
          ? "bg-white text-black border-white hover:bg-[#FF6C37] hover:border-[#FF6C37] hover:text-white shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          : "bg-white/[0.03] text-white border-white/10 hover:border-white/30 hover:bg-white/5"
      }`}
    >
      <div className="flex flex-col h-[56px] w-full items-center transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[56px]">
        <span className="flex h-[56px] shrink-0 items-center justify-center w-full">{text}</span>
        <span className="flex h-[56px] shrink-0 items-center justify-center w-full">{text}</span>
      </div>
    </a>
  );
};

// ==========================================
// 🏠 BOLD HERO SECTION WITH TICKING COUNTER
// ==========================================
const Home = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      
      gsap.set(".smooth-line", { 
        opacity: 0,
        y: 30,
        rotationX: -10,
        transformOrigin: "50% 0%"
      });
      gsap.set(".fade-in", { opacity: 0, y: 20 });
      
      tl.to(".smooth-line", { 
        opacity: 1, 
        y: 0,
        rotationX: 0,
        duration: 1.1, 
        stagger: 0.1
      })
      .to(".fade-in", { 
        opacity: 1, 
        y: 0,
        duration: 0.8 
      }, "-=0.7");
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="home"
      className="relative w-full h-auto sm:min-h-screen bg-[#020204] flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-8 pb-12 sm:py-12 select-none overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Background Cyber Pattern & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[35vw] bg-[#00C2FF]/[0.035] rounded-full blur-[160px] pointer-events-none" />

      {/* TOP META BAR */}
      <div className="fade-in w-full max-w-[1450px] mx-auto flex justify-between items-center border-b border-white/10 pb-5 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#00C2FF] shadow-[0_0_10px_#00C2FF]" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-white/50 uppercase font-bold">System.ready</span>
        </div>
        <div className="font-mono text-[10px] tracking-[0.2em] text-white/50 hidden sm:block">
          <span className="text-[#00C2FF]">const</span> status <span className="text-[#FF6C37]">=</span> "ACTIVE_BUILDER";
        </div>
      </div>

      {/* 👑 CENTERED HERO BODY */}
      <div className="w-full max-w-[1300px] mx-auto flex flex-col items-center justify-center text-center pt-10 pb-10 sm:py-0 sm:my-auto relative z-10">
        
        {/* Main Heading */}
        <h1 
          className="w-full text-[clamp(2.8rem,7.5vw,6.5rem)] font-black leading-[0.98] uppercase text-center flex flex-col gap-2 sm:gap-3 tracking-tight"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="smooth-line text-white [backface-visibility:hidden] will-change-transform">
            BUILDING
          </div>
          
          <div className="smooth-line text-[#00C2FF] [backface-visibility:hidden] will-change-transform drop-shadow-[0_0_35px_rgba(0,194,255,0.25)]">
            SCALABLE
          </div>
          
          <div className="smooth-line text-[#FF6C37] [backface-visibility:hidden] will-change-transform drop-shadow-[0_0_35px_rgba(255,108,55,0.25)]">
            APPLICATIONS
          </div>
        </h1>

        {/* 🔢 METRICS BAR WITH INCREMENTING COUNTERS */}
        <div className="fade-in w-full max-w-4xl mx-auto mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 px-8 py-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl">
          
          {/* Milestone 1 */}
          <div className="flex items-center gap-3.5 group cursor-default">
            <div className="p-2.5 rounded-xl bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/20 shadow-[0_0_15px_rgba(0,194,255,0.1)]">
              <FiCode className="text-base sm:text-lg" />
            </div>
            <div className="text-left">
              <CountUpNumber targetNumber={10} colorClass="text-[#00C2FF]" />
              <span className="font-mono text-[10px] sm:text-[11px] text-white/50 tracking-[0.2em] uppercase font-bold mt-1 block">
                Projects Built
              </span>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-[1px] bg-white/10" />

          {/* Milestone 2 */}
          <div className="flex items-center gap-3.5 group cursor-default">
            <div className="p-2.5 rounded-xl bg-[#FF6C37]/10 text-[#FF6C37] border border-[#FF6C37]/20 shadow-[0_0_15px_rgba(255,108,55,0.1)]">
              <FiGitCommit className="text-base sm:text-lg" />
            </div>
            <div className="text-left">
              <CountUpNumber targetNumber={150} colorClass="text-[#FF6C37]" />
              <span className="font-mono text-[10px] sm:text-[11px] text-white/50 tracking-[0.2em] uppercase font-bold mt-1 block">
                Github Commits
              </span>
            </div>
          </div>

          <div className="hidden sm:block h-8 w-[1px] bg-white/10" />

          {/* Milestone 3 */}
          <div className="flex items-center gap-3.5 group cursor-default">
            <div className="p-2.5 rounded-xl bg-[#27C93F]/10 text-[#27C93F] border border-[#27C93F]/20 shadow-[0_0_15px_rgba(39,201,63,0.1)]">
              <FiGlobe className="text-base sm:text-lg" />
            </div>
            <div className="text-left">
              <CountUpNumber targetNumber={6} colorClass="text-[#27C93F]" />
              <span className="font-mono text-[10px] sm:text-[11px] text-white/50 tracking-[0.2em] uppercase font-bold mt-1 block">
                Live Deployments
              </span>
            </div>
          </div>

        </div>

        {/* BUTTONS & DESCRIPTION */}
        <div className="fade-in flex flex-col items-center gap-6 mt-12 w-full max-w-2xl mx-auto">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <JackpotButton href="#projects" text="VIEW PROJECTS" isPrimary={true} />
            <JackpotButton href="/resume.pdf" text="VIEW RESUME ↗" isPrimary={false} target="_blank" rel="noreferrer" />
            <JackpotButton href="#contact" text="LET'S CONNECT" isPrimary={false} />
          </div>

          <p className="font-mono text-xs text-white/50 max-w-lg text-center leading-relaxed tracking-wide">
            Crafting resilient web architecture with performance-first fullstack engineering profiles.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Home;