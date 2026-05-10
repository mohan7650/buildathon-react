// ============================================
// BUILDATHON — University Partners Marquee
// ============================================

import styles from './Partners.module.css';

/* ============================================
   University Logo Imports
============================================ */

import rice from '../../../assets/logos/rice.png';
import unt from '../../../assets/logos/unt.png';
import baylor from '../../../assets/logos/baylor.png';
import texasTech from '../../../assets/logos/texas_tech.png';
import houston from '../../../assets/logos/Houston.png';
import utd from '../../../assets/logos/unt of texas_dallas.png';
import smu from '../../../assets/logos/smu.png';
import texasAM from '../../../assets/logos/texas a&m.png';
import texasHorn from '../../../assets/logos/texas_horn.png';

/* ============================================
   Universities
============================================ */

const universities = [
  {
    name: 'Rice University',
    logo: rice,
  },
  {
    name: 'University of North Texas',
    logo: unt,
  },
  {
    name: 'Baylor University',
    logo: baylor,
  },
  {
    name: 'Texas Tech University',
    logo: texasTech,
  },
  {
    name: 'University of Houston',
    logo: houston,
  },
  {
    name: 'University of Texas at Dallas',
    logo: utd,
  },
  {
    name: 'Southern Methodist University',
    logo: smu,
  },
  {
    name: 'Texas A&M University',
    logo: texasAM,
  },
  {
    name: 'University of Texas at Austin',
    logo: texasHorn,
  },
];

/* ============================================
   Component
============================================ */

export default function Partners() {
  return (
    <section className={styles.section}>

      {/* Heading */}

      <div className={styles.heading}>
        Featuring partners & participants from elite institutions
      </div>

      {/* Marquee */}

      <div className={styles.marquee}>

        <div className={styles.track}>

          {[...universities, ...universities].map((uni, index) => (
            <div className={styles.card} key={index}>

              <img
                src={uni.logo}
                alt={uni.name}
                className={styles.logo}
                loading="lazy"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}