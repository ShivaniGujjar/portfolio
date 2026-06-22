import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

// ==========================================
// 🚀 SLEEK MINIMAL JACKPOT BUTTON
// ==========================================
const JackpotButton = ({ text, href, isPrimary }) => {
  return (
    <a
      href={href}
      className={`group relative h-[48px] sm:h-[50px] w-full sm:w-[180px] overflow-hidden rounded-md font-bold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center border ${
        isPrimary
          ? "bg-white text-black border-white hover:bg-[#FF6C37] hover:border-[#FF6C37] hover:text-white"
          : "bg-white/[0.02] text-white border-white/10 hover:border-white/30"
      }`}
    >
      <div className="flex flex-col h-[50px] w-full items-center transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[50px]">
        <span className="flex h-[50px] shrink-0 items-center justify-center w-full">{text}</span>
        <span className="flex h-[50px] shrink-0 items-center justify-center w-full">{text}</span>
      </div>
    </a>
  );
};

// ==========================================
// 🏠 NATURAL COMPACT HERO
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
      gsap.set(".fade-in", { opacity: 0, y: 15 });
      
      tl.to(".smooth-line", { 
        opacity: 1, 
        y: 0,
        rotationX: 0,
        duration: 1.2, 
        stagger: 0.1
      })
      .to(".fade-in", { 
        opacity: 1, 
        y: 0,
        duration: 0.8 
      }, "-=0.8");
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="home"
      // Changed from min-h-screen to h-auto on mobile, keeping sm:min-h-screen for desktop
      className="relative w-full h-auto sm:min-h-screen bg-[#020204] flex flex-col justify-between px-5 sm:px-10 lg:px-16 pt-6 pb-12 sm:py-12 select-none overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-[#00C2FF]/[0.01] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-[#FF6C37]/[0.01] rounded-full blur-[120px] pointer-events-none" />

      {/* TOP META BAR */}
      <div className="fade-in w-full max-w-[1400px] mx-auto flex justify-between items-center border-b border-white/5 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
          <span className="font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase">System.ready</span>
        </div>
        <div className="font-mono text-[9px] tracking-[0.2em] text-white/30 hidden sm:block">
          <span className="text-[#00C2FF]">const</span> profile <span className="text-[#FF6C37]">=</span> MERN_DEVELOPER;
        </div>
      </div>

      {/* 👑 MAIN HERO BODY */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-start justify-center pt-12 pb-10 sm:py-0 sm:my-auto">
        <h1 
          className="w-full text-[10.5vw] xs:text-[10vw] sm:text-[8.5vw] md:text-[6.8rem] font-black leading-[0.95] uppercase text-left flex flex-col gap-1 sm:gap-2 tracking-tight whitespace-nowrap break-keep"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="smooth-line text-white [backface-visibility:hidden] will-change-transform">
            BUILDING
          </div>
          
          <div className="smooth-line text-[#00C2FF] [backface-visibility:hidden] will-change-transform">
            SCALABLE
          </div>
          
          <div className="smooth-line text-[#FF6C37] [backface-visibility:hidden] will-change-transform">
            APPLICATIONS
          </div>
        </h1>

        {/* CONTROLS ROW */}
        <div className="fade-in flex flex-col lg:flex-row lg:items-center justify-between gap-6 w-full mt-8 sm:mt-14 pt-6 sm:pt-8 border-t border-white/5">
          <p className="font-mono text-[11px] text-white/40 max-w-xs leading-relaxed tracking-wide">
            Crafting resilient web architecture with performance-first fullstack engineering profiles.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full lg:w-auto">
            <JackpotButton href="#projects" text="VIEW PROJECTS" isPrimary={true} />
            <JackpotButton href="#contact" text="LET'S CONNECT" isPrimary={false} />
          </div>
        </div>
      </div>

      {/* FOOTER ENGINE TERMINAL TRACK */}
      <div className="fade-in w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-5 border-t border-white/5 mt-4 sm:mt-0">
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">Core Stack</span>
        
        <div className="flex items-center gap-5 sm:gap-8 bg-white/[0.02] border border-white/5 px-5 sm:px-6 py-3 rounded-xl sm:rounded-full w-full sm:w-auto justify-between sm:justify-start backdrop-blur-md">
          <SiMongodb style={{ color: "#47A248" }} className="text-2xl sm:text-3xl hover:scale-110 transition-transform duration-300 shrink-0" />
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="text-2xl sm:text-3xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shrink-0">
            <SiExpress className="w-6 h-6 sm:w-7 sm:h-7 object-contain" />
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <SiReact style={{ color: "#00C2FF" }} className="text-2xl sm:text-3xl hover:scale-110 transition-transform duration-300 shrink-0" />
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <SiNodedotjs style={{ color: "#339933" }} className="text-2xl sm:text-3xl hover:scale-110 transition-transform duration-300 shrink-0" />
        </div>
      </div>

    </section>
  );
};

export default Home;