// ============================================
// BUILDATHON — Navbar Component
// components/layouts/Navbar/Navbar.jsx
// ============================================

import styles from './Navbar.module.css';
import { NAV_LINKS } from '../../../utils/constants';

import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={styles.nav} aria-label="Primary navigation">
      <div className={styles.inner}>

        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true" />
          <span>Buildathon</span>
        </a>

        <div className={styles.links} role="list">

          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              className={styles.link}
              href={href}
              role="listitem"
            >
              {label}
            </a>
          ))}

          {/* Builder Login */}
          <Link
            to="/login"
            className={`${styles.link} ${styles.loginLink}`}
          >
            Builder Login
          </Link>

        </div>

        {/* Apply Button */}
        <Link to="/login" className={styles.cta}>
          Apply <span aria-hidden="true">→</span>
        </Link>

      </div>
    </nav>
  );
}