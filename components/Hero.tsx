import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.frame}>
          <Image
            src="/img/cat1.png"
            alt=""
            width={200}
            height={140}
            className={styles.catTop}
            priority
          />

          <Image
            src="/img/lapka1.png"
            alt=""
            width={80}
            height={110}
            className={`${styles.paw} ${styles.pawLeft1}`}
            priority
          />
          <Image
            src="/img/lapka2.png"
            alt=""
            width={80}
            height={110}
            className={`${styles.paw} ${styles.pawLeft2}`}
            priority
          />
          <Image
            src="/img/lapka3.png"
            alt=""
            width={80}
            height={110}
            className={`${styles.paw} ${styles.pawLeft3}`}
            priority
          />

          <Image
            src="/img/lapka2.png"
            alt=""
            width={80}
            height={110}
            className={`${styles.paw} ${styles.pawRight1}`}
            priority
          />
          <Image
            src="/img/lapka3.png"
            alt=""
            width={80}
            height={110}
            className={`${styles.paw} ${styles.pawRight2}`}
            priority
          />
          <Image
            src="/img/lapka1.png"
            alt=""
            width={80}
            height={110}
            className={`${styles.paw} ${styles.pawRight3}`}
            priority
          />

          <h1 className={styles.title}>Coffee. Cats. Chaos.</h1>
          <p className={styles.subtitle}>
            Come to our cafe for delicious drinks
            and a wonderful time with furry friends.
          </p>
          <button className="btn">Book a Visit</button>

          <Image
            src="/img/cat2.png"
            alt=""
            width={200}
            height={140}
            className={styles.catBottom}
            priority
          />
        </div>
      </div>
    </section>
  );
}