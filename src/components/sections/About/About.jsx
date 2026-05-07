// ============================================
// BUILDATHON — About / What is Buildathon
// components/sections/About/About.jsx
// ============================================

import styles from './About.module.css';

const PILLARS = [
  {
    id: 'intent',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Build with intent',
    desc: 'Clear tracks, focused briefs, and challenges that deserve more than a weekend prototype.',
  },
  {
    id: 'match',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Match with the best',
    desc: 'Meet serious builders across engineering, design, product, and AI then build together fast.',
  },
  {
    id: 'ship',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 3h18v18H3z" opacity=".25" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Ship to the world',
    desc: 'Top projects earn visibility, feedback, and a path toward pilots, funding, or hiring conversations.',
  },
];

export default function About() {
  return (
    <section className={styles.about} id="what">
      <div className="container">
        <div className={styles.grid}>
          {/* Left content */}
          <div className="reveal">
            <span className="eyebrow">
              <span className="dot" />
              What is Buildathon
            </span>
            <h2 className={styles.heading}>
              Not just a hackathon.<br />
              <em>A launchpad for builders.</em>
            </h2>
            <p className={styles.body}>
              Buildathon turns raw ambition into real projects. In one focused
              sprint, builders meet the right teammates, work on meaningful
              tracks, and present to people who can fund, hire, mentor, or adopt
              what they create.
            </p>

            <div className={styles.pillars}>
              {PILLARS.map(({ id, icon, title, desc }) => (
                <div key={id} className={styles.pillar}>
                  <div className={styles.pillarIcon}>{icon}</div>
                  <div className={styles.pillarText}>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className={`${styles.visual} reveal`} aria-hidden="true">
            <div className={styles.orbit}>
              <div className={`${styles.orbitRing} ${styles.r2}`} />
              <div className={`${styles.orbitRing} ${styles.r1}`}>
                <div className={`${styles.orbitDot} ${styles.d1}`} />
                <div className={`${styles.orbitDot} ${styles.d3}`} />
              </div>
              <div className={`${styles.orbitRing} ${styles.r3}`}>
                <div className={`${styles.orbitDot} ${styles.d2}`} />
              </div>
              <div className={styles.orbitCore} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
