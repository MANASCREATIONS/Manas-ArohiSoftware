import React from 'react';
import styles from './ProfilePage.module.css';

function ProfileInfo() {
  return (
    <section className={styles.profileInfo}>
      <h1 className={styles.profileName}>MANAS SHIRUDE</h1>
      <div className={styles.statusIndicator} aria-hidden="true" />
      <div className={styles.profileDetails}>
        <p className={styles.jobTitle}>UI/UX DEVELOPER</p>
        <p className={styles.company}>AROHI SOFTWARE</p>
        <p className={styles.location}>NASHIK, MAHARASHTRA</p>
      </div>
      <h2 className={styles.sectionTitle}>ABOUT ME</h2>
      <p className={styles.aboutText}>
        My interests lie in crafting intuitive user experiences and innovative solutions. I'm also delving into predictive analytics, blockchain systems, and database management through my coursework.
        <br />
        In addition to my technical pursuits, I have a keen eye for design and a collaborative mindset, demonstrated by my active involvement in events like 'Prompt Hunting' and 'Avishkar.' I'm enthusiastic about applying my skills in software development internships and contributing to meaningful technological advancements.
      </p>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a84ba80d872828904f92d488c462878e3ea02f267911219edac8dfcbc67a3fd?placeholderIfAbsent=true&apiKey=c005963611c94ae783cce2502d9c8395" alt="Profile icon" className={styles.profileIcon} />
    </section>
  );
}

export default ProfileInfo;