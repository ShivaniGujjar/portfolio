import React, { useState, useEffect } from 'react';
import SkillCard from '../components/SkillCard';
import { 
  SiReact, SiNodedotjs, SiMongodb, 
  SiTailwindcss, SiExpress, SiGit, SiFramer, SiJavascript 
} from 'react-icons/si';

const Capabilities = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const skillData = [
    { label: "Frontend", icons: [<SiTailwindcss key="tw"/>, <SiJavascript key="js"/>, <SiReact key="rc"/>], title: "UI ARCHITECTURE", desc: "Crafting high-performance MERN interfaces.", color: "#00C2FF", percentage: 90 },
    { label: "Backend", icons: [<SiNodedotjs key="nd"/>, <SiExpress key="ex"/>, <SiMongodb key="mg"/>], title: "SYSTEM LOGIC", desc: "Engineered scalable server environments.", color: "#00ED64", percentage: 85 },
    { label: "Workflow", icons: [<SiGit key="gt"/>, <SiFramer key="fr"/>], title: "DEV WORKFLOW", desc: "Optimized deployment & animations.", color: "#FF6C37", percentage: 80 }
  ];

  return (
    // 🛠️ pt-16 ensures mobile has a dedicated structural division from the Bento Grid bounds
    <section className="w-full max-w-[1250px] mx-auto px-8 pb-20 relative bg-brand-black pt-16 md:pt-24" id="capabilities">
      
      {/* ⚡ FUTURISTIC SECTION SEPARATOR: Explicitly cuts the black hole space on mobile viewports */}
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent md:hidden" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-[#00C2FF]/30 to-transparent md:hidden" />

      {/* 📍 THE STICKY STACKING ENGINE */}
      <div className="relative mt-0 md:mt-10">
        <div className="md:sticky md:top-[100px] z-5 text-center mb-20 md:mb-40">
          
          {/* 🛠️ FIXED OVERFLOW CLIPPING & STANDARDIZED HEADINGS PATHWAY */}
          <h2 className="text-[2.5rem] sm:text-[3.2rem] md:text-[clamp(2.2rem,6vw,4rem)] text-white font-black leading-[1.15] tracking-tight sm:tracking-tighter uppercase m-0 py-2">
            DETAILED <span className="text-brand-blue-bright drop-shadow-[0_0_20px_rgba(0,194,255,0.2)]">CAPABILITIES</span>
          </h2>
          
          <div className="w-10 h-1 bg-brand-blue-bright mx-auto mt-5 rounded-full shadow-[0_0_15px_rgba(0,194,255,0.3)]"></div>
        </div>

        <div className="flex flex-col relative z-10 gap-[30vh] mt-0 md:-mt-[100px] [&>div:last-child]:mb-8">
          {skillData.map((skill, index) => (
            <SkillCard key={index} index={index} {...skill} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Capabilities;