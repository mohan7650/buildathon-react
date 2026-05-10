// ============================================
// BUILDATHON — Sponsors Section
// ============================================

import styles from './Sponsors.module.css';

/* ============================================
   Sponsor Logos
============================================ */

import lovableLogo from '../../../assets/logos/lovable.png';
import tavilyLogo from '../../../assets/logos/Tavily.png';
import seedlegalsLogo from '../../../assets/logos/SeedLegals.png';
import redbullLogo from '../../../assets/logos/RedBull.png';

/* ============================================
   University Logos
============================================ */

import riceLogo from '../../../assets/logos/rice.png';
import smuLogo from '../../../assets/logos/smu.png';
import baylorLogo from '../../../assets/logos/baylor.png';
import houstonLogo from '../../../assets/logos/Houston.png';
import texasHornLogo from '../../../assets/logos/texas_horn.png';
import texasTechLogo from '../../../assets/logos/texas_tech.png';
import untLogo from '../../../assets/logos/unt.png';
import utdLogo from '../../../assets/logos/unt of texas_dallas.png';

/* ============================================
   Sponsors
============================================ */

const sponsors = [
  {
    name: 'Lovable',
    logo: lovableLogo,
  },
  {
    name: 'Tavily',
    logo: tavilyLogo,
  },
  {
    name: 'SeedLegals',
    logo: seedlegalsLogo,
  },
  {
    name: 'Red Bull',
    logo: redbullLogo,
  },
];

/* ============================================
   Universities
============================================ */

const universities = [
  {
    name: 'Rice University',
    logo: riceLogo,
  },
  {
    name: 'Southern Methodist University',
    logo: smuLogo,
  },
  {
    name: 'Baylor University',
    logo: baylorLogo,
  },
  {
    name: 'University of Houston',
    logo: houstonLogo,
  },
  {
    name: 'University of Texas',
    logo: texasHornLogo,
  },
  {
    name: 'Texas Tech University',
    logo: texasTechLogo,
  },
  {
    name: 'University of North Texas',
    logo: untLogo,
  },
  {
    name: 'University of Texas Dallas',
    logo: utdLogo,
  },
];

/* ============================================
   Component
============================================ */

export default function Sponsors() {
  return (
    <section
      className={styles.section}
      id="sponsors"
    >

      {/* ============================================
         TOP SECTION
      ============================================ */}

      <div className={styles.wrapper}>

        {/* LEFT */}

        <div className={styles.left}>

          <span className={styles.eyebrow}>
            <span className={styles.dot}></span>
            Early Partners
          </span>

          <h2 className={styles.title}>
            Already in
            <br />
            the room.
          </h2>

        </div>

        {/* RIGHT */}

        <div className={styles.grid}>

          {sponsors.map((brand) => (
            <div
              className={styles.logoCard}
              key={brand.name}
            >

              <div className={styles.logoInner}>

                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={styles.logo}
                  loading="lazy"
                />

              </div>

            </div>
          ))}

          {/* CTA CARD */}

          <a
            href="#private-access"
            className={`${styles.logoCard} ${styles.ctaCard}`}
          >
            Your Track →
          </a>

        </div>

      </div>

      {/* ============================================
         UNIVERSITIES SECTION
      ============================================ */}

      <div className={styles.universitySection}>

        <span className={styles.universityLabel}>
          Universities
        </span>

        <div className={styles.universityGrid}>

          {universities.map((uni) => (
            <div
              className={styles.universityCard}
              key={uni.name}
            >

              <img
                src={uni.logo}
                alt={uni.name}
                className={styles.universityLogo}
                loading="lazy"
              />

            </div>
          ))}

        </div>

      </div>

      {/* ============================================
         BOTTOM CTA
      ============================================ */}

      <div className={styles.bottomCard}>

        <div>

          <h3 className={styles.bottomTitle}>
            Want to own a track?
          </h3>

          <p className={styles.bottomDesc}>
            7 sponsor spots remaining.
            Each sponsor gets a dedicated
            problem statement, API adoption at scale,
            and Match Day visibility.
          </p>

        </div>

        <a
          href="#apply"
          className={styles.button}
        >
          Become a Sponsor
        </a>

      </div>

    </section>
  );
}