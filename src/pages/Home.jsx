import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
// Using specialized Tech Icons for the MERN stack
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si'; 
import styles from './Home.module.css';

const Home = () => {
  const containerRef = useRef(null);
  const chipsRef = useRef([]);

  const skills = [
    { text: 'MONGODB', color: '#47A248', id: styles.mongo, icon: <SiMongodb size={16} /> },
    { text: 'EXPRESS', color: '#ffffff', id: styles.express, icon: <SiExpress size={16} /> },
    { text: 'REACT', color: '#61DAFB', id: styles.react, icon: <SiReact size={16} /> },
    { text: 'NODE.JS', color: '#339933', id: styles.node, icon: <SiNodedotjs size={16} /> },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set([".chip", ".title-line", ".btn"], { opacity: 0, y: 50 });

      tl.to(".title-line", { opacity: 1, y: 0, duration: 1.2, stagger: 0.15 })
        .to(".btn", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .to(".chip", { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 1, 
          stagger: 0.1, 
          ease: "back.out(1.7)" 
        }, "-=0.4");

      chipsRef.current.forEach((chip, i) => {
        gsap.to(chip, {
          y: "-=12",
          duration: 2.5 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      {skills.map((skill, i) => (
        <div
          key={i}
          ref={(el) => (chipsRef.current[i] = el)}
          className={`${styles.floatingChip} ${skill.id} chip`}
          style={{ '--accent': skill.color }}
        >
          <div className={styles.chipInner}>
            <span className={styles.iconWrapper} style={{ color: skill.color }}>
              {skill.icon}
            </span>
            {skill.text}
          </div>
        </div>
      ))}

      <div className={styles.centerBox}>
        <h1 className={styles.mainTitle}>
          <span className={`${styles.line} title-line`}>BUILDING</span>
          <span className={`${styles.line} ${styles.highlightBlue} title-line`}>SCALABLE</span>
          <span className={`${styles.line} ${styles.highlightOrange} title-line`}>APPLICATIONS</span>
        </h1>

        <div className={styles.buttonGroup}>
          <a href="#projects" className={`${styles.btnWhite} btn`}>VIEW PROJECTS</a>
          <button className={`${styles.btnOrange} btn`}>MERN SPECIALIST</button>
        </div>
      </div>
    </section>
  );
};

export default Home;