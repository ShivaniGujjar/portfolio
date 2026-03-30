import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.heroContainer} id="home">
      <div className={styles.heroText}>
        <div className={styles.statusBadge}>
          <span className={styles.pulseDot}></span>
          <span className={styles.statusText}>SYSTEM_STATUS: OPERATIONAL</span>
        </div>

        <h1 className={styles.heroHeading}>
          BUILDING <br />
          <span className={styles.outlineText}>SCALABLE</span> <br />
          <div className={styles.highlightWrapper}>
            <span className={styles.highlight}>MERN STACK</span>
          </div> <br />
          APPLICATIONS
        </h1>
        
        <p className={styles.heroSubtext}>
  Specializing in high-performance web architecture with 
  <span className={styles.reactColor}> React</span> |
  <span className={styles.nodeColor}> Node.js</span> |
  <span className={styles.mongoColor}> MongoDB</span>.
</p>

        <div className={styles.buttonGroup}>
  <a href="#projects" className={styles.ctaButton}>
    VIEW PROJECTS →
  </a>
</div>
      </div>

      <div className={styles.mernStackGraphic}>
        <div className={styles.connectionWire}></div>

        {/* MongoDB Layer */}
        <div className={styles.techLayer} style={{ '--accent': '#27AE60' }}>
          <div className={styles.layerContent}>
            <span className={styles.layerId}>DB</span>
            <p className={styles.monoText}>DATABASE | MONGODB</p>
          </div>
          <div className={styles.layerStatus}>ACTIVE</div>
          <div className={styles.layerBlock}></div>
        </div>


        {/* Express Layer */}
        <div className={styles.techLayer} style={{ '--accent': '#878383' }}>
          <div className={styles.layerContent}>
            <span className={styles.layerId}>EX</span>
            <p className={styles.monoText}>SERVER | EXPRESS</p>
          </div>
          <div className={styles.layerStatus}>STABLE</div>
          <div className={styles.layerBlock}></div>
        </div>


        {/* React Layer */}
        <div className={styles.techLayer} style={{ '--accent': '#2D9CDB' }}>
          <div className={styles.layerContent}>
            <span className={styles.layerId}>⚛</span>
            <p className={styles.monoText}>CLIENT | REACT</p>
          </div>
          <div className={styles.layerStatus}>READY</div>
          <div className={styles.layerBlock}></div>
        </div>


        {/* JS Layer */}
        <div className={styles.techLayer} style={{ '--accent': '#F2C94C' }}>
          <div className={styles.layerContent}>
            <span className={styles.layerId}>JS</span>
            <p className={styles.monoText}>RUNTIME | NODE.JS</p>
          </div>
          <div className={styles.layerStatus}>LIVE</div>
          <div className={styles.layerBlock}></div>
        </div>

        

        
        
        
      </div>
    </section>
  );
};

export default Home;