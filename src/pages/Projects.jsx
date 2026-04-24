import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

import { RiReactjsLine, RiNodejsLine } from 'react-icons/ri';
import { SiMongodb, SiExpress, SiRedux, SiFramer, SiVite, SiRedis, SiTailwindcss } from 'react-icons/si';

import tasksyncImg from '../assets/tasksync.png';
// Horizon hata diya, Unravel ka image import kar lo
import unravelImg from '../assets/unravel.png'; 

const projectsData = [
  {
    id: "01",
    title: 'TASKSYNC',
    description: 'A full-stack Kanban board application for team project management. Features drag-and-drop tasks, user auth, and real-time updates.',
    techStack: ['REACT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'REDIS'],
    imageSrc: tasksyncImg,
    repoLink: 'https://github.com/ShivaniGujjar/tasksync',
    liveLink: 'https://tasksync-delta.vercel.app/'
  },
  {
    id: "02",
    title: 'UNRAVEL',
    // Refined description to highlight the AI and Real-time aspect
    description: 'An AI-powered assistant designed to unravel complex thoughts. Features real-time response streaming using Socket.io and robust state management with Redux.',
    techStack: ['REACT', 'NODE.JS', 'MONGODB', 'SOCKET.IO', 'REDUX'],
    imageSrc: unravelImg, // Use the screenshot you just showed me
    repoLink: 'https://github.com/ShivaniGujjar/unravel',
    liveLink: 'https://unravel-liart.vercel.app/'
  }
];

function Projects() {
  return (
    <section className={styles.projectsWrapper} id="projects">
      <div className={styles.sectionHeader}>
        <div className={styles.headerTitleRow}>
          <span className={styles.label}>FEATURED_WORKS</span>
          <div className={styles.dataLine}></div>
          <span className={styles.count}>[ {projectsData.length} ]</span>
        </div>
        <h2 className={styles.headerDesc}>
          Exploring the intersection of <span>Performance</span> and <span>Creative UI</span>.
        </h2>
      </div>

      <div className={styles.projectList}>
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={project.id}
            {...project}
            isReversed={index % 2 !== 0}
            // Pehle blue, dusra olive (apne "mature" theme ke hisaab se)
            themeColor={index % 2 === 0 ? "#2D9CDB" : "#448759"} 
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;