import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer(): React.JSX.Element {
  return (
    <footer className={styles.footer}>
    
      <Image src="/img/lapka3.png" alt="" width={320} height={320} className={styles.bgPawRight} />

      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          How To <span className={styles.orangeText}>Contact Us</span>
        </h2>

        <div className={styles.contentGrid}>

          <div className={styles.logoWrap}>
            <div className={styles.logoBox}>
              Catastrophe<br />& Coffee
            </div>
          </div>

          <div className={styles.infoCol}>
            <h3 className={styles.subTitle}>Address</h3>
            <p className={styles.text}>
              4969 Roswell Rd #156,<br />
              Atlanta, GA 30342
            </p>

            <h3 className={styles.subTitle} style={{ marginTop: '30px' }}>Hours</h3>
            <p className={styles.text}>
              Monday and Tuesday: Closed<br />
              Wednesday-Friday: 10am - 5pm<br />
              Saturday and Sunday:<br />
              12pm-2pm
            </p>
          </div>

          <div className={styles.infoCol}>
            <h3 className={styles.subTitle}>Email us</h3>
            <p className={styles.text}>Catastropheinfo@gmail.com</p>

            <h3 className={styles.subTitle} style={{ marginTop: '30px' }}>Our Social Media:</h3>
            <div className={styles.socialIconsWrap}>
              <Image 
                src="/img/icon.png" 
                alt="Социальные сети" 
                width={120} 
                height={30} 
                style={{ objectFit: 'contain', objectPosition: 'left' }} 
              />
            </div>

            <h3 className={styles.subTitle} style={{ marginTop: '30px' }}>Call us</h3>
            <p className={styles.text}>(404) 789-5955</p>
          </div>

        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

    </footer>
  );
}