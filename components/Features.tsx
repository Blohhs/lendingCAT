import Image from 'next/image';
import styles from './Features.module.css';

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About</h2>

        <div className={styles.inner}>
          <div className={styles.imageWrap}>
            <Image
              src="/img/cat3.png"
              alt="Кот"
              width={200}
              height={250}
              className={styles.catImage}
            />
            <Image
              src="/img/partikl.png"
              alt=""
              width={60}
              height={60}
              className={`${styles.partikl} ${styles.partikl1}`}
            />
            <Image
              src="/img/partikl.png"
              alt=""
              width={50}
              height={50}
              className={`${styles.partikl} ${styles.partikl2}`}
            />
          </div>

          <div className={styles.text}>
            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Project idea</h3>
              <p className={styles.blockText}>
                Creating a safe, comfortable environment for
                animals while attracting new clients through
                engaging activities, strategic promotions, and
                exceptional care.
              </p>
            </div>

            <div className={styles.block}>
              <h3 className={styles.blockTitle}>Project tasks</h3>
              <p className={styles.blockText}>
                The project introduces Cat Yoga, offering a unique,
                relaxing experience that attracts young women,
                promotes a welcoming space to unwind, and
                encourages venue engagement and cat adoptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}