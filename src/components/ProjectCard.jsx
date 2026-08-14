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

const techData = {
  'REACT': { icon: <SiReact />, color: '#00C2FF' },
  'NODE.JS': { icon: <SiNodedotjs />, color: '#339933' },
  'MONGODB': { icon: <SiMongodb />, color: '#47A248' },
  'MONGOOSE': { icon: <SiMongoose />, color: '#FF6C37' },
  'EXPRESS': { icon: <SiExpress />, color: '#ffffff' },
  'SOCKET.IO': { icon: <SiSocketdotio />, color: '#ffffff' },
  'REDIS': { icon: <SiRedis />, color: '#FF6C37' },
  'SUPABASE': { icon: <SiSupabase />, color: '#00C2FF' },
  'REDUX': { icon: <SiRedux />, color: '#764ABC' },
  'TAILWIND': { icon: <SiTailwindcss />, color: '#00C2FF' },
  'JWT': { icon: <SiJsonwebtokens />, color: '#FF6C37' },
  'DND': { icon: <HiCode />, color: '#FFF' },
  'FRAMER': { icon: <SiFramer />, color: '#FF6C37' },
  'LANGCHAIN': { icon: <SiLangchain />, color: '#00C2FF' },
  'GENAI': { icon: <LuBrainCircuit />, color: '#FF6C37' },
  'GEMINI': { icon: <SiGoogle />, color: '#00C2FF' },
  'MISTRAL': { icon: <SiOpenai />, color: '#FF6C37' },
  'VITE': { icon: <SiReact />, color: '#00C2FF' },
  'LENIS': { icon: <SiFramer />, color: '#00C2FF' }
};

const ProjectCard = ({
  id = "beam",
  title = "BEAM",
  description = "Automated deployment engine that compiles and hosts frontend apps directly from public GitHub repositories.",
  techStack = ["REACT", "EXPRESS", "SOCKET.IO", "REDIS", "SUPABASE"],
  imageSrc = "/beam-thumbnail.png",
  repoLink = "https://github.com/ShivaniGujjar/beam",
  liveLink = "https://beam-sable.vercel.app/",
  videoSrc,
  isFreelance = false,
  year = "2026"
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const accentColor = isFreelance ? "#00C2FF" : "#FF6C37";

  return (
    <>
      <div
        className="group relative flex flex-col justify-between bg-white/[0.03] border border-white/[0.08] backdrop-blur-md rounded-2xl p-5 sm:p-6 w-full max-w-[460px] transition-colors duration-300 hover:border-white/[0.15]"
      >

        <div>
          {/* Meta bar — same dot-label pattern as About / Capabilities, not shouty caps */}
          <div className="flex items-center justify-between text-xs text-white/40 mb-4">
            <span className="flex items-center gap-1.5" style={{ color: accentColor }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
              {isFreelance ? 'Freelance work' : 'Personal build'}
            </span>
            <span className="text-white/30">{year}</span>
          </div>

          {/* Thumbnail */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-white/[0.02] border border-white/[0.06] mb-5">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />

            {liveLink && (
              <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[10px] font-medium text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-pulse" />
                live
              </div>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-semibold text-white/95 tracking-tight mb-2">
            {title}
          </h3>

          <p className="text-[13px] text-white/50 leading-relaxed mb-6 line-clamp-2">
            {description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
            {techStack.map((tech, i) => {
              const techKey = tech.toUpperCase();
              const config = techData[techKey] || { icon: <LuBrainCircuit />, color: '#00C2FF' };
              return (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-white/[0.03] border border-white/[0.06] rounded-md text-[11px] text-white/60"
                >
                  <span style={{ color: config.color }}>{config.icon}</span>
                  {tech}
                </span>
              );
            })}
          </div>

          {/* Buttons — rounded-full, matches hero CTA family instead of a one-off rounded-xl */}
          <div className="flex items-center justify-between gap-2.5 pt-2">
            {liveLink ? (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                style={{ '--hover-accent': accentColor }}
                className="flex-1 bg-white text-black text-sm font-medium py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 group/btn hover:bg-[var(--hover-accent)]"
              >
                <span>Visit project</span>
                <HiOutlineExternalLink size={14} className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            ) : (
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex-1 bg-white text-black hover:bg-[#00C2FF] text-sm font-medium py-2.5 px-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer"
              >
                <span>Watch demo</span>
                <HiPlay size={14} />
              </button>
            )}

            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noreferrer"
                title="Source code"
                className="p-2.5 bg-white/[0.04] border border-white/[0.08] hover:border-white/20 text-white/60 hover:text-white rounded-full transition-colors duration-200"
              >
                <HiCode size={15} />
              </a>
            )}
          </div>
        </div>

      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isVideoOpen && (
            <div
              onClick={() => setIsVideoOpen(false)}
              className="fixed inset-0 z-[999999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-[#0a0a0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl cursor-default"
              >
                <div className="px-5 py-3 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs text-white/50">{title} — demo preview</span>
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="p-1 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <HiX size={16} />
                  </button>
                </div>

                <div className="w-full aspect-video bg-black flex items-center justify-center">
                  <video
                    src={videoSrc}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default ProjectCard;