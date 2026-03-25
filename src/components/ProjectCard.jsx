import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({
  title,
  description,
  techStack,
  repoLink,
  liveLink,
  imageSrc,
  index
}) {
  // Determine if the card is "even" or "odd" for alternating layout
  const layoutClass = index % 2 === 0 ? styles.layoutEven : styles.layoutOdd;

  return (
    <div className={`${styles.card} ${layoutClass}`}>
      
      {/* --- Column 1: Text Content --- */}
      <div className={styles.cardText}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        
        {/* We'll keep your tech stack list, it's good info! */}
        <ul className={styles.cardTechList}>
          {techStack.map((tech, i) => (
            <li key={i} className={styles.cardTechItem}>
              {tech}
            </li>
          ))}
        </ul>

        <div className={styles.cardLinks}>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
            GitHub
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className={`${styles.cardLink} ${styles.primaryLink}`}>
            Live Demo
          </a>
        </div>
      </div>

      {/* --- Column 2: Image Content --- */}
      <div className={styles.cardImageContainer}>
        <img src={imageSrc} alt={`${title} project screenshot`} className={styles.cardImage} />
      </div>

    </div>
  );
}

export default ProjectCard;