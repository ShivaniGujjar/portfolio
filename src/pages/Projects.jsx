import React from 'react';
import ProjectCard from '../components/ProjectCard';

import tasksyncImg from '../assets/tasksync.png';
import unravelImg from '../assets/unravel.png';
import creatorflowImg from '../assets/creatorflow.png';
import beamImg from '../assets/beam.png';
import akshayImg from '../assets/akshay.jpeg';

const projectsData = [
  {
    id: "freelance-video-portfolio",
    title: 'Akshay Portfolio – Video Editor',
    isFreelance: true,
    year: "2026",
    description: 'Custom client portfolio engineered for a senior video editor at Masters Union. Features Lenis smooth scrolling, GSAP kinetic layouts, and React Player media streaming.',
    techStack: ['REACT', 'VITE', 'TAILWIND', 'GSAP', 'FRAMER', 'LENIS'],
    imageSrc: akshayImg,
    repoLink: '',
    liveLink: 'https://akshayportfolio.com'
  },
  {
    id: "1",
    title: 'TaskSync',
    isFreelance: false,
    year: "2025",
    description: 'MERN stack Kanban workspace featuring real-time drag-and-drop board orchestration and JWT-secured user sessions.',
    techStack: ['REACT', 'REDUX', 'MONGODB', 'NODE.js', 'TAILWIND', 'DND', 'JWT'],
    imageSrc: tasksyncImg,
    repoLink: 'https://github.com/ShivaniGujjar/tasksync',
    liveLink: 'https://tasksync-delta.vercel.app/'
  },
  {
    id: "2",
    title: 'Unravel',
    isFreelance: false,
    year: "2025",
    description: 'AI assistant application built to synthesize and answer complex queries using generative AI models.',
    techStack: ['REACT', 'GENAI', 'TAILWIND', 'FRAMER', 'REDUX'],
    imageSrc: unravelImg,
    repoLink: 'https://github.com/ShivaniGujjar/unravel',
    liveLink: 'https://unravel-liart.vercel.app/'
  },
  {
    id: "3",
    title: "CreatorFlow",
    isFreelance: false,
    year: "2026",
    description: "Content roadmapping platform automating creator scripts and production workflows using multi-model GenAI integration.",
    techStack: ["REACT", "NODE.JS", "MONGODB", "SOCKET.IO", "LANGCHAIN", "GEMINI", "MISTRAL"],
    imageSrc: creatorflowImg,
    repoLink: "https://github.com/ShivaniGujjar/creatorflow",
    liveLink: "https://creatorflow-black.vercel.app/"
  },
  {
    id: "beam",
    title: "BEAM – Deployment Engine",
    isFreelance: false,
    year: "2026",
    description: "Automated deployment engine with distributed build workers, Redis Pub/Sub log streaming, and Supabase storage.",
    techStack: ["REACT", "NODE.JS", "EXPRESS", "SOCKET.IO", "REDIS", "SUPABASE"],
    imageSrc: beamImg,
    repoLink: "https://github.com/ShivaniGujjar/beam",
    liveLink: "https://beam-sable.vercel.app/"
  }
];

function Projects() {
  return (
    <section id="projects" className="w-full relative bg-[#050507] py-20 sm:py-28 border-t border-white/[0.05]">

      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">

        {/* Header — heading only */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white/95">
            Things I've <span className="text-[#00C2FF]">actually shipped</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 justify-items-center">
          {projectsData.map((project) => (
            <div key={project.id} className="w-full flex justify-center">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;