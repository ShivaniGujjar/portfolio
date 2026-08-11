import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from '../components/ProjectCard';
import tasksyncImg from '../assets/tasksync.png';
import unravelImg from '../assets/unravel.png'; 
import creatorflowImg from '../assets/creatorflow.png';
import beamImg from '../assets/beam.png'

gsap.registerPlugin(ScrollTrigger);

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
  },
  {
    id: "beam",
    title: "BEAM – Deployment Platform",
    description: "Mini-Vercel clone built with distributed build workers, Redis Pub/Sub log streaming, Supabase Storage, and reverse proxy routing.",
    techStack: ["React", "Node.js", "Express", "Socket.io", "Redis", "Supabase"],
    imageSrc: beamImg, // Ya apni path imageSrc daalo
    repoLink: "https://github.com/ShivaniGujjar/beam",
    liveLink: "https://beam-sable.vercel.app/",
  }
];

function Projects() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const projectsTrack = sectionRef.current;

      // Dynamic calculation for full horizontal scroll including all 4 cards
      const getScrollAmount = () => {
        const trackWidth = projectsTrack.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Total negative translation needed to reveal the last card completely
        return -(trackWidth - viewportWidth + 120);
      };

      const animation = gsap.to(projectsTrack, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${sectionRef.current.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });

      // Recalculate GSAP positions after all images are fully loaded
      window.addEventListener('load', () => ScrollTrigger.refresh());
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={triggerRef} id="projects" className="w-full relative bg-[#050507] overflow-hidden">
      <div className="min-h-screen flex flex-col justify-center py-12">
        
        {/* HEADER */}
        <div className="w-full max-w-[1250px] mx-auto px-6 text-center mb-8 shrink-0">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1] tracking-tighter uppercase m-0">
            <span className="text-white">RECENT</span> <span className="text-[#00C2FF]">BUILDS</span>
          </h2>
          <div className="w-12 h-1 bg-[#00C2FF] mt-4 rounded-full mx-auto" />
        </div>
        
        {/* HORIZONTAL KINETIC TRACK */}
        <div 
          ref={sectionRef} 
          className="flex flex-nowrap gap-8 md:gap-12 px-6 md:px-20 w-max items-center pr-24 md:pr-36"
        >
          {projectsData.map((project) => (
            <div key={project.id} className="w-[85vw] sm:w-[420px] md:w-[450px] shrink-0">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;