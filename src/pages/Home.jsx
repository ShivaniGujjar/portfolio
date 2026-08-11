import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
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
    <div className="font-outfit text-lg sm:text-3xl font-black text-white tracking-tight leading-none inline-flex items-center">
      <span ref={numRef}>0</span>
      <span className={colorClass}>{suffix}</span>
    </div>
  );
};

// ==========================================
// 🚀 COMPACT RESPONSIVE JACKPOT BUTTON
// ==========================================
const JackpotButton = ({ text, href, isPrimary, target, rel }) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`group relative h-[42px] sm:h-[56px] w-full max-w-[240px] sm:w-[175px] overflow-hidden rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] transition-all duration-300 flex items-center justify-center border select-none shrink-0 ${
        isPrimary
          ? "bg-white text-black border-white hover:bg-[#FF6C37] hover:border-[#FF6C37] hover:text-white shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          : "bg-white/[0.03] text-white border-white/10 hover:border-white/30 hover:bg-white/5"
      }`}
    >
      <div className="flex flex-col h-[42px] sm:h-[56px] w-full items-center transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[42px] sm:group-hover:-translate-y-[56px]">
        <span className="flex h-[42px] sm:h-[56px] shrink-0 items-center justify-center w-full">{text}</span>
        <span className="flex h-[42px] sm:h-[56px] shrink-0 items-center justify-center w-full">{text}</span>
      </div>
    </a>
  );
};

// ==========================================
// 🏠 PERFECTLY SPACED HERO SECTION
// ==========================================
const Home = () => {
  const containerRef = useRef(null);
  const [totalCommits, setTotalCommits] = useState(150);

  useEffect(() => {
    const fetchGitHubCommits = async () => {
      try {
        const response = await fetch('https://api.github.com/search/commits?q=author:ShivaniGujjar', {
          headers: {
            'Accept': 'application/vnd.github.cloak-preview+json'
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.total_count) {
            setTotalCommits(data.total_count);
          }
        }
      } catch (error) {
        console.error("Error fetching live GitHub commits:", error);
      }
    };

    fetchGitHubCommits();
  }, []);

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
      className="relative w-full h-auto bg-[#020204] flex flex-col justify-start px-3 xs:px-6 sm:px-12 lg:px-20 pt-32 sm:pt-40 pb-10 sm:pb-16 select-none overflow-x-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Background Cyber Pattern & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[85vw] sm:w-[60vw] h-[40vw] sm:h-[35vw] bg-[#00C2FF]/[0.035] rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      {/* 👑 CENTERED HERO BODY */}
      <div className="w-full max-w-[1300px] mx-auto flex flex-col items-center justify-center text-center relative z-10 mt-4 sm:mt-8">
        
        {/* Main Heading */}
        <h1 
          className="w-full font-outfit text-[clamp(2.1rem,8vw,5.8rem)] font-black leading-[0.95] uppercase text-center flex flex-col gap-1 sm:gap-2 tracking-[-0.03em]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="smooth-line text-white [backface-visibility:hidden] will-change-transform">
            BUILDING
          </div>
          
          <div className="smooth-line text-[#00C2FF] [backface-visibility:hidden] will-change-transform drop-shadow-[0_0_25px_rgba(0,194,255,0.25)]">
            SCALABLE
          </div>
          
          <div className="smooth-line text-[#FF6C37] [backface-visibility:hidden] will-change-transform drop-shadow-[0_0_25px_rgba(255,108,55,0.25)]">
            APPLICATIONS
          </div>
        </h1>

        {/* 🔢 HORIZONTAL METRICS BAR */}
        <div className="fade-in w-full max-w-[100%] sm:max-w-4xl mx-auto mt-8 sm:mt-12 flex flex-row items-center justify-around gap-1 sm:gap-0 px-2 xs:px-4 sm:px-8 py-3 sm:py-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl">
          
          {/* Milestone 1 */}
          <div className="flex items-center gap-1.5 xs:gap-2.5 sm:gap-3.5 cursor-default">
            <div className="p-1.5 xs:p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#00C2FF]/10 text-[#00C2FF] border border-[#00C2FF]/20 shadow-[0_0_15px_rgba(0,194,255,0.1)] shrink-0">
              <FiCode className="text-sm xs:text-base sm:text-lg" />
            </div>
            <div className="text-left">
              <CountUpNumber targetNumber={10} colorClass="text-[#00C2FF]" />
              <span className="font-mono text-[7.5px] xs:text-[9px] sm:text-[11px] text-white/50 tracking-wider sm:tracking-[0.2em] uppercase font-bold mt-0.5 block leading-tight">
                Projects <span className="hidden xs:inline">Built</span>
              </span>
            </div>
          </div>

          <div className="h-6 sm:h-8 w-[1px] bg-white/10 shrink-0" />

          {/* Milestone 2 */}
          <div className="flex items-center gap-1.5 xs:gap-2.5 sm:gap-3.5 cursor-default">
            <div className="p-1.5 xs:p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#FF6C37]/10 text-[#FF6C37] border border-[#FF6C37]/20 shadow-[0_0_15px_rgba(255,108,55,0.1)] shrink-0">
              <FiGitCommit className="text-sm xs:text-base sm:text-lg" />
            </div>
            <div className="text-left">
              <CountUpNumber targetNumber={totalCommits} colorClass="text-[#FF6C37]" />
              <span className="font-mono text-[7.5px] xs:text-[9px] sm:text-[11px] text-white/50 tracking-wider sm:tracking-[0.2em] uppercase font-bold mt-0.5 block leading-tight">
                Github <span className="hidden xs:inline">Commits</span>
              </span>
            </div>
          </div>

          <div className="h-6 sm:h-8 w-[1px] bg-white/10 shrink-0" />

          {/* Milestone 3 */}
          <div className="flex items-center gap-1.5 xs:gap-2.5 sm:gap-3.5 cursor-default">
            <div className="p-1.5 xs:p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-[#27C93F]/10 text-[#27C93F] border border-[#27C93F]/20 shadow-[0_0_15px_rgba(39,201,63,0.1)] shrink-0">
              <FiGlobe className="text-sm xs:text-base sm:text-lg" />
            </div>
            <div className="text-left">
              <CountUpNumber targetNumber={6} colorClass="text-[#27C93F]" />
              <span className="font-mono text-[7.5px] xs:text-[9px] sm:text-[11px] text-white/50 tracking-wider sm:tracking-[0.2em] uppercase font-bold mt-0.5 block leading-tight">
                Live <span className="hidden xs:inline">Deployments</span>
              </span>
            </div>
          </div>

        </div>

        {/* COMPACT BUTTONS & DESCRIPTION */}
        <div className="fade-in flex flex-col items-center gap-3 sm:gap-6 mt-6 sm:mt-10 w-full max-w-2xl mx-auto px-2">
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full">
            <JackpotButton href="#projects" text="VIEW PROJECTS" isPrimary={true} />
            <JackpotButton href="/resume.pdf" text="VIEW RESUME ↗" isPrimary={false} target="_blank" rel="noreferrer" />
            
          </div>

          <p className="font-mono text-[10px] sm:text-xs text-white/50 max-w-md text-center leading-relaxed tracking-wide mt-1">
            Crafting resilient web architecture with performance-first fullstack engineering profiles.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Home;