import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { HiArrowUpRight } from 'react-icons/hi2';
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiJavascript, SiRedux, SiGit
} from 'react-icons/si';

const coreSkills = [
  { name: 'React', icon: <SiReact />, color: '#00C2FF' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: '#FFFFFF' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#00C2FF' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
  { name: 'Git', icon: <SiGit />, color: '#FF6C37' },
];

// A quiet terminal-style line. This is the one "signature" moment on the page —
// everything else stays deliberately calm around it.
const WhoAmI = () => {
  const [typed, setTyped] = useState('');
  const full = 'whoami';

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(full.slice(0, i));
      if (i === full.length) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fade-in flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-xs sm:text-[13px] text-white/40 mb-5 sm:mb-6">
      
    </div>
  );
};

const Home = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.fade-in',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power2.out', delay: 0.1 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-[90vh] bg-[#050507] text-white flex flex-col justify-center px-5 sm:px-12 lg:px-24 pt-24 sm:pt-28 pb-16 sm:pb-20 select-none overflow-hidden"
    >
      {/* One soft ambient glow, off to the side — not centered, not doubled */}
      <div className="absolute -top-20 -right-40 w-[36vw] h-[36vw] bg-[#00C2FF]/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-[760px] mx-auto flex flex-col items-start relative z-10">

        <WhoAmI />

        {/* Plain name line — no badge, no icon, just who you are */}
        <p className="fade-in text-sm text-white/45 mb-4">
          Hey, I'm <span className="text-white/70">Shivani</span> - a fullstack developer based in India.
        </p>

        {/* Sentence-case, mixed weight — reads like someone said it, not shouted it */}
        <h1 className="fade-in text-[1.75rem] xs:text-[2rem] sm:text-[2.6rem] md:text-[3.1rem] font-semibold tracking-tight leading-[1.25] sm:leading-[1.2] mb-4 sm:mb-5 text-white/95">
          I build <span className="text-[#00C2FF]">fullstack</span> apps that
          feel <span className="text-[#FF6C37]">simple</span> to use.
        </h1>

        <p className="fade-in text-sm sm:text-base text-white/50 max-w-[520px] leading-relaxed mb-8 sm:mb-10">
          MERN stack, mostly. I like taking a rough idea and turning it into
          something that actually works end to end — backend, UI, the small
          details in between.
        </p>

        {/* Buttons: no sliding text trick, no drop shadow theatrics */}
        <div className="fade-in flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 sm:mb-14">
          <a
            href="#projects"
            className="group inline-flex items-center gap-1.5 bg-white text-black text-[13px] sm:text-sm font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg transition-colors duration-200 hover:bg-[#00C2FF]"
          >
            See my work
            <HiArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] sm:text-sm font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg text-white/70 border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors duration-200 hover:text-white hover:border-white/20"
          >
            Resume
          </a>
        </div>

        {/* Quiet divider — same rhythm as the rest of the site, not a hard rule */}
        <div className="fade-in w-full h-px bg-white/[0.07] mb-8 sm:mb-10" />

        {/* Individual glass chips — each tool sits in its own soft frosted pill */}
        <div className="fade-in w-full">
          <span className="text-[10px] sm:text-[11px] text-white/35 tracking-wide mb-3 sm:mb-4 block uppercase">
            Tools I reach for most
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {coreSkills.map((skill, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-[13px] text-white/70 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md transition-colors duration-200 hover:text-white hover:border-white/20 hover:bg-white/[0.05]"
              >
                <span style={{ color: skill.color }} className="text-sm sm:text-base opacity-90">{skill.icon}</span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;