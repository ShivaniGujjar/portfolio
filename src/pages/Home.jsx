import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

// ==========================================
// 🚀 VERTICAL SCROLL + HOVER BUTTON
// ==========================================
const ScrollButton = ({ text, href, isPrimary }) => {
  return (
    <a
      href={href}
      className={`group block h-[52px] w-full sm:w-[200px] overflow-hidden rounded-xl font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.2em] transition-all duration-500 ${
        isPrimary
          ? "bg-white text-black hover:bg-[#FF6C37] hover:text-white"
          : "bg-transparent border border-white/20 text-white hover:bg-[#FF6C37] hover:border-[#FF6C37]"
      }`}
    >
      <div className="flex flex-col transition-transform duration-500 [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[52px]">
        <span className="flex h-[52px] items-center justify-center">{text}</span>
        <span className="flex h-[52px] items-center justify-center text-white">{text}</span>
      </div>
    </a>
  );
};

// ==========================================
// 🏠 MAIN HOME COMPONENT
// ==========================================
const Home = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      gsap.set(".reveal", { opacity: 0, y: 30 });
      tl.to(".reveal", { opacity: 1, y: 0, duration: 1.2, stagger: 0.12, delay: 0.1 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // ... (Home.jsx)

  return (
    <section 
      ref={containerRef} 
      id="home"
      // min-h-screen ki jagah pt-24 use karo taaki space handle ho
      className="relative w-full pt-24 pb-12 bg-[#050507] flex flex-col items-center overflow-hidden px-5"
    >
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-[1000px] mx-auto flex flex-col items-center text-center">
        
        {/* Header/Nav Spacer agar zaroori hai */}
        <div className="h-16" /> 

        {/* Top Declaration */}
        <div className="reveal font-mono text-[9px] tracking-[0.25em] uppercase mb-6 opacity-70">
          <span className="text-[#00C2FF]">const</span> profile <span className="text-[#FF6C37]">=</span> MERN_ARCHITECT;
        </div>

        {/* Hero Headline */}
        <h1 className="flex flex-col gap-1 w-full text-[clamp(2.2rem,8vw,6.5rem)] font-black leading-[0.9] tracking-tighter uppercase select-none">
          <div className="reveal text-white">BUILDING</div>
          <div className="reveal flex items-center justify-center gap-2 sm:gap-4 text-[#00C2FF]">
            <span className="font-mono font-light opacity-60">{' {'}</span>
            <span>SCALABLE</span>
            <span className="font-mono font-light opacity-60">{'}'}</span>
          </div>
          <div className="reveal flex items-center justify-center gap-2 sm:gap-4 text-[#FF6C37]">
            <span className="font-mono font-light opacity-60">{'</'}</span>
            <span>APPLICATIONS</span>
            <span className="font-mono font-light opacity-60">{'>'}</span>
          </div>
        </h1>

        {/* Tech Stack */}
        <div className="reveal flex items-center gap-6 sm:gap-10 mt-6 text-xl sm:text-3xl">
          <SiMongodb className="text-[#47A248]" title="MongoDB" />
          <SiExpress className="text-white/80" title="Express.js" />
          <SiReact className="text-[#00C2FF]" title="React" />
          <SiNodedotjs className="text-[#339933]" title="Node.js" />
        </div>

        {/* CTA Buttons - Margin aur kam ki */}
        <div className="reveal flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
          <ScrollButton href="#projects" text="VIEW PROJECTS" isPrimary={true} />
          <ScrollButton href="#contact" text="LET'S CONNECT" isPrimary={false} />
        </div>

      </div>
    </section>
  );
};

export default Home;