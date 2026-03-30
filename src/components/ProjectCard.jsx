import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, techStack, repoLink, liveLink, imageSrc, id, isReversed, themeColor }) => {
  return (
    <div 
      className={`${styles.projectSection} ${isReversed ? styles.reversed : ''}`}
      style={{ '--project-color': themeColor }}
    >
      {/* 1. THE VISUAL SIDE (The "Color Bomb") */}
      <div className={styles.visualSide}>
        <div className={styles.colorBlock}>
          <div className={styles.checkerboard}></div>
          <div className={styles.imageFrame}>
            <div className={styles.scanLaser}></div>
            <img src={imageSrc} alt={title} className={styles.projectImg} />
            <div className={styles.idBadge}>NO.{id}</div>
          </div>
        </div>
      </div>

      {/* 2. THE CONTENT PANEL */}
      <div className={styles.contentSide}>
        <div className={styles.headerMeta}>
          {/* UPDATED: Dynamic Project Label */}
          <span className={styles.status}>// PROJECT {id}</span>
          <div className={styles.colorLine}></div>
        </div>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.techCloud}>
          {techStack.map((tech, i) => (
            <span key={i} className={styles.techPill}>{tech}</span>
          ))}
        </div>

        <div className={styles.buttonStack}>
          <a href="https://tasksyncboard.netlify.app/" target="_blank" rel="noreferrer" className={styles.mainBtn}>
            RUN APPLICATION →
          </a>
          <a href={repoLink} target="_blank" rel="noreferrer" className={styles.sideBtn}>
            SOURCE CODE
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;