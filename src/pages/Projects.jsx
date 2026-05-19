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
    <section id="projects" className="w-full relative bg-[#050507] pt-24 pb-20">
      <div className="w-full max-w-[1250px] mx-auto px-6">
        
        {/* 🛠️ HEADER: MATCHED EXACTLY WITH SCREENSHOT */}
        <div className="text-center mb-16 flex flex-col items-center">
          
          {/* Pill Badge */}
          <span className="font-mono text-[0.6rem] tracking-[0.2em] font-bold text-[#00C2FF] uppercase mb-6 px-4 py-1 border border-white/10 rounded-full inline-block">
            PRODUCTION REGISTRY
          </span>
          
          {/* Heading with White/Cyan split */}
          <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-black leading-[1.1] tracking-tighter uppercase m-0 py-2">
            <span className="text-white">RECENT</span> <span className="text-[#00C2FF]">BUILDS</span>
          </h2>
          
          {/* Subtext */}
          <p className="text-[#888] text-sm md:text-[1rem] mt-6 px-2 max-w-[540px] font-medium leading-relaxed">
            Engineered solutions optimizing high-efficiency application stacks, bidirectional websockets, and modular multi-agent pipelines.
          </p>

          {/* Cyan Dash Divider */}
          <div className="w-12 h-1 bg-[#00C2FF] mt-8 rounded-full" />
        </div>
        
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-items-center">
          {projectsData.map((project) => (
            <div key={project.id} className="w-full max-w-[500px]">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;