import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './ProjectCard.module.css';
import { RiReactjsLine, RiNodejsLine } from 'react-icons/ri';
import { 
  SiMongodb, SiExpress, SiRedis, SiTailwindcss, 
  SiRedux, SiFramer, SiVite, SiJavascript, SiSocketdotio 
} from 'react-icons/si';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ title, description, techStack, repoLink, liveLink, imageSrc, id, isReversed, themeColor }) => {
  const cardRef = useRef(null);

  // --- 3D TILT & SPOTLIGHT LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalize for Tilt
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);

    // Set CSS Variables for the "SaaS Ghost" Spotlight effect
    cardRef.current.style.setProperty("--mouse-x", `${(mouseX / width) * 100}%`);
    cardRef.current.style.setProperty("--mouse-y", `${(mouseY / height) * 100}%`);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getIcon = (tech) => {
    const iconStyle = { fontSize: '1.2rem' };
    switch (tech.toUpperCase()) {
      case 'REACT': return <RiReactjsLine style={{ ...iconStyle, color: '#61DAFB' }} />;
      case 'NODE.JS': case 'NODE': return <RiNodejsLine style={{ ...iconStyle, color: '#339933' }} />;
      case 'EXPRESS': return <SiExpress style={{ ...iconStyle, color: 'inherit' }} />;
      case 'MONGODB': return <SiMongodb style={{ ...iconStyle, color: '#47A248' }} />;
      case 'REDIS': return <SiRedis style={{ ...iconStyle, color: '#DC382D' }} />;
      case 'TAILWIND': return <SiTailwindcss style={{ ...iconStyle, color: '#06B6D4' }} />;
      case 'JS': case 'JAVASCRIPT': return <SiJavascript style={{ ...iconStyle, color: '#F7DF1E' }} />;
      case 'REDUX': return <SiRedux style={{ ...iconStyle, color: '#764ABC' }} />;
      case 'FRAMER': return <SiFramer style={{ ...iconStyle, color: '#0055FF' }} />;
      case 'VITE': return <SiVite style={{ ...iconStyle, color: '#646CFF' }} />;
      case 'SOCKET.IO': return <SiSocketdotio style={{ ...iconStyle, color: '#ffffff' }} />;
      default: return null;
    }
  };

  return (
    <motion.div 
      className={`${styles.projectSection} ${isReversed ? styles.reversed : ''}`} 
      style={{ '--project-color': themeColor }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Visual Side with 3D Tilt */}
      <motion.div 
        className={styles.visualSide}
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className={styles.colorBlock} style={{ transform: "translateZ(20px)" }}>
          <div className={styles.checkerboard} />
          
          <div className={styles.imageFrame} style={{ transform: "translateZ(50px)" }}>
            <div className={styles.windowHeader}>
              <div className={styles.dotGroup}>
                <span className={styles.wDot}></span>
                <span className={styles.wDot}></span>
                <span className={styles.wDot}></span>
              </div>
              <div className={styles.windowTitle}>{title.toLowerCase()}_v2.0.exe</div>
            </div>

            {/* The Laser & Image */}
            <div className={styles.scanLaser} />
            <img src={imageSrc} className={styles.projectImg} alt={title} />
            
            <div className={styles.idBadge} style={{ transform: "translateZ(30px)" }}>
                NO.{id}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Side */}
      <div className={styles.contentSide}>
        <motion.div className={styles.headerMeta}>
          <span className={styles.status}># PROJECT {id}</span>
          <div className={styles.colorLine} />
        </motion.div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.techSection}>
          <h4 className={styles.techTitle}>TECHNOLOGIES</h4>
          <div className={styles.techCloud}>
            {techStack.map((tech, i) => (
              <motion.div 
                key={i} 
                className={styles.techPill}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className={styles.brandIcon}>{getIcon(tech)}</span>
                <span className={styles.techName}>{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={styles.buttonStack}>
          <motion.a href={liveLink} target="_blank" className={styles.mainBtn}>
            <FiExternalLink /> RUN APPLICATION
          </motion.a>
          <motion.a href={repoLink} target="_blank" className={styles.sideBtn}>
            <FiGithub /> SOURCE CODE
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;