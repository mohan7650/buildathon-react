// ============================================
// BUILDATHON — Hero Section
// components/sections/Hero/Hero.jsx
// ============================================

import { useCountdown } from '../../../hooks/useCountdown';
import { EVENT, STATS } from '../../../utils/constants';
import styles from './Hero.module.css';

function CountdownItem({ value, label }) {
  return (
    <div className={styles.countItem}>
      <span className={styles.countNum}>{value}</span>
      <small className={styles.countLabel}>{label}</small>
    </div>
  );
}

function StatItem({ number, label }) {
  return (
    <div className={styles.statItem}>
      <div className={styles.statNumber}>
        {number}
      </div>

      <div className={styles.statLabel}>
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(EVENT.targetDate);

  return (
    <header className={styles.hero} id="top">
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.gridBg} />
        <div className={styles.noise} />
      </div>

      <div className={`container ${styles.heroInner}`}>
        <span className={styles.badge}>
          <span className={styles.pill}>LIVE</span>
          Applications open · 24-hour build sprint · Dallas, TX
        </span>

        <h1 className={styles.title}>
          <span className={`${styles.word} ${styles.accent}`}>Buildathon</span>
          <span className={`${styles.word} ${styles.accent}`}>Dallas.</span>
        </h1>

        <p className={styles.tagline}>Build. Match. Ship.</p>

        <p className={styles.sub}>
          A curated build sprint for ambitious founders, engineers, and designers.
          Form a team, choose a track, and ship something people remember —
          in <strong> 24 hours.</strong>
        </p>

        <div className={styles.ctas}>
          <a className="btn btn-primary" href="#apply">
            Join the Buildathon →
          </a>

          <a className="btn btn-ghost" href="#what">
            Inside Buildathon
          </a>
        </div>

        <div className={styles.meta}>
          <span className={styles.metaItem}>⏱ 24 hours, end-to-end</span>
          <span className={styles.sep} />
          <span className={styles.metaItem}>📍 Dallas, TX</span>
          <span className={styles.sep} />
          <span className={styles.metaItem}>👥 1,000+ ambitious builders</span>
        </div>

        <div aria-live="polite" aria-atomic="false">
          {!isExpired ? (
            <div className={styles.countdown}>
              <CountdownItem value={days} label="Days" />
              <CountdownItem value={hours} label="Hours" />
              <CountdownItem value={minutes} label="Minutes" />
              <CountdownItem value={seconds} label="Seconds" />
            </div>
          ) : (
            <p className={styles.countdownExpired}>
              Event has begun — watch the recap
            </p>
          )}
        </div>

        <div className={styles.location}>
          Dallas, Texas · June 18–19, 2026
        </div>

        <div className={styles.statsShowcase}>
          <div className={styles.statsGlow} aria-hidden="true" />

          <div className={styles.statsGrid}>
            {STATS.map(({ number, label }) => (
              <StatItem key={label} number={number} label={label} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}