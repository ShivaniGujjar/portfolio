import React from "react";
import styles from "./Home.module.css";
import profilePic from "../assets/1.jpg";
import starIcon from "../assets/star.svg";

function Home() {
  // Smooth scroll function
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          Building Scalable <br />
          <span className={styles.highlight}>MERN Stack</span> <br />
          Applications
        </h1>
        
        <p className={styles.heroSubtext}>
          I specialize in building high-performance 
          web applications with React, Node.js, and MongoDB. 
          
        </p>

        {/* Changed to anchor tag for better linking */}
        <a 
          href="#projects" 
          className={styles.ctaButton} 
          onClick={scrollToProjects}
        >
          View My Work
        </a>
      </div>

      <div className={styles.heroImageWrapper}>
        <div className={styles.polaroidFrame}>
          <img src={profilePic} alt="Shivani" className={styles.heroImage} />
        </div>
        <img src={starIcon} alt="star" className={styles.starGraphic} />
      </div>
    </div>
  );
}

export default Home;