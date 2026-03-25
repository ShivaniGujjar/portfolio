import React from 'react';
import ProjectCard from '../components/ProjectCard';
import pageStyles from './PageStyles.module.css';
import gridStyles from './Projects.module.css';
import tasksyncImg from '../assets/tasksync.png';
import horizonImg from '../assets/horizon.png';

const projectsData = [
  {
    title: 'TaskSync',
    description: 'A full-stack Kanban board application for team project management. Features drag-and-drop tasks, user auth, and real-time updates.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    repoLink: 'https://github.com/ShivaniGujjar/tasksync',
    liveLink: 'https://tasksyncboard.netlify.app/',
    imageSrc: tasksyncImg
  },
  {
    title: 'HORIZON COURTS',
    description: (
      <>
        A <strong>high-fidelity Frontend UI</strong> built for a premium sports club. 
        Focused on a <strong>modular component architecture</strong> using React, 
        this project features complex layouts, custom <strong>CSS Grid</strong> 
        designs, and a fully <strong>responsive UX</strong> that maintains a 
        luxury aesthetic across all screen sizes.
      </>
    ),
    techStack: ['React', 'Redux', 'CSS Modules', 'Framer Motion', 'Vite'],
    repoLink: 'https://github.com/Shivani-Gujjar/horizon-courts-ui',
    liveLink: 'https://horizon-courts-ui.vercel.app',
    imageSrc: horizonImg 
  },
];

// ... keep your imports same ...

function Projects() {
  return (
    <section className={gridStyles.projectsWrapper}>
      {/* Container for the flush heading */}
      <div className={gridStyles.headerContainer}>
        <h2 className={gridStyles.sectionHeader}>PROJECTS</h2>
      </div>

      <div className={gridStyles.projectList}>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            isEven={index % 2 === 0} 
            {...project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;