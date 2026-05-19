import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const Home = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set([".title-line", ".btn", ".tech-hud-pod"], { opacity: 0, y: 40 });
      gsap.set(".grid-bg", { opacity: 0 });
      gsap.set(".ambient-radar-glow", { opacity: 0, scale: 0.8 });

      tl.to(".grid-bg", { opacity: 0.15, duration: 1.5 })
        .to(".ambient-radar-glow", { opacity: 1, scale: 1, duration: 1.8, ease: "power3.out" }, "-=1.2")
        .to(".title-line", { opacity: 1, y: 0, duration: 1.2, stagger: 0.12 }, "-=1.2")
        .to(".tech-hud-pod", { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.08, ease: "back.out(1.1)" }, "-=0.8")
        .to(".btn", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.4");
      
      gsap.to(".bg-react-pod", { y: "-=15", duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".bg-node-pod", { y: "+=15", duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.2 });
      gsap.to(".bg-mongo-pod", { y: "-=12", duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.4 });
      gsap.to(".bg-express-pod", { y: "+=12", duration: 4.2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.1 });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="home"
      className="relative w-full bg-[#070709] overflow-hidden px-4 pt-36 pb-12 flex flex-col items-center justify-start sm:min-h-screen sm:justify-center sm:pt-0 sm:pb-0"
    >
      {/* 🌐 TECH MATRIX GRID BACKGROUND */}
      <div 
        className="grid-bg absolute inset-0 w-full h-full pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '45px 45px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />

      {/* 🔮 CYBER AUDIO-VISUAL GLARE MATRIX */}
      <div className="ambient-radar-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] pointer-events-none rounded-full bg-gradient-to-b from-[#00C2FF]/4 to-transparent blur-[120px] mix-blend-screen select-none z-0" />

      {/* ================= CYBER RADAR HUD PODS ================= */}
      <div className="tech-hud-pod bg-react-pod absolute top-[14%] left-[6%] md:left-[10%] xl:left-[12%] pointer-events-auto select-none z-0 hidden sm:block">
        <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center group cursor-crosshair">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#00C2FF]/10 group-hover:border-[#00C2FF]/40 transition-colors duration-500 animate-[spin_60s_linear_infinite]" />
          <div className="w-[82%] h-[82%] rounded-full bg-gradient-to-b from-[#0F0F14] to-[#0A0A0F] border border-white/5 flex items-center justify-center text-[#00C2FF] opacity-40 text-4xl md:text-5xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 group-hover:border-[#00C2FF]/40">
            <SiReact className="animate-[spin_30s_linear_infinite]" />
          </div>
        </div>
      </div>

      <div className="tech-hud-pod bg-mongo-pod absolute top-[12%] right-[6%] md:right-[10%] xl:right-[12%] pointer-events-auto select-none z-0 hidden sm:block">
        <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center group cursor-crosshair">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#47A248]/10 group-hover:border-[#47A248]/40 transition-colors duration-500 animate-[spin_50s_linear_infinite]" />
          <div className="w-[82%] h-[82%] rounded-full bg-gradient-to-b from-[#0F0F14] to-[#0A0A0F] border border-white/5 flex items-center justify-center text-[#47A248] opacity-35 text-4xl md:text-5xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 group-hover:border-[#47A248]/40">
            <SiMongodb />
          </div>
        </div>
      </div>

      <div className="tech-hud-pod bg-node-pod absolute bottom-[14%] left-[5%] md:left-[8%] xl:left-[10%] pointer-events-auto select-none z-0 hidden sm:block">
        <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center group cursor-crosshair">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#339933]/10 group-hover:border-[#339933]/40 transition-colors duration-500 animate-[spin_45s_linear_infinite]" />
          <div className="w-[82%] h-[82%] rounded-full bg-gradient-to-b from-[#0F0F14] to-[#0A0A0F] border border-white/5 flex items-center justify-center text-[#339933] opacity-35 text-4xl md:text-5xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 group-hover:border-[#339933]/40">
            <SiNodedotjs />
          </div>
        </div>
      </div>

      <div className="tech-hud-pod bg-express-pod absolute bottom-[16%] right-[5%] md:right-[8%] xl:right-[10%] pointer-events-auto select-none z-0 hidden sm:block">
        <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center group cursor-crosshair">
          <div className="absolute inset-0 rounded-full border border-white/5 group-hover:border-white/30 transition-colors duration-500 animate-[spin_55s_linear_infinite]" />
          <div className="w-[82%] h-[82%] rounded-full bg-gradient-to-b from-[#0F0F14] to-[#0A0A0F] border border-white/5 flex items-center justify-center text-white/40 text-4xl md:text-5xl shadow-[0_20px_40px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 group-hover:border-white/30">
            <SiExpress />
          </div>
        </div>
      </div>

      {/* ================= CORE CONTENT MATRIX ================= */}
      <div className="relative z-10 text-center w-full max-w-[1400px] px-4 flex flex-col items-center pointer-events-none">
        
        {/* 🛠️ Applied font-mono class to cleanly enforce JetBrains Mono styling */}
        <h1 className="text-[2.2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.8rem] xl:text-[7.6rem] font-black leading-[1.08] tracking-tighter text-white m-0 uppercase select-none w-full max-w-[1250px] py-4">
          <span className="block title-line will-change-transform drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            BUILDING
          </span>
          <span className="block title-line text-transparent bg-clip-text bg-gradient-to-r from-[#00C2FF] via-white to-[#00C2FF] bg-[size:200%] animate-[shimmer_8s_linear_infinite] will-change-transform py-1.5 drop-shadow-[0_0_25px_rgba(0,194,255,0.15)]">
            SCALABLE
          </span>
          <span className="block title-line title-lock-end will-change-transform text-[#FF6C37] drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)] whitespace-nowrap">
            <span className="text-[#00C2FF] font-light font-mono mr-1.5 sm:mr-4 select-none">&lt;</span>
            APPLICATIONS
            <span className="text-[#00C2FF] font-light font-mono ml-1.5 sm:ml-4 select-none">/&gt;</span>
          </span>
        </h1>

        {/* Action targets with crisp typography definition */}
        <div className="flex flex-col gap-4 w-full max-w-[240px] mt-12 md:mt-16 pointer-events-auto md:flex-row md:max-w-none md:justify-center md:gap-6">
          <a href="#projects" className="btn w-full md:w-auto bg-white text-black font-extrabold text-xs md:text-sm uppercase tracking-wide py-4 px-12 rounded-xl text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]">
            VIEW PROJECTS
          </a>
          <a href="#about" className="btn w-full md:w-auto bg-[#FF6C37] text-white font-extrabold text-xs md:text-sm uppercase tracking-wide py-4 px-12 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(255,108,55,0.25)]">
            MERN SPECIALIST
          </a>
        </div>
      </div>

      {/* Bottom Layout Anchor Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-t from-[#070709] to-transparent pointer-events-none" />
    </section>
  );
};

export default Home;