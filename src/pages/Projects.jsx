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
    description: "An AI-driven content roadmapping and scripting workspace generating automated production loops.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "LangChain", "Gemini", "Mistral"],
    imageSrc: creatorflowImg,
    repoLink: "https://github.com/ShivaniGujjar/creatorflow",
    liveLink: "https://creatorflow-black.vercel.app/",
    themeColor: "#FF4D00" 
  }
];

function Projects() {
  return (
    // 🚀 ID YAHAN ADD KI HAI: id="projects"
    <section 
      id="projects"
      className="w-full relative bg-brand-black pt-24 md:pt-32 pb-20 overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}
    >
      {/* ⚡ Futuristic Top Boundary Line */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* INNER CONTENT WRAPPER */}
      <div className="w-full max-w-[1250px] mx-auto px-6 sm:px-8">
        
        {/* 🛠️ HEADER */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <span className="font-mono text-[0.65rem] tracking-[0.3em] font-black text-[#00C2FF] uppercase mb-4 block px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            PRODUCTION REGISTRY
          </span>
          <h2 className="text-[2.5rem] sm:text-[3.2rem] md:text-[clamp(2.2rem,6vw,4rem)] text-white font-black leading-[1.15] tracking-tight uppercase m-0 py-2">
            RECENT <span className="text-brand-blue-bright drop-shadow-[0_0_20px_rgba(0,194,255,0.2)]">BUILDS</span>
          </h2>
          <p className="text-[#888] text-sm md:text-[1rem] mt-3 px-2 max-w-[540px] font-medium leading-relaxed">
            Engineered solutions optimizing high-efficiency application stacks, bidirectional websockets, and modular multi-agent pipelines.
          </p>
          <div className="w-10 h-1 bg-brand-blue-bright mt-5 rounded-full shadow-[0_0_15px_rgba(0,194,255,0.3)]" />
        </div>
        
        {/* 🏁 EVEN SYMMETRIC GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 justify-items-center">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="w-full max-w-[420px] relative group"
            >
              <div 
                className="absolute -inset-1 rounded-[32px] opacity-0 blur-xl group-hover:opacity-20 transition duration-700 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${project.themeColor}30, transparent 70%)` }}
              />
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;