import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <h2 className={styles.title}>THANK YOU FOR WATCHING!</h2>
        <p className={styles.contacts}>
          Ул. Пушистая, 12 · +7 (999) 123-45-67 ·{' '}
          <a href="mailto:hello@catastrophe.coffee">hello@catastrophe.coffee</a>
        </p>
        <div className={styles.bottom}>
          <span>© 2026 Catastrophe & Coffee</span>
          <nav className={styles.links}>
            <a href="#">Instagram</a>
            <a href="#">Telegram</a>
            <a href="#">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}