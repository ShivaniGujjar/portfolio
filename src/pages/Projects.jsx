import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';
import tasksyncImg from '../assets/tasksync.png';
import unravelImg from '../assets/unravel.png'; 

const projectsData = [
  { 
    id: "1", 
    title: 'TaskSync', 
    description: 'MERN stack Kanban system with real-time drag-and-drop orchestration and JWT security.', 
    /* Ye hain tumhare main bricks */
    techStack: ['React', 'Redux', 'MongoDB', 'Node.js', 'Tailwind', 'DND', 'JWT'], 
    imageSrc: tasksyncImg, 
    repoLink: 'https://github.com/ShivaniGujjar/tasksync', 
    liveLink: 'https://tasksync-delta.vercel.app/', 
    themeColor: '#3ABFF8' 
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
  }
];
function Projects() {
  return (
    <section className={styles.projectsWrapper}>
      {/* 🛠️ HUMBLE & PROFESSIONAL HEADER */}
      <div className={styles.headerContainer}>
        

        <h2 className={styles.mainHeading}>
          RECENT <span className={styles.accentText}>BUILDS</span>
        </h2>

        <p className={styles.subtext}>
          Turning complex problems into functional, user-centric software solutions.
        </p>

        <div className={styles.separator}></div>
      </div>
      
      {/* 🏁 COMPACT GRID */}
      <div className={styles.grid}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;