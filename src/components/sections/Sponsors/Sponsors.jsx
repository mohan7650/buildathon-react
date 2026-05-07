// ============================================
// BUILDATHON — Sponsors Section
// ============================================

import styles from './Sponsors.module.css';

import lovableLogo from '../../../assets/logos/lovablel.png';
import tavilyLogo from '../../../assets/logos/Tavily.png';
import seedlegalsLogo from '../../../assets/logos/SeedLegals.png';
import redbullLogo from '../../../assets/logos/RedBull.png';

const sponsors = [
  {
    name: 'Lovablel',
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

export default function Sponsors() {
  return (
    <section className={styles.section} id="sponsors">

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

              <img
                src={brand.logo}
                alt={brand.name}
                className={styles.logo}
              />

            </div>
          ))}

          <a
            href="#private-access"
            className={`${styles.logoCard} ${styles.ctaCard}`}
          >
            Your Track →
          </a>

        </div>

      </div>

      {/* Bottom CTA */}
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