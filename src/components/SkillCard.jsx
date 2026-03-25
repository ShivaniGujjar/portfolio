import React from 'react';
import styles from './SkillCard.module.css';

const SkillCard = ({ title, description, percentage }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.desc}>{description}</p>
      
      {/* Retro Progress Bar */}
      <div className={styles.progressContainer}>
        <div 
          className={styles.progressBar} 
          style={{ width: `${percentage}%` }}
        ></div>
        <span className={styles.percentText}>{percentage}%</span>
      </div>
    </div>
  );
};

export default SkillCard;