import React from 'react';
import styles from './ProjectCard.module.css';
import { RiReactjsLine, RiNodejsLine } from 'react-icons/ri';
import { SiMongodb, SiExpress, SiRedis, SiTailwindcss, SiRedux, SiFramer, SiVite, SiJavascript } from 'react-icons/si';
import { FiExternalLink, FiGithub } from 'react-icons/fi'; // Inhe top pe import karle

const ProjectCard = ({ title, description, techStack, repoLink, liveLink, imageSrc, id, isReversed, themeColor }) => {
  
  const getIcon = (tech) => {
    const iconStyle = { fontSize: '1.2rem' };
    switch (tech.toUpperCase()) {
      case 'REACT': return <RiReactjsLine style={{ ...iconStyle, color: '#61DAFB' }} />;
      case 'NODE.JS': case 'NODE': return <RiNodejsLine style={{ ...iconStyle, color: '#339933' }} />;
      case 'EXPRESS': 
  // Agar dark mode hai toh white, varna light mode mein black/dark grey
  return <SiExpress style={{ ...iconStyle, color: 'var(--text-primary, #686666)' }} />;
      case 'MONGODB': return <SiMongodb style={{ ...iconStyle, color: '#47A248' }} />;
      case 'REDIS': return <SiRedis style={{ ...iconStyle, color: '#DC382D' }} />;
      case 'TAILWIND': return <SiTailwindcss style={{ ...iconStyle, color: '#06B6D4' }} />;
      case 'JS': case 'JAVASCRIPT': return <SiJavascript style={{ ...iconStyle, color: '#F7DF1E' }} />;
      case 'REDUX': return <SiRedux style={{ ...iconStyle, color: '#764ABC' }} />;
      case 'FRAMER': case 'FRAMER MOTION': return <SiFramer style={{ ...iconStyle, color: '#0055FF' }} />;
      case 'VITE': return <SiVite style={{ ...iconStyle, color: '#646CFF' }} />;
      default: return null;
    }
  };

  return (
    <div className={`${styles.projectSection} ${isReversed ? styles.reversed : ''}`} style={{ '--project-color': themeColor }}>
      <div className={styles.visualSide}>
        <div className={styles.colorBlock}>
          <div className={styles.checkerboard} />
          <div className={styles.imageFrame}>
  <div className={styles.scanLaser} /> {/* Laser yahan baithega */}
  <img src={imageSrc} className={styles.projectImg} />
  <div className={styles.idBadge}>NO.{id}</div>
</div>
        </div>
      </div>

      <div className={styles.contentSide}>
        <div className={styles.headerMeta}>
          <span className={styles.status}># PROJECT {id}</span>
          <div className={styles.colorLine} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.techSection}>
          <h4 className={styles.techTitle}>TECHNOLOGIES</h4>
          <div className={styles.techCloud}>
            {techStack.map((tech, i) => (
              <div key={i} className={styles.techPill}>
                <span className={styles.brandIcon}>{getIcon(tech)}</span>
                <span className={styles.techName}>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.buttonStack}>
  <a href={liveLink} target="_blank" rel="noreferrer" className={styles.mainBtn}>
    <FiExternalLink /> RUN APPLICATION
  </a>
  <a href={repoLink} target="_blank" rel="noreferrer" className={styles.sideBtn}>
    <FiGithub /> SOURCE CODE
  </a>
</div>
      </div>
    </div>
  );
};

export default ProjectCard;