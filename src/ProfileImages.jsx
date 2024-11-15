import React from 'react';
import styles from './ProfilePage.module.css';

function ProfileImages() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a22f44b2fd141d5a2523baf731bd29dceff7bbb854af9874ad5753532bf74db?placeholderIfAbsent=true&apiKey=c005963611c94ae783cce2502d9c8395", alt: "Profile image 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/069d95eadbb0829a34dde695a3021b72f6488cbc9aa5751a7936f1f67e6fd655?placeholderIfAbsent=true&apiKey=c005963611c94ae783cce2502d9c8395", alt: "Profile image 2" }
  ];

  return (
    <aside className={styles.profileImages}>
      {images.map((image, index) => (
        <img 
          key={index}
          src={image.src} 
          alt={image.alt} 
          className={styles.profileImage}
        />
      ))}
    </aside>
  );
}

export default ProfileImages;