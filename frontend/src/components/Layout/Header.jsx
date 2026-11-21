import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;
  const close = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="CommunityHub home">
          🏠 CommunityHub
        </Link>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰ Menu
        </button>
        <nav id="main-nav" className={`${styles.nav} ${menuOpen ? styles.open : ""}`} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li><NavLink to="/" end className={linkClass} onClick={close}>Home</NavLink></li>
            <li><NavLink to="/posts" className={linkClass} onClick={close}>Posts</NavLink></li>
            <li><NavLink to="/create" className={linkClass} onClick={close}>Create Post</NavLink></li>
            <li><NavLink to="/about" className={linkClass} onClick={close}>About</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
