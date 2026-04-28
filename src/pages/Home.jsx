import React from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';

const Home = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const stackVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, type: 'spring', stiffness: 50, damping: 12 },
    }),
  };

  return (
    <motion.section 
      className={styles.heroContainer} 
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.heroText}>
        {/* Status Badge */}
        <motion.div className={styles.statusBadge} variants={itemVariants}>
          <motion.span 
            className={styles.pulseDot}
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <span className={styles.statusText}>SYSTEM_STATUS: OPERATIONAL</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 className={styles.heroHeading} variants={itemVariants}>
          BUILDING <br />
          <span className={styles.outlineText}>SCALABLE</span> <br />
          <div className={styles.highlightWrapper}>
            <span className={styles.highlight}>MERN STACK</span>
          </div> <br />
          APPLICATIONS
        </motion.h1>
        
        {/* Subtext Logic: span hidden on mobile via CSS */}
        <motion.p className={styles.heroSubtext} variants={itemVariants}>
          Specializing in high-performance <br /> web architecture with
          <span className={styles.techTextList}>
            <span className={styles.reactColor}> React</span> |
            <span className={styles.nodeColor}> Node.js</span> |
            <span className={styles.mongoColor}> MongoDB</span>
          </span>
        </motion.p>

        {/* Action Button - Moved via CSS order on mobile */}
        <motion.div className={styles.buttonGroup} variants={itemVariants}>
          <motion.a 
            href="#projects" 
            className={styles.ctaButton}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW PROJECTS →
          </motion.a>
        </motion.div>
      </div>

      {/* MERN Bricks Graphic - Moved via CSS order on mobile */}
      <div className={styles.mernStackGraphic}>
        {[
          { icon: <SiMongodb />, label: 'DATABASE | MONGODB', status: 'ACTIVE', class: styles.mongoLayer },
          { icon: <SiExpress />, label: 'SERVER | EXPRESS', status: 'STABLE', class: styles.expressLayer },
          { icon: <SiReact />, label: 'CLIENT | REACT', status: 'READY', class: styles.reactLayer },
          { icon: <SiNodedotjs />, label: 'RUNTIME | NODE.JS', status: 'LIVE', class: styles.nodeLayer },
        ].map((tech, i) => (
          <motion.div 
            key={i}
            custom={i}
            variants={stackVariants}
            className={`${styles.techLayer} ${tech.class}`}
            whileHover={{ x: -15, transition: { duration: 0.2 } }}
          >
            <div className={styles.layerContent}>
              <div className={styles.layerIcon}>{tech.icon}</div>
              <p className={styles.monoText}>{tech.label}</p>
            </div>
            <div className={styles.layerStatus}>{tech.status}</div>
            <div className={styles.layerBlock}></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Home;