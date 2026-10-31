import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero(): React.JSX.Element {
  return (
    <section className={styles.hero}>
      <div className={styles.frame}>

        <div className={styles.catTop}>
          <Image src="/img/cat2.png" alt="" width={320} height={160} priority style={{ objectFit: 'contain' }} />
        </div>

        <nav className={styles.navContainer}>
          <div className={styles.navGroup}>
            <a href="#about" className={styles.navLink}>About us</a>
            <a href="#book" className={styles.navLink}>Book a visit</a>
          </div>
          <div className={styles.navLogo}>Catastrophe<br />& Coffee</div>
          <div className={styles.navGroup}>
            <a href="#adoption" className={styles.navLink}>Adoption</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>
        </nav>

        <div className={styles.leftPawsContainer}>
          <Image src="/img/lapka1.png" alt="" width={950} height={320} className={styles.paw} priority />
          <Image src="/img/lapka2.png" alt="" width={950} height={320} className={styles.paw} priority />
          <Image src="/img/lapka3.png" alt="" width={950} height={320} className={styles.paw} priority />
        </div>

        <div className={styles.rightPawsContainer}>
          <Image src="/img/lapka1.png" alt="" width={950} height={320} className={styles.paw} priority />
          <Image src="/img/lapka2.png" alt="" width={950} height={320} className={styles.paw} priority />
          <Image src="/img/lapka3.png" alt="" width={950} height={320} className={styles.paw} priority />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Coffee. Cats. Chaos.</h1>
          <p className={styles.subtitle}>
            Come to our café for delicious drinks and a wonderful time with furry friends.
          </p>
          <button type="button" className={styles.btn}>BOOK A VISIT</button>
        </div>

        <div className={styles.footprints}>
          <Image
            src="/img/partikl-lapki.png"
            alt=""
            width={75}
            height={150}
            className={styles.particleImg}
            priority
          />
        </div>

        <div className={styles.catBottom}>
          <Image src="/img/cat1.png" alt="" width={320} height={160} priority style={{ objectFit: 'contain' }} />
        </div>

      </div>
    </section>
  );
}