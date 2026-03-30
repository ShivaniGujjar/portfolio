import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import { 
  SiTailwindcss, SiJavascript, SiReact, 
  SiNodedotjs, SiExpress, SiMongodb, 
  SiPostman, SiVite, SiRedux, SiGit 
} from 'react-icons/si';

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
          {/* LEFT BIO SECTION */}
          
          <div className={styles.bioSection}>
          <div className={styles.aboutHeader}>
  <h2 className={styles.simpleTitle}>ABOUT ME</h2>
  
</div>
           <div className={styles.stickerWrapper}>
  
  
</div>

            <h2 className={styles.mainTitle}>
              CREATIVE <br/> 
              <span className={styles.blueText}>DEVELOPER</span>
            </h2>
            
            <p className={styles.bioText}>
              I’m <span className={styles.nameHighlight}>Shivani Gujjar</span>, a final-year MCA student and  <br />
              full-stack enthusiast. I don't just write code, I craft 
              <span className={styles.uiHighlight}> Interactive Interfaces </span> 
              using the <span className={styles.mernTag}>MERN STACK</span>.
            </p>

            <div className={styles.quickTags}>
              <div className={`${styles.qTag} ${styles.tagYellow}`}>SCALABLE</div>
              <div className={`${styles.qTag} ${styles.tagPink}`}>⚡ PERFORMANCE</div>
              <div className={`${styles.qTag} ${styles.tagPurple}`}>🎨 PIXEL PERFECT</div>
            </div>
          </div>

          {/* RIGHT SKILLS SECTION */}
          <div className={styles.skillsZone}>
            <div className={styles.skillBlock}>
              <span className={styles.label}>Frontend</span>
              <div className={styles.skillIcons}>
                <SiTailwindcss /> <SiJavascript /> <SiReact />
              </div>
              <h3>TAILWIND • JS • REACT</h3>
              <p>Modern interactive interfaces & animations.</p>
              <div className={styles.progressLine}></div>
            </div>

            <div className={styles.skillBlock}>
              <span className={styles.label}>Backend</span>
              <div className={styles.skillIcons}>
                <SiNodedotjs /> <SiExpress /> <SiMongodb />
              </div>
              <h3>NODE • EXPRESS • MONGODB</h3>
              <p>Scalable server-side logic & architecture.</p>
              <div className={styles.progressLine}></div>
            </div>

            <div className={styles.skillBlock}>
              <span className={styles.label}>Tools</span>
              <div className={styles.skillIcons}>
                <SiPostman /> <SiVite /> <SiRedux /> <SiGit />
              </div>
              <h3>POSTMAN • VITE • REDUX • GIT</h3>
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
          <p>LOCATION: <b>INDIA</b></p>
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