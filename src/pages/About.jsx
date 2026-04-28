import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import styles from './About.module.css';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiJavascript, 
  SiTailwindcss, SiExpress, SiGit, SiFramer 
} from 'react-icons/si';

const About = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const skillData = [
    { label: "Frontend", icons: [<SiTailwindcss />, <SiJavascript />, <SiReact />], title: "UI ARCHITECTURE", desc: "Crafting high-performance MERN interfaces.", color: "#3ABFF8", percentage: 90 },
    { label: "Backend", icons: [<SiNodedotjs />, <SiExpress />, <SiMongodb />], title: "SYSTEM LOGIC", desc: "Engineered scalable server environments.", color: "#00ED64", percentage: 85 },
    { label: "Workflow", icons: [<SiGit />, <SiFramer />], title: "DEV WORKFLOW", desc: "Optimized deployment & animations.", color: "#FF6C37", percentage: 80 }
  ];

  const boxHover = {
    hover: { 
      y: -8, 
      borderColor: "rgba(58, 191, 248, 0.4)", 
      backgroundColor: "rgba(58, 191, 248, 0.02)",
      transition: { duration: 0.3, ease: "easeOut" } 
    }
  };

  return (
    <section className={styles.aboutWrapper} id="about">
      
      {/* 🌀 Background Marquee - Centered Vertically */}
      <div className={styles.marqueeContainer}>
        <motion.h1 
          className={styles.bgText}
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          MERN STACK • CREATIVE DEVELOPER • MCA GRADUATE •
        </motion.h1>
      </div>

      {/* 🏆 CENTERED HEADING */}
      <div className={styles.introHeader}>
        <h2 className={styles.mainTitle}>ABOUT <span>ME</span></h2>
        <div className={styles.headerLine}></div>
      </div>

      {/* 🍱 BENTO GRID */}
      <div className={styles.bentoGrid}>
        
        {/* 🆔 IDENTITY BOX */}
        <motion.div className={`${styles.gridBox} ${styles.identityBox}`} variants={boxHover} whileHover="hover">
          <span className={styles.boxTag}>[ 01 IDENTITY ]</span>
          <div className={styles.idBody}>
            <p className={styles.mernLabel}>MERN STACK DEVELOPER</p>
            <h2 className={styles.nameTitle}>SHIVANI GUJJAR</h2>
          </div>
          <div className={styles.statusBadge}>
            <span className={styles.pulse}></span> AVAILABLE FOR WORK
          </div>
        </motion.div>

        {/* 🎯 MISSION BOX */}
        <motion.div className={`${styles.gridBox} ${styles.missionBox}`} variants={boxHover} whileHover={{ y: -8, scale: 1.01 }}>
          <span className={styles.boxTag}>[ 02 MISSION ]</span>
          <p className={styles.missionText}>
            Developing <span className={styles.highlight}>Scalable</span> MERN solutions with pixel-perfect precision.
          </p>
        </motion.div>

        {/* 🎓 ACADEMIC BOX */}
        <motion.div className={`${styles.gridBox} ${styles.eduBox}`} variants={boxHover} whileHover="hover">
          <span className={styles.boxTag}>[ 03 ACADEMIC ]</span>
          <div className={styles.eduContent}>
            <h4>MCA GRADUATE</h4>
            <p>2026 Batch • IT Specialization</p>
            <div className={styles.verifiedTag}>CREDENTIALS_VERIFIED</div>
          </div>
        </motion.div>

        {/* 🛠️ TECH STACK BOX */}
        <motion.div className={`${styles.gridBox} ${styles.techBox}`} variants={boxHover} whileHover="hover">
          <span className={styles.boxTag}>[ 04 STACK ]</span>
          <div className={styles.iconOrbit}>
            <motion.div className={styles.glowIcon} style={{'--c': '#61DAFB'}} whileHover={{ scale: 1.2, rotate: 15 }}><SiReact /></motion.div>
            <motion.div className={styles.glowIcon} style={{'--c': '#339933'}} whileHover={{ scale: 1.2, rotate: -15 }}><SiNodedotjs /></motion.div>
            <motion.div className={styles.glowIcon} style={{'--c': '#47A248'}} whileHover={{ scale: 1.2, rotate: 15 }}><SiMongodb /></motion.div>
            <motion.div className={styles.glowIcon} style={{'--c': '#F7DF1E'}} whileHover={{ scale: 1.2, rotate: -15 }}><SiJavascript /></motion.div>
          </div>
        </motion.div>
      </div>

      {/* 📍 THE STICKY STACKING ENGINE */}
      <div className={styles.stackContainer}>
        <div className={styles.stackTitleSection}>
          <h2 className={styles.stackTitle}>DETAILED <span>CAPABILITIES</span></h2>
          <div className={styles.headerLine}></div>
        </div>

        <div className={styles.skillsStackContainer}>
          {skillData.map((skill, index) => (
            <SkillCard key={index} index={index} {...skill} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;