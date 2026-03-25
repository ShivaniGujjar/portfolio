import React from 'react';
import SkillCard from '../components/SkillCard';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutWrapper}>
      
      {/* 1. MAIN BIO CARD */}
      <div className={styles.mainBioCard}>
        <div className={styles.terminalHeader}>
          <div className={styles.controls}>
            <span className={styles.dot} style={{background: '#FF6B6B'}}></span>
            <span className={styles.dot} style={{background: '#FFE162'}}></span>
            <span className={styles.dot} style={{background: '#00ED64'}}></span>
          </div>
          <span className={styles.terminalTitle}>shivani_profile.sh</span>
        </div>
        <div className={styles.bioContent}>
          <h2 className={styles.aboutTitle}>About Me</h2>
          
<p className={styles.aboutIntro}>
  Hello! I am <span className={styles.highlightName}>Shivani Gujjar</span>, an MCA 
  graduate specializing in the <br /> <span className={styles.highlightMern}>MERN Stack</span>. 
  I build high-performance web apps with a focus on clean interface design.
</p>
        </div>
      </div>

      {/* 2. FRONTEND SECTION */}
      <div className={styles.skillCategory}>
        <h3 className={styles.categoryLabel}>Frontend Development</h3>
        <div className={styles.skillGrid}>
          {/* Your Frontend SkillCards */}
          <SkillCard title="React JS" percentage={90} description="Hooks, Context API, Components" />
          <SkillCard title="JavaScript" percentage={95} description="ES6+, Async, DOM Manipulation" />
          <SkillCard title="HTML5 & CSS3" percentage={95} description="Flexbox, Grid, Responsive Design" />
        </div>
      </div>

      {/* 3. BACKEND SECTION */}
      <div className={styles.skillCategory}>
        <h3 className={styles.categoryLabel} >
          Backend Development
        </h3>
        <div className={styles.skillGrid}>
          {/* Your Backend SkillCards */}
          <SkillCard title="Node.js & Express" percentage={85} description="REST APIs, Middleware, Logic" />
          <SkillCard title="MongoDB" percentage={80} description="NoSQL, Mongoose, CRUD Ops" />
          <SkillCard title="Auth" percentage={80} description="JWT, Bcrypt, Secure Login" />
        </div>
      </div>

    </section>
  );
};

export default About;