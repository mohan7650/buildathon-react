// ============================================
// BUILDATHON — Tracks Section
// components/sections/Tracks/Tracks.jsx
// ============================================

import styles from './Tracks.module.css';
import { TRACKS } from '../../../utils/constants';

export default function Tracks() {

  return (
    <section className={styles.section} id="tracks">

      {/* Top Content */}
      <div className={styles.top}>

        <span className={styles.eyebrow}>
          Tracks
        </span>

        <h2 className={styles.title}>
          Build what actually matters.
        </h2>

        <p className={styles.desc}>
          Every team receives a real-world problem statement.
          Choose a track, build a solution, and ship something
          people would actually use.
        </p>

      </div>

      {/* Tracks Grid */}
      <div className={styles.grid}>

        {TRACKS.map((track) => (

          <article
            className={styles.card}
            key={track.num}
          >

            {/* Track Number */}
            <div className={styles.trackNum}>
              TRACK {track.num}
            </div>

            {/* Title */}
            <h3 className={styles.cardTitle}>
              {track.name}
            </h3>

            {/* Description */}
            <p className={styles.cardDesc}>
              {track.desc}
            </p>

            {/* CTA */}
            <div className={styles.tags}>

              {track.tags.map((tag) => (

                <a
                  href="#apply"
                  className={styles.sponsorBtn}
                  key={tag}
                >
                  {tag}
                </a>

              ))}

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}