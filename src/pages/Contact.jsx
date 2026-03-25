import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section className={styles.contactWrapper}>
      {/* Bold, Clean Section Title */}
      <h2 className={styles.sectionHeader}>CONTACT</h2>
      
      <div className={styles.formWindow}>
        {/* Terminal Bar */}
        <div className={styles.windowHeader}>
          <div className={styles.dots}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
          </div>
          <span className={styles.headerTitle}>send_message.sh</span>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>User_Name:</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Shivani Gujjar"
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>User_Email:</label>
            <input
              type="email"
              name="email"
              placeholder="shivani@mca.dev"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Message_Body:</label>
            <textarea
              name="message"
              placeholder="Write your query here..."
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.submitButton}>
              Send
            </button>
            
            {isSent && (
              <div className={styles.successBox}>
                MESSAGE_SENT_SUCCESSFULLY [OK]
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;