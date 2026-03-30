import React, { useState, useEffect } from 'react';
import styles from './About.module.css';

const About = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.aboutWrapper} id="about">
      <div className={styles.commandCenter}>
        {/* WINDOW HEADER */}
        <div className={styles.cardHeader}>
  <div className={styles.windowControls}>
    <span className={styles.dot}></span>
    <span className={styles.dot}></span>
    <span className={styles.dot}></span>
  </div>
  <div className={styles.headerTerminal}>
    <span className={styles.terminalUser}>root@shivani:</span>
    <span className={styles.terminalPath}> ~/portfolio/about_me</span>
    <span className={styles.terminalCursor}>_</span>
  </div>
</div>
        <div className={styles.cardMain}>
          {/* LEFT BIO */}
          <div className={styles.bioSection}>
            <div className={styles.headerRow}>
              <span className={styles.roleTag}>CORE_DEVELOPER</span>
              <span className={styles.statusTag}>V2.0_STABLE</span>
            </div>

            <h2 className={styles.mainTitle}>CREATIVE <br/> <span className={styles.blueText}>DEVELOPER</span></h2>
            
            <p className={styles.bioText}>
              I specialize in building high-performance web applications with a focus on 
              <span className={styles.mernHighlight}>MERN Stack</span> and Interactive Interfaces.
            </p>

            <div className={styles.quickTags}>
              <div className={styles.qTag}><span>⚡</span> PERFORMANCE</div>
              <div className={styles.qTag}><span>🛠️</span> SCALABLE</div>
              <div className={styles.qTag}><span>🎨</span> PIXEL PERFECTION</div>
            </div>
          </div>

          {/* RIGHT SKILLS */}
          <div className={styles.skillsZone}>
            <div className={`${styles.skillBlock} ${styles.greenBg}`}>
              <span className={styles.label}>Frontend</span>
              <h3>REACT • JS • TAILWIND</h3>
              <p>Modern interactive interfaces & animations.</p>
              <div className={styles.progressLine}></div>
            </div>

            <div className={`${styles.skillBlock} ${styles.blueBg}`}>
              <span className={styles.label}>Backend</span>
              <h3>NODE • EXPRESS • MONGO</h3>
              <p>Scalable server-side logic & architecture.</p>
              <div className={styles.progressLine}></div>
            </div>

            <div className={`${styles.skillBlock} ${styles.pinkBg}`}>
              <span className={styles.label}>Tools</span>
              <h3>GIT • VITE • REDUX • POSTMAN</h3>
              <p>Advanced workflow & state management.</p>
              <div className={styles.progressLine}></div>
            </div>
          </div>
        </div>
      </div>

      {/* SYSTEM DOCK */}
      <div className={styles.dockContainer}>
        <div className={`${styles.dockItem} ${styles.yellowDock}`}>
          <span className={styles.livePulse}></span>
          <p>STATUS: <b>AVAILABLE</b></p>
        </div>
        <div className={`${styles.dockItem} ${styles.whiteDock}`}>
          <p>LOC: <b>INDIA // 28.6° N</b></p>
        </div>
        <div className={`${styles.dockItem} ${styles.blueDock}`}>
          <p>TIME: <b>{time}</b></p>
        </div>
        <a href="#contact" className={styles.socialTile}>
          LET'S BUILD →
        </a>
      </div>
    </section>
  );
};

export default About;