// ============================================
// BUILDATHON — Footer
// components/layouts/Footer/Footer.jsx
// ============================================

import { FOOTER_LINKS } from '../../../utils/constants';
import styles from './Footer.module.css';

function SocialIcon({ name, children, href }) {
  return (
    <a className={styles.social} href={href} aria-label={name}>
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <a href="#top" className={styles.brandLink}>
              <span className={styles.brandMark} aria-hidden="true" />
              <span className={styles.brandName}>Buildathon</span>
            </a>
            <p>
              The world's most ambitious builders, converged. 24 hours. 10
              tracks. One stage. Build. Match. Ship.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section} className={styles.col}>
              <h5>{section}</h5>
              <ul>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <div>© 2026 Buildathon. Made by builders, for builders.</div>
          <div className={styles.socials}>
            <SocialIcon name="X (Twitter)" href="#">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
            <SocialIcon name="GitHub" href="#">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
              </svg>
            </SocialIcon>
            <SocialIcon name="LinkedIn" href="#">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </SocialIcon>
            <SocialIcon name="YouTube" href="#">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23 7.2c-.3-1.1-1.1-1.9-2.2-2.2C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.8.5C2.1 5.3 1.3 6.1 1 7.2.5 9.1.5 12 .5 12s0 2.9.5 4.8c.3 1.1 1.1 1.9 2.2 2.2 1.9.5 8.8.5 8.8.5s6.9 0 8.8-.5c1.1-.3 1.9-1.1 2.2-2.2.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM9.8 15.3V8.7l5.7 3.3z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
