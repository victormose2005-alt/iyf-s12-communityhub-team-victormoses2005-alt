import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} CommunityHub. Built by the CommunityHub team.</p>
      <p>
        <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
      </p>
    </footer>
  );
}
export default Footer;
