import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logo}>Catastrophe & Coffee</div>
        <nav className={styles.nav}>
          <a href="#home">About us</a>
          <a href="#features">Book a visit</a>
          <a href="#features">Adoption</a>
          <a href="#footer">Contact</a>
        </nav>
        <button className={styles.reserve}>Book a Visit</button>
        <button className={styles.burger} aria-label="Открыть меню">
          ☰
        </button>
      </div>
    </header>
  );
}