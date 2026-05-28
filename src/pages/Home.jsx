import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

// ==========================================
// 🚀 STABLE JACKPOT BUTTON
// ==========================================
const ScrollButton = ({ text, href, isPrimary }) => {
  return (
    <a
      href={href}
      className={`relative h-[52px] w-full sm:w-[200px] overflow-hidden rounded-xl font-extrabold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 border flex items-center justify-center ${
        isPrimary
          ? "bg-white text-black hover:bg-[#FF6C37] hover:border-[#FF6C37] hover:text-white"
          : "bg-transparent border-white/20 text-white hover:bg-[#FF6C37] hover:border-[#FF6C37]"
      }`}
    >
      <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 [transition-timing-function:cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-[52px]">
        <span className="flex h-[52px] items-center justify-center">{text}</span>
        <span className="absolute top-[52px] flex h-[52px] items-center justify-center">{text}</span>
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
      tl.to(".reveal", { opacity: 1, y: 0, duration: 1.2, stagger: 0.12 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="home"
      // h-auto and py-24 ensure content is compact and only takes necessary space
      className="relative w-full h-auto py-24 bg-[#050507] flex flex-col items-center justify-center px-5"
    >
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Top Tag */}
        <div className="reveal mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/70">
            <span className="text-[#00C2FF]">const</span> profile <span className="text-[#FF6C37]">=</span> MERN_DEVELOPER;
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="flex flex-col gap-1 w-full text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.9] tracking-tighter uppercase">
          <div className="reveal text-white">BUILDING</div>
          <div className="reveal flex items-center justify-center gap-4 text-[#00C2FF]">
            <span className="font-light opacity-30 text-5xl">{'{'}</span>
            <span>SCALABLE</span>
            <span className="font-light opacity-30 text-5xl">{'}'}</span>
          </div>
          <div className="reveal flex items-center justify-center gap-4 text-[#FF6C37]">
            <span className="font-light opacity-30 text-5xl">{'</'}</span>
            <span>APPLICATIONS</span>
            <span className="font-light opacity-30 text-5xl">{'>'}</span>
          </div>
        </h1>

        {/* Tech Stack */}
        <div className="reveal flex items-center gap-10 mt-12 mb-12 text-3xl">
          <SiMongodb style={{ color: "#47A248" }} />
          <SiExpress className="text-white/80" />
          <SiReact style={{ color: "#00C2FF" }} />
          <SiNodedotjs style={{ color: "#339933" }} />
        </div>

        {/* CTA Buttons */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <ScrollButton href="#projects" text="VIEW PROJECTS" isPrimary={true} />
          <ScrollButton href="#contact" text="LET'S CONNECT" isPrimary={false} />
        </div>
      </div>
    </section>
  );
};

export default Home;