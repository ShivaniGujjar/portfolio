import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillCard.module.css';

const SkillCard = ({ label, title, desc, icons, color, percentage, index }) => {
  return (
    <motion.div 
      className={styles.skillCard}
      style={{ '--accent': color }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.skillContent}>
        <span className={styles.label}>{label}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        
        <div className={styles.progressContainer}>
          <div className={styles.barBg}>
            <motion.div 
              className={styles.barFill} 
              style={{ background: color }}
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            />
          </div>
          <span className={styles.percent}>{percentage}%</span>
        </div>
      </div>

      <div className={styles.iconWrapper}>
        {icons.map((icon, i) => (
          <motion.div 
            key={i} 
            className={styles.iconBox}
            whileHover={{ y: -10, color: color, borderColor: color }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;