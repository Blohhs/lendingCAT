import React from 'react';
import Image from 'next/image';
import styles from './Welcome.module.css';

export default function Welcome(): React.JSX.Element {
  return (
    <section className={styles.section}>
      
      {/* БОЛЬШАЯ ЛАПКА СЛЕВА */}
      <Image
        src="/img/lapka1.png" 
        alt=""
        width={350}
        height={350}
        className={styles.paw}
      />

      {/* ФОНОВЫЙ КОТ */}
      <Image
        src="/img/cat4.png" 
        alt=""
        width={700}
        height={700}
        className={styles.bgCat}
      />

      {/* СЛЕДЫ НА ФОНЕ */}
      <Image
        src="/img/partikl-lapki.png" 
        alt=""
        width={230}
        height={230}
        className={styles.tracksTop}
      />
      <Image
        src="/img/partikl-lapki.png" 
        alt=""
        width={50}
        height={50}
        className={styles.tracksBottom}
      />
      <Image
        src="/img/partikl-lapki.png" 
        alt=""
        width={50}
        height={50}
        className={styles.tracksRight}
      />

      {/* ТЕКСТОВАЯ ЧАСТЬ */}
      <div className={styles.textWrap}>
        <h2 className={styles.title}>
          <span className={styles.orangeText}>Welcome to</span> Catastrophe&Coffee,<br />
          where the only thing more chaotic than our furry friends is the flavor of our coffee!
        </h2>
        
        <h3 className={styles.missionTitle}>
          Our mission is simple:
        </h3>
        <p className={styles.missionText}>
          We're not just a café - we're a community of coffee lovers and cat enthusiasts who share a passion for creating a comfortable and safe haven for our furry residents.
        </p>
      </div>

      {/* СЕТКА С КАРТОЧКАМИ */}
      <div className={styles.grid}>
        
        {/* Левая карточка */}
        <div className={styles.card}>
          <p className={styles.cardLabel}>BREW TASTY COFFEE</p>
          <div className={styles.cardImageWrap}>
            <Image 
              src="/img/coffe-cat.jpg" 
              alt="Coffee and cat" 
              fill 
              className={styles.cardImage} 
            />
          </div>
        </div>

        {/* Центральная карточка */}
        <div className={`${styles.card} ${styles.cardCenter}`}>
          <p className={styles.cardLabel}>BRING A LITTLE CHAOS</p>
          <div className={styles.cardImageWrap}>
            <Image 
              src="/img/cat-with-book.jpg" 
              alt="Cat with book" 
              fill 
              className={styles.cardImage} 
            />
          </div>
        </div>

        {/* Правая карточка */}
        <div className={styles.card}>
          <p className={styles.cardLabel}>LET THE KITTIES TO PLAY</p>
          <div className={styles.cardImageWrap}>
            <Image 
              src="/img/cat-in-box.png" 
              alt="Cat in box" 
              fill 
              className={styles.cardImage} 
            />
          </div>
        </div>

      </div>
    </section>
  );
}