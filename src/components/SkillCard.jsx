import React from 'react';
import styles from './SkillCard.module.css'; // Or wherever your styles are

const SkillCard = ({ title, percentage, description }) => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillInfo}>
        <h4 className={styles.skillName}>{title}</h4>
        <p className={styles.skillDescription}>{description}</p>
      </div>
      
      <div className={styles.progressWrapper}>
        <div className={styles.progressBarBg}>
          <div 
            className={styles.progressBarFill} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <span className={styles.percentageText}>{percentage}%</span>
      </div>
    </div>
  );
};

export default SkillCard;