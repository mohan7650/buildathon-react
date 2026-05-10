// ============================================
// BUILDATHON — Navbar Component
// components/layouts/Navbar/Navbar.jsx
// ============================================

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { NAV_LINKS } from '../../../utils/constants';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.nav} aria-label="Primary navigation">
        <div className={styles.inner}>

          {/* Brand */}
          <a href="#top" className={styles.brand} onClick={close}>
            <div className={styles.logoGrid} aria-hidden="true">
              <span className={`${styles.square} ${styles.bright}`} />
              <span className={`${styles.square} ${styles.dim}`} />
              <span className={`${styles.square} ${styles.bright}`} />
              <span className={`${styles.square} ${styles.dim}`} />
              <span className={`${styles.square} ${styles.bright}`} />
              <span className={`${styles.square} ${styles.dim}`} />
              <span className={`${styles.square} ${styles.bright}`} />
              <span className={`${styles.square} ${styles.dim}`} />
              <span className={`${styles.square} ${styles.bright}`} />
            </div>
            <span className={styles.brandText}>buildathon.co</span>
          </a>

          {/* Desktop links */}
          <div className={styles.links} role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={label} className={styles.link} href={href} role="listitem">
                {label}
              </a>
            ))}
            <Link to="/login" className={`${styles.link} ${styles.loginLink}`}>
              Builder Login
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link to="/login" className={styles.cta}>
            Apply <span aria-hidden="true">→</span>
          </Link>

          {/* Hamburger — mobile only */}
          <button
            className={styles.menuBtn}
            onClick={() => setIsOpen((o) => !o)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className={`${styles.bar} ${isOpen ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${isOpen ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${isOpen ? styles.barOpen3 : ''}`} />
          </button>

        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav>
          <ul className={styles.mobileLinks}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a className={styles.mobileLink} href={href} onClick={close}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link className={styles.mobileLink} to="/login" onClick={close}>
                Builder Login
              </Link>
            </li>
          </ul>

          <Link
            className={`${styles.mobileLink} ${styles.mobileCta}`}
            to="/login"
            onClick={close}
          >
            Apply →
          </Link>
        </nav>
      </div>
    </>
  );
}
