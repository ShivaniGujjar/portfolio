import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Home.module.css';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current || isMobile) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const floatingSkills = [
    { text: 'REACT ARCHITECTURE', color: '#058CD7', id: 'chip0' },
    { text: 'NODE.JS SYSTEMS', color: '#0e6342', id: 'chip1' },
    { text: 'MONGODB DESIGN', color: '#1db454', id: 'chip2' },
    { text: 'SCALABLE BACKEND', color: '#FF6C37', id: 'chip3' },
  ];

  const reveal = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
  };

  const chipReveal = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 1 + (i * 0.15), duration: 0.5 }
    })
  };

  const magneticEffect = isMobile ? {} : {
    scale: 1.08,
    x: (mousePos.x - (containerRef.current?.offsetWidth / 2 || 0)) * 0.02,
    y: (mousePos.y - (containerRef.current?.offsetHeight / 2 || 0)) * 0.02,
    transition: { type: "spring", stiffness: 120, damping: 14 }
  };

  return (
    <section
      className={styles.heroContainer}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >

      {!isMobile && (
        <div
          className={styles.spotlight}
          style={{
            background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(255,108,55,0.08), transparent 80%)`
          }}
        />
      )}

      {floatingSkills.map((skill, i) => (
        <motion.div
          key={i}
          className={`${styles.floatingChip} ${styles[skill.id]}`}
          style={{ '--accent': skill.color }}
          custom={i}
          variants={chipReveal}
          initial="hidden"
          animate="visible"
          whileHover={magneticEffect}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className={styles.chipInner}
          >
            <span className={styles.dot} /> {skill.text}
          </motion.div>
        </motion.div>
      ))}

      <div className={styles.centerContent}>
        <h1 className={styles.heroHeading}>

          <div className={styles.mask}>
            <motion.span variants={reveal} initial="hidden" animate="visible">
              BUILDING
            </motion.span>
          </div>

          <div className={styles.mask}>
            <motion.span
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className={styles.outlineText}
            >
              SCALABLE
            </motion.span>
          </div>

          <div className={styles.mask}>
            <motion.span
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className={styles.orangeText}
            >
              APPLICATIONS
            </motion.span>
          </div>

        </h1>

        <motion.div
          className={styles.pillGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="#projects"
            className={styles.pillWhite}
            whileHover={magneticEffect}
            whileTap={{ scale: 0.95 }}
          >
            VIEW PROJECTS
          </motion.a>

          <motion.div
            className={styles.pillOrange}
            whileHover={magneticEffect}
          >
            MERN SPECIALIST
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;