import React from 'react';
import SkillCard from '../components/SkillCard';

const Capabilities = () => {
  const skillData = [
    { 
      label: "Frontend Systems", 
      title: "UI ARCHITECTURE", 
      color: "#00C2FF", 
      highlights: [
        { title: "Fluid Custom Layouts", desc: "Pixel-perfect responsive architecture built with Tailwind CSS & CSS Grid." },
        { title: "60FPS Animation Physics", desc: "Silky smooth timeline controls powered by GSAP & Framer Motion." },
        { title: "Predictable State Sync", desc: "Centralized client-side data store with efficient render cycles." }
      ]
    },
    { 
      label: "Backend & Systems", 
      title: "SYSTEM LOGIC", 
      color: "#00ED64", 
      highlights: [
        { title: "LangChain AI Workflows", desc: "Dynamic prompt chaining, embeddings, and intelligent contextual responses." },
        { title: "Socket.io Event Gateway", desc: "Real-time, bi-directional socket events for low-latency communication." },
        { title: "Mongoose Database Models", desc: "Indexed MongoDB collections engineered for high-throughput queries." }
      ]
    },
    { 
      label: "Engineering Standards", 
      title: "DEV WORKFLOW", 
      color: "#FF6C37", 
      highlights: [
        { title: "Structured Version Control", desc: "Git feature branching, PR reviews, and atomic commit practices." },
        { title: "Modular Component Design", desc: "Reusable UI primitives adhering strictly to DRY engineering principles." },
        { title: "Automated Deployments", desc: "Continuous integration pipelines synced with production GitHub branches." }
      ]
    }
  ];

  return (
    <section className="w-full relative bg-[#050507] pt-12 pb-20" id="capabilities">
      
      {/* 🏆 HEADING */}
      <div className="w-full text-center mb-16">
        <h2 className="w-full text-[clamp(2.5rem,5vw,5.5rem)] font-black leading-[1] tracking-tighter uppercase m-0 px-4">
          <span className="text-white">DETAILED</span> <span className="text-[#00C2FF]">CAPABILITIES</span>
        </h2>
        <div className="w-16 h-[3px] bg-[#00C2FF] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* STICKY STACKING ENGINE */}
      <div className="flex flex-col relative z-10 gap-[15vh] max-w-[1250px] mx-auto px-4 md:px-8">
        {skillData.map((skill, index) => (
          <SkillCard key={index} index={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Capabilities;