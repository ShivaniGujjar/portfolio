import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { HiArrowUpRight } from 'react-icons/hi2';
import { SiLeetcode } from 'react-icons/si';
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiJavascript, SiRedux, SiGit
} from 'react-icons/si';

// 👇 Replace with your actual LeetCode username
const LEETCODE_USERNAME = 'shivanibuttargujjar';

const coreSkills = [
  { name: 'React', icon: <SiReact />, color: '#00C2FF' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress /> },
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
    <div className="fade-in flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-xs sm:text-[13px] text-black/40 dark:text-white/40 mb-5 sm:mb-6 transition-colors duration-500">
      
    </div>
  );
};

// Live LeetCode stats, styled to match the Resume button. Falls back to a
// plain link if the stats API is unreachable so the section never looks broken.
const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [status, setStatus] = useState('loading'); // 'loading' | 'done' | 'error'

  useEffect(() => {
    let cancelled = false;

    fetch(`https://leetcode-stats-api.herokuapp.com/${LEETCODE_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (!data || data.status === 'error') throw new Error('not found');
        setStats(data);
        setStatus('done');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => { cancelled = true; };
  }, []);

  // Loading / error states stay a simple single-line pill matching the Resume button
  const compactClasses = "fade-in flex items-center gap-2 sm:gap-2.5 text-[13px] sm:text-sm font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg text-black/65 dark:text-white/70 border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-md transition-colors duration-500 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20";

  // If the API fails or times out, degrade to a simple link — never a broken-looking widget
  if (status === 'error') {
    return (
      <a
        href={`https://leetcode.com/${LEETCODE_USERNAME}`}
        target="_blank"
        rel="noreferrer"
        className={compactClasses}
      >
        <SiLeetcode size={14} className="text-[#FFA116]" />
        LeetCode
      </a>
    );
  }

  if (status === 'loading') {
    return (
      <a
        href={`https://leetcode.com/${LEETCODE_USERNAME}`}
        target="_blank"
        rel="noreferrer"
        className={compactClasses}
      >
        <SiLeetcode size={14} className="text-[#FFA116]" />
        <span className="text-black/35 dark:text-white/35">loading…</span>
      </a>
    );
  }

  // Full card once stats have loaded: summary row + Easy/Medium/Hard breakdown
  return (
    <a
      href={`https://leetcode.com/${LEETCODE_USERNAME}`}
      target="_blank"
      rel="noreferrer"
      className="fade-in flex flex-col gap-2 py-2.5 sm:py-3 px-4 sm:px-5 rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-md transition-colors duration-500 hover:border-black/20 dark:hover:border-white/20"
    >
      <span className="flex items-center gap-2 sm:gap-2.5 text-[13px] sm:text-sm font-medium text-black/65 dark:text-white/70">
        <SiLeetcode size={14} className="text-[#FFA116]" />
        <span className="font-semibold text-black/80 dark:text-white/85">
          {stats.totalSolved}
          <span className="font-normal text-black/35 dark:text-white/35">/{stats.totalQuestions}</span>
        </span>
        <span className="text-black/30 dark:text-white/30">solved</span>
        {typeof stats.ranking === 'number' && (
          <span className="hidden sm:inline text-black/35 dark:text-white/35 text-xs ml-1">
            · Rank {stats.ranking.toLocaleString()}
          </span>
        )}
      </span>

      <span className="flex items-center gap-3 sm:gap-4 text-[11px] font-medium">
        <span className="flex items-center gap-1.5 text-black/45 dark:text-white/45">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00AF9B]" />
          {stats.easySolved}<span className="text-black/25 dark:text-white/25">/{stats.totalEasy}</span> Easy
        </span>
        <span className="flex items-center gap-1.5 text-black/45 dark:text-white/45">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
          {stats.mediumSolved}<span className="text-black/25 dark:text-white/25">/{stats.totalMedium}</span> Med
        </span>
        <span className="flex items-center gap-1.5 text-black/45 dark:text-white/45">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF375F]" />
          {stats.hardSolved}<span className="text-black/25 dark:text-white/25">/{stats.totalHard}</span> Hard
        </span>
      </span>
    </a>
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
      className="relative w-full min-h-[90vh] bg-[#FAFAF9] dark:bg-[#050507] text-black dark:text-white flex flex-col justify-center px-5 sm:px-12 lg:px-24 pt-24 sm:pt-28 pb-16 sm:pb-20 select-none overflow-hidden transition-colors duration-500"
    >
      {/* One soft ambient glow, off to the side — not centered, not doubled */}
      <div className="absolute -top-20 -right-40 w-[36vw] h-[36vw] bg-[#00C2FF]/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-[760px] mx-auto flex flex-col items-start relative z-10">

        

        {/* Plain name line — no badge, no icon, just who you are */}
        <p className="fade-in text-sm text-black/45 dark:text-white/45 mb-4 transition-colors duration-500">
          Hey, I'm <span className="text-black/70 dark:text-white/70 transition-colors duration-500">Shivani</span> - a fullstack developer based in India.
        </p>

        {/* Sentence-case, mixed weight — reads like someone said it, not shouted it */}
        <h1 className="fade-in text-[1.75rem] xs:text-[2rem] sm:text-[2.6rem] md:text-[3.1rem] font-semibold tracking-tight leading-[1.25] sm:leading-[1.2] mb-4 sm:mb-5 text-black/90 dark:text-white/95 transition-colors duration-500">
          I build <span className="text-[#00C2FF] dark:text-[#00C2FF] transition-colors duration-500">fullstack</span> apps that
          feel <span className="text-[#FF6C37] dark:text-[#FF6C37] transition-colors duration-500">simple</span> to use.
        </h1>

        <p className="fade-in text-sm sm:text-base text-black/50 dark:text-white/50 max-w-[520px] leading-relaxed mb-8 sm:mb-10 transition-colors duration-500">
          MERN stack, mostly. I like taking a rough idea and turning it into
          something that actually works end to end - backend, UI and the small
          details in between.
        </p>

        {/* Buttons: no sliding text trick, no drop shadow theatrics */}
        <div className="fade-in flex flex-wrap items-start gap-2.5 sm:gap-3 mb-10 sm:mb-14">
          <a
            href="#projects"
            className="group inline-flex items-center gap-1.5 bg-black text-white dark:bg-white dark:text-black text-[13px] sm:text-sm font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg transition-colors duration-200 hover:bg-[#00C2FF] hover:text-black"
          >
            See my work
            <HiArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="https://docs.google.com/document/d/1uNi8epNTsuL0mG9hMaQtmdGPhNienZEzQX4v00JIY6A/export?format=pdf"
            target="_blank"
            rel="noreferrer"
            className="text-[13px] sm:text-sm font-medium py-2 sm:py-2.5 px-4 sm:px-5 rounded-lg text-black/65 dark:text-white/70 border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-md transition-colors duration-200 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20"
          >
            Resume
          </a>

          <LeetCodeStats />
        </div>

        {/* Quiet divider — same rhythm as the rest of the site, not a hard rule */}
        <div className="fade-in w-full h-px bg-black/[0.08] dark:bg-white/[0.07] mb-8 sm:mb-10 transition-colors duration-500" />

        {/* Individual glass chips — each tool sits in its own soft frosted pill */}
        <div className="fade-in w-full">
          <span className="text-[10px] sm:text-[11px] text-black/35 dark:text-white/35 tracking-wide mb-3 sm:mb-4 block uppercase transition-colors duration-500">
            Tools I reach for most
          </span>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {coreSkills.map((skill, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-[13px] text-black/65 dark:text-white/70 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.09] dark:border-white/[0.08] backdrop-blur-md transition-colors duration-500 hover:text-black dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.05] dark:hover:bg-white/[0.05]"
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