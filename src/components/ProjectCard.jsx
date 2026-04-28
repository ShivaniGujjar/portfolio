import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';
import { HiOutlineExternalLink, HiCode } from 'react-icons/hi';

// 🔍 FIXED IMPORTS: Sirf wahi icons jo library mein exist karte hain
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiSocketdotio, 
  SiRedux, SiTailwindcss, SiFramer, SiJsonwebtokens, 
  SiLangchain, SiGoogle, SiOpenai, SiMarkdown, SiAxios
} from 'react-icons/si';

import { LuSearchCode, LuBrainCircuit } from 'react-icons/lu';

const techData = {
  // TaskSync Bricks
  'REACT': { icon: <SiReact />, color: '#61DAFB' },
  'NODE.JS': { icon: <SiNodedotjs />, color: '#339933' },
  'MONGODB': { icon: <SiMongodb />, color: '#47A248' },
  'EXPRESS': { icon: <SiExpress />, color: '#ffffff' },
  'REDUX': { icon: <SiRedux />, color: '#764ABC' },
  'TAILWIND': { icon: <SiTailwindcss />, color: '#06B6D4' },
  'JWT': { icon: <SiJsonwebtokens />, color: '#FB015B' },
  'AXIOS': { icon: <SiAxios />, color: '#5A29E4' },
  
  // Unravel AI Bricks (AI Agent Stack)
  'LANGCHAIN': { icon: <SiLangchain />, color: '#1C3C3C' },
  'GEMINI': { icon: <SiGoogle />, color: '#4285F4' },    // SiGoogleway ki jagah SiGoogle
  'MISTRAL': { icon: <SiOpenai />, color: '#FF5C00' },   // SiMistral ki jagah SiOpenai (Fallback)
  'TAVILY': { icon: <LuSearchCode />, color: '#5F57FF' },
  'SOCKET.IO': { icon: <SiSocketdotio />, color: '#ffffff' },
  'MARKDOWN': { icon: <SiMarkdown />, color: '#ffffff' },
  'FRAMER': { icon: <SiFramer />, color: '#E10098' }
};

const ProjectCard = ({ id, title, description, techStack, imageSrc, repoLink, liveLink, themeColor }) => {
  return (
    <motion.div 
      className={styles.card} 
      style={{ '--accent': themeColor }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={styles.cardHeader}>
        <div className={styles.dots}>
          <span className={styles.red}></span>
          <span className={styles.yellow}></span>
          <span className={styles.green}></span>
        </div>
        <span className={styles.fileTitle}>BUILD_V{id}.LOG</span>
      </div>

      <div className={styles.imageArea}>
        <img src={imageSrc} alt={title} className={styles.img} />
        <div className={styles.liveBadge}>
          <span className={styles.pulse}></span> LIVE
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.techWall}>
          {techStack.map((tech, i) => {
            const key = tech.toUpperCase();
            // Safety Check: Agar icon nahi milta toh default brain icon dikhayega
            const techInfo = techData[key];
            
            return (
              <span 
                key={i} 
                className={styles.techChip} 
                style={{ '--brand-color': techInfo?.color || '#888' }}
              >
                <span className={styles.techIcon}>
                  {techInfo?.icon || <LuBrainCircuit />}
                </span>
                {tech}
              </span>
            );
          })}
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.readout}>
          <div className={styles.metric}>
            <span>PERFORMANCE</span>
            <strong className={styles.greenText}>98.4%</strong>
          </div>
          <div className={styles.metric}>
            <span>LOAD</span>
            <strong>OPTIMIZED</strong>
          </div>
          <div className={styles.metric}>
            <span>STATUS</span>
            <strong className={styles.statusText}>
              <span className={styles.statusDot}></span> DEPLOYED
            </strong>
          </div>
        </div>

        <div className={styles.ctaGroup}>
          <a href={liveLink} target="_blank" rel="noreferrer" className={styles.mainBtn}>
            RUN APP <HiOutlineExternalLink />
          </a>
          <a href={repoLink} target="_blank" rel="noreferrer" className={styles.iconBtn}>
            <HiCode />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;