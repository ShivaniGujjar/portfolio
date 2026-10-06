import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineExternalLink, HiCode, HiPlay, HiX } from 'react-icons/hi';
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiSocketdotio,
  SiRedux, SiTailwindcss, SiFramer, SiJsonwebtokens,
  SiLangchain, SiGoogle, SiOpenai, SiMongoose, SiRedis, SiSupabase
} from 'react-icons/si';
import { LuBrainCircuit } from 'react-icons/lu';

import tasksyncImg from '../assets/tasksync.png';
import unravelImg from '../assets/unravel.png';
import creatorflowImg from '../assets/creatorflow.png';
import beamImg from '../assets/beam.png';
import akshayImg from '../assets/akshay.png'

const techData = {
  'REACT': { icon: <SiReact />, color: '#00C2FF' },
  'NODE.JS': { icon: <SiNodedotjs />, color: '#339933' },
  'MONGODB': { icon: <SiMongodb />, color: '#47A248' },
  'MONGOOSE': { icon: <SiMongoose />, color: '#FF6C37' },
  'EXPRESS': { icon: <SiExpress /> },
  'SOCKET.IO': { icon: <SiSocketdotio /> },
  'REDIS': { icon: <SiRedis />, color: '#FF6C37' },
  'SUPABASE': { icon: <SiSupabase />, color: '#00C2FF' },
  'REDUX': { icon: <SiRedux />, color: '#764ABC' },
  'TAILWIND': { icon: <SiTailwindcss />, color: '#00C2FF' },
  'JWT': { icon: <SiJsonwebtokens />, color: '#FF6C37' },
  'DND': { icon: <HiCode /> },
  'FRAMER': { icon: <SiFramer />, color: '#FF6C37' },
  'LANGCHAIN': { icon: <SiLangchain />, color: '#00C2FF' },
  'GENAI': { icon: <LuBrainCircuit />, color: '#FF6C37' },
  'GEMINI': { icon: <SiGoogle />, color: '#00C2FF' },
  'MISTRAL': { icon: <SiOpenai />, color: '#FF6C37' },
  'VITE': { icon: <SiReact />, color: '#00C2FF' },
  'LENIS': { icon: <SiFramer />, color: '#00C2FF' }
};

const ProjectCard = ({
  title = "BEAM",
  description = "Automated deployment engine that compiles and hosts frontend apps directly from public GitHub repositories.",
  techStack = ["REACT", "EXPRESS", "SOCKET.IO", "REDIS", "SUPABASE"],
  imageSrc = "/beam-thumbnail.png",
  repoLink = "",
  liveLink = "",
  isFreelance = false,
  year = "2026",
  statusBadge = ""
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const accentColor = isFreelance ? "#00C2FF" : "#FF6C37";

  return (
    <>
      <div
        className="group relative flex flex-col justify-between bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.09] dark:border-white/[0.08] backdrop-blur-md rounded-2xl p-5 sm:p-6 w-full max-w-[460px] transition-colors duration-300 hover:border-black/[0.15] dark:border-white/[0.15]"
      >
        <div>
          {/* Meta bar */}
          <div className="flex items-center justify-between text-xs text-black/40 dark:text-white/40 mb-4">
            <span className="flex items-center gap-1.5" style={{ color: accentColor }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
              {isFreelance ? 'Freelance work' : 'Personal build'}
            </span>
            <div className="flex items-center gap-2">
              {statusBadge && (
                <span className="px-2 py-0.5 text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
                  {statusBadge}
                </span>
              )}
              <span className="text-black/30 dark:text-white/30">{year}</span>
            </div>
          </div>

          {/* Thumbnail */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.07] dark:border-white/[0.06] mb-5">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />

            {liveLink && (
              <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-[10px] font-medium text-black/75 dark:text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                live
              </div>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-black/90 dark:text-white/95 tracking-tight mb-2">
            {title}
          </h3>

          <p className="text-[13px] text-black/45 dark:text-white/50 leading-relaxed mb-6 line-clamp-2">
            {description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-black/[0.07] dark:border-white/[0.06]">
            {techStack.map((tech, i) => {
              const techKey = tech.toUpperCase();
              const config = techData[techKey] || { icon: <LuBrainCircuit />, color: '#00C2FF' };
              return (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.07] dark:border-white/[0.06] rounded-md text-[11px] text-black/55 dark:text-white/60"
                >
                  <span style={{ color: config.color }}>{config.icon}</span>
                  {tech}
                </span>
              );
            })}
          </div>

          {/* Action buttons / Status footer */}
          <div className="flex items-center justify-between gap-2.5 pt-2">
            {liveLink ? (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                style={{ '--hover-accent': accentColor }}
                className="flex-1 bg-black text-white dark:bg-white dark:text-black text-sm font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 group/btn hover:bg-[var(--hover-accent)] hover:text-black"
              >
                <span>Visit project</span>
                <HiOutlineExternalLink size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            ) : (
              <div className="flex-1 bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-black/50 dark:text-white/50 text-xs font-mono py-2.5 px-4 rounded-xl flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                <span>Under Development</span>
              </div>
            )}

            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noreferrer"
                title="Source code"
                className="p-2.5 bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.09] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20 text-black/55 dark:text-white/60 hover:text-black dark:hover:text-white rounded-full transition-colors duration-200"
              >
                <HiCode size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const projectsData = [
  {
    id: "freelance-video-portfolio",
    title: 'Akshay Portfolio – Video Editor',
    isFreelance: true,
    year: "2026",
    description: 'Custom client portfolio engineered for a professional video editor. Features GSAP kinetic layouts, smooth scrolling, and cinematic media presentation.',
    techStack: ['REACT', 'VITE', 'TAILWIND', 'GSAP', 'FRAMER', 'LENIS'],
    imageSrc: akshayImg, // Replace with your actual preview asset later
    repoLink: '',
    liveLink: 'https://akshayshrivastava.com/'
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

export default function Projects() {
  return (
    <section id="projects" className="w-full relative bg-[#FAFAF9] dark:bg-[#050507] py-20 sm:py-28 border-t border-black/[0.06] dark:border-white/[0.05]">
      <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-black/90 dark:text-white/95">
            Things I've <span className="text-[#00C2FF] dark:text-[#00C2FF]">actually shipped</span>
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