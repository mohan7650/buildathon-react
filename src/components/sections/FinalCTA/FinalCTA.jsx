// ============================================
// BUILDATHON — Final CTA Section
// components/sections/FinalCTA/FinalCTA.jsx
// ============================================

import { EVENT } from '../../../utils/constants';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
  return (
    <section className={styles.final} id="final-cta">

      <div className="container">

        <div className={`${styles.card} reveal`}>

          <div className={styles.inner}>

            {/* Eyebrow */}
            <span className="eyebrow">
              <span className="dot" />
              Applications Open
            </span>

            {/* Heading */}
            <h2 className={styles.heading}>
              The next iconic AI company
              <br />
              might begin here.
            </h2>

            {/* Body */}
            <p className={styles.body}>
              Build alongside ambitious founders,
              elite engineers, designers, and operators
              in a high-intensity sprint built for people
              who actually ship.
            </p>

            {/* CTA Buttons */}
            <div className={styles.ctas}>

              <a
                className="btn btn-primary"
                href="#apply"
              >
                Apply Now

                <svg
                  className="arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>

              </a>

              <a
  className="btn btn-primary"
  href="#apply"
>
  Become a Sponsor

  <svg
    className="arrow"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
</a>

            </div>

            {/* Meta */}
            <div className={styles.meta}>

              

              <span aria-hidden="true">
                •
              </span>

              <span>
                {EVENT.dates}
              </span>

              <span aria-hidden="true">
                •
              </span>

              <span>
                {EVENT.location}
              </span>

              <span aria-hidden="true">
                •
              </span>

              <span>
                {EVENT.duration}
              </span>

            </div>

            {/* Trust Line */}
            <div className={styles.trustLine}>
              Backed by founders, operators, investors,
              and developer platforms helping the next
              generation of AI builders launch real
              products — not just prototypes.
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}