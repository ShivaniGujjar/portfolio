import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

// ICONS (React Icons use kar raha hoon, install nahi hai toh npm install react-icons kar lena)
import { RiReactjsLine, RiNodejsLine } from 'react-icons/ri';
import { SiMongodb, SiExpress, SiRedux, SiFramer, SiVite, SiRedis } from 'react-icons/si';

import tasksyncImg from '../assets/tasksync.png';
import horizonImg from '../assets/horizon.png';

const projectsData = [
  {
    id: "01",
    title: 'TASKSYNC',
    description: 'A full-stack Kanban board application for team project management. Features drag-and-drop tasks, user auth, and real-time updates.',
    // Icons array pass kar rahe hain
    techIcons: [<RiReactjsLine />, <RiNodejsLine />, <SiExpress />, <SiMongodb />, <SiRedis />],
    techStack: ['REACT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'REDIS'],
    imageSrc: tasksyncImg,
    repoLink: 'https://github.com/ShivaniGujjar/tasksync',
    liveLink: 'https://tasksync-live.vercel.app'
  },
  {
    id: "02",
    title: 'HORIZON COURTS',
    description: 'A high-fidelity Frontend UI built for a premium sports club. Focused on a modular component architecture and responsive UX.',
    techIcons: [<RiReactjsLine />, <SiRedux />, <SiFramer />, <SiVite />],
    techStack: ['REACT', 'REDUX', 'FRAMER', 'VITE'],
    imageSrc: horizonImg,
    repoLink: 'https://github.com/ShivaniGujjar/horizon-courts',
    liveLink: 'https://horizon-courts.vercel.app'
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
            themeColor={index % 2 === 0 ? "#2D9CDB" : "#27AE60"} 
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;