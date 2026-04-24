import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import { SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiVite, SiRedux, SiGit } from 'react-icons/si';

const About = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const skillData = [
    { label: "Frontend", icons: [<SiTailwindcss />, <SiJavascript />, <SiReact />], title: "TAILWIND • JS • REACT", desc: "Modern interactive interfaces & animations.", color: "#3ABFF8" },
    { label: "Backend", icons: [<SiNodedotjs />, <SiExpress />, <SiMongodb />], title: "NODE • EXPRESS • MONGODB", desc: "Scalable server-side logic & architecture.", color: "#00ED64" },
    { label: "Tools", icons: [<SiPostman />, <SiVite />, <SiRedux />, <SiGit />], title: "POSTMAN • VITE • REDUX • GIT", desc: "Advanced workflow & state management.", color: "#FF6C37" }
  ];

  return (
    <section className={styles.aboutWrapper} id="about">
      
      {/* --- 1. THE TERMINAL WINDOW (BIO) --- */}
      {/* --- 1. THE TERMINAL WINDOW (BIO) --- */}
      <div className={styles.commandCenter}>
        <div className={styles.cardHeader}>
          <div className={styles.windowControls}><span/><span/><span/></div>
        </div>

        <div className={styles.bioContent}>
          {/* LEFT SIDE: Your Bio */}
          <div className={styles.textSide}>
            <div className={styles.aboutHeader}>
              <h2 className={styles.simpleTitle}>ABOUT ME</h2>
            </div>
            <h2 className={styles.mainTitle}>CREATIVE <br/> <span className={styles.blueText}>DEVELOPER</span></h2>
            
            <p className={styles.bioText}>
              I’m <span className={styles.nameHighlight}>Shivani Gujjar</span>, MCA Graduate and full-stack enthusiast. <br /> I craft 
              <span className={styles.uiHighlight}> Interactive Interfaces</span> using the <span className={styles.mernTag}>MERN STACK</span>.
            </p>

            <div className={styles.quickTags}>
              <div className={styles.qTag}>SCALABLE</div>
              <div className={styles.qTag}>⚡ PERFORMANCE</div>
              <div className={styles.qTag}>🎨 PIXEL PERFECT</div>
            </div>
          </div>

          {/* RIGHT SIDE: The Animated Icons */}
          <div className={styles.visualSide}>
  <div className={styles.techMesh}></div> {/* New texture layer */}
  <div className={styles.floatingIcons}>
    <SiReact className={styles.iconReact} />
    <SiNodedotjs className={styles.iconNode} />
    <SiMongodb className={styles.iconMongo} />
    <SiJavascript className={styles.iconJs} />
    <SiTailwindcss className={styles.iconTailwind} />
    <SiRedux className={styles.iconRedux} />
    <SiGit className={styles.iconGit} />
  </div>
</div>
        </div>
      </div>

      {/* --- 2. SEPARATE DOCK --- */}
      <div className={styles.dockContainer}>
        <div className={styles.dockItem}><span className={styles.livePulse}></span>STATUS: AVAILABLE</div>
        <div className={styles.dockItem}>LOCATION: INDIA</div>
        <div className={styles.dockItem}>TIME: {time}</div>
        <a href="#contact" className={styles.socialTile}>LET'S BUILD →</a>
      </div>

      {/* --- 3. SKILLS INTRO --- */}
      <div className={styles.skillsIntro}>
        
        <h2 className={styles.introTitle}>MY <span>TECH STACK</span></h2>
      </div>

      {/* --- 4. INDEPENDENT STACKING CARDS --- */}
      <div className={styles.skillsStackSection}>
  {skillData.map((skill, index) => (
    <div key={index} className={styles.skillCard}>
      
      {/* LEFT CONTENT */}
      <div className={styles.skillContent}>
        <span className={styles.label}>{skill.label}</span>

        <h3 className={styles.title}>{skill.title}</h3>

        <p className={styles.desc}>{skill.desc}</p>
      </div>

      {/* RIGHT ICONS */}
      <div className={styles.iconWrapper}>
        {skill.icons.map((icon, i) => (
          <div key={i} className={styles.iconBox}>
            {icon}
          </div>
        ))}
      </div>

    </div>
  ))}
</div>
    </section>
  );
};

export default About;