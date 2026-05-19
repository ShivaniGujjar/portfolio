import React from 'react';
import ProjectCard from '../components/ProjectCard';
import tasksyncImg from '../assets/tasksync.png';
import unravelImg from '../assets/unravel.png'; 
import creatorflowImg from '../assets/creatorflow.png';

const projectsData = [
  { 
    id: "1", 
    title: 'TaskSync', 
    description: 'MERN stack Kanban system with real-time drag-and-drop orchestration and JWT security.', 
    techStack: ['React', 'Redux', 'MongoDB', 'Node.js', 'Tailwind', 'DND', 'JWT'], 
    imageSrc: tasksyncImg, 
    repoLink: 'https://github.com/ShivaniGujjar/tasksync', 
    liveLink: 'https://tasksync-delta.vercel.app/', 
    themeColor: '#00C2FF' 
  },
  { 
    id: "2", 
    title: 'Unravel', 
    description: 'AI assistant designed to decipher complex neural thoughts using advanced GenAI models.', 
    techStack: ['React', 'GenAI', 'Tailwind', 'Framer', 'Redux'], 
    imageSrc: unravelImg, 
    repoLink: 'https://github.com/ShivaniGujjar/unravel', 
    liveLink: 'https://unravel-liart.vercel.app/', 
    themeColor: '#FF6C37' 
  },
  {
    id: "3", 
    title: "CreatorFlow",
    description: "An AI-driven content roadmapping and scripting workspace generating automated production loops, structural idea-tracking, and dynamic generation models for creators.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "LangChain", "Gemini", "Mistral"],
    imageSrc: creatorflowImg,
    repoLink: "https://github.com/ShivaniGujjar/creatorflow",
    liveLink: "https://creatorflow.vercel.app/",
    themeColor: "#FF4D00" 
  }
];

function Projects() {
  return (
    <section 
      className="w-full max-w-[1300px] mx-auto px-6 sm:px-8 pt-20 pb-20 relative bg-brand-black overflow-hidden mt-0 md:pt-32 md:pb-28"
      style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}
    >
      {/* ⚡ Futuristic Top Boundary Line */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 🛠️ SECTION HEADER CONTEXT GRID */}
      <div className="text-center mb-16 md:mb-24 flex flex-col items-center z-10 relative">
        <span className="font-mono text-[0.65rem] tracking-[0.3em] font-black text-[#00C2FF] uppercase mb-4 block px-3 py-1 bg-white/5 border border-white/10 rounded-full">
          PRODUCTION REGISTRY
        </span>
        
        {/* 🛠️ FIXED OVERFLOW CLIPPING: Added py-2 safety padding and fine-tuned line-height bounds */}
        <h2 className="text-[2.5rem] sm:text-[3.2rem] md:text-[clamp(2.2rem,6vw,4rem)] text-white font-black leading-[1.15] tracking-tight sm:tracking-tighter uppercase m-0 py-2">
          RECENT <span className="text-brand-blue-bright drop-shadow-[0_0_20px_rgba(0,194,255,0.2)]">BUILDS</span>
        </h2>

        <p className="text-[#888] md:text-white/40 text-sm md:text-[1rem] mt-3 px-2 max-w-[540px] font-medium leading-relaxed">
          Engineered solutions optimizing high-efficiency application stacks, bidirectional websockets, and modular multi-agent pipelines.
        </p>

        <div className="w-10 h-1 bg-brand-blue-bright mt-5 rounded-full shadow-[0_0_15px_rgba(0,194,255,0.3)]" />
      </div>
      
      {/* 🏁 100% EVEN SYMMETRIC SHORELINE GRID MATRIX */}
      <div className="grid grid-cols-1 gap-16 md:gap-12 max-w-[550px] md:max-w-[1150px] mx-auto lg:grid-cols-2 items-start">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="w-full relative group"
          >
            {/* Dynamic ambient hover glow */}
            <div 
              className="absolute -inset-1 rounded-[32px] opacity-0 blur-xl group-hover:opacity-20 transition duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle at center, ${project.themeColor}30, transparent 70%)`
              }}
            />
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;