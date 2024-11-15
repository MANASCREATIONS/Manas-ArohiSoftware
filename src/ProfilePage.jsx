import React from 'react';
import styles from './ProfilePage.module.css';
import ProfileInfo from './ProfileInfo';
import ProfileImages from './ProfileImages';

function ProfilePage() {
  return (
    <main className={styles.profileContainer}>
      <ProfileInfo />
      <ProfileImages />
    </main>
  );
}

export default ProfilePage;