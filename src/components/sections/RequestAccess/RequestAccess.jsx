// ============================================
// BUILDATHON — Request Access / Apply Form
// components/sections/RequestAccess/RequestAccess.jsx
// ============================================

import { useState } from 'react';
import { EVENT } from '../../../utils/constants';
import styles from './RequestAccess.module.css';

const INFO_CARDS = [
  { icon: '📍', label: 'Location', value: EVENT.location },
  { icon: '🗓️', label: 'Date', value: EVENT.dates },
  { icon: '⚡', label: 'Format', value: '32-hour Buildathon + live recruiter matching' },
  { icon: '👥', label: 'Participants', value: '1,800+ AI builders & operators' },
];

const ROLES = ['Founder', 'Engineer', 'Designer', 'Recruiter', 'Investor', 'Operator'];
const PARTICIPATION = ['Build', 'Sponsor', 'Recruit', 'Mentor', 'Judge'];

export default function RequestAccess() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    handle: '',
    company: '',
    linkedin: '',
    location: '',
    role: '',
    participation: '',
    goals: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'Required';
    if (!formData.lastName.trim()) errs.lastName = 'Required';
    if (!formData.handle.trim()) errs.handle = 'Required';
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email))
      errs.email = 'Invalid email';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // TODO: wire to backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={styles.section} id="apply">
        <div className={`container ${styles.grid}`}>
          <div />
          <div className={`${styles.form} reveal`}>
            <div className={styles.successState}>
              <div className={styles.successIcon}>✓</div>
              <h3>Application received</h3>
              <p>
                We review every application manually. Expect a response within
                48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section} id="apply">
      <div className={`container ${styles.grid}`}>
        {/* Left side */}
        <div className={`${styles.left} reveal`}>
          <span className={styles.mini}>Private Access</span>

          <h2 className={styles.heading}>
            Build with the people<br />
            shaping what's next.
          </h2>

          <p className={styles.tagline}>
            The internet's most ambitious AI builders, founders, operators,
            recruiters, and creators  together for 32 hours of shipping,
            networking, and real-world opportunity.
          </p>

          <p className={styles.body}>
            This is not an open registration. Every seat is intentionally
            curated to create meaningful teams, serious products, and long-term
            relationships that continue long after the event ends.
          </p>

          <div className={styles.infoList}>
            {INFO_CARDS.map(({ icon, label, value }) => (
              <div key={label} className={styles.infoCard}>
                <div className={styles.infoIcon}>{icon}</div>
                <div>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className={`${styles.form} reveal`}>
          <div className={styles.formHead}>
            <span>Partner &amp; Attendee Interest Form</span>
            <span className={styles.openBadge}>• OPEN</span>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.group}>
                <label htmlFor="firstName">First Name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Shan"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                  aria-required="true"
                  aria-invalid={!!errors.firstName}
                />
                {errors.firstName && (
                  <span className={styles.error}>{errors.firstName}</span>
                )}
              </div>
              <div className={styles.group}>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Kumar"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                  aria-required="true"
                  aria-invalid={!!errors.lastName}
                />
                {errors.lastName && (
                  <span className={styles.error}>{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className={styles.group}>
              <label htmlFor="email">Work Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            <div className={styles.group}>
              <label htmlFor="handle">Profile Handle *</label>
              <input
                id="handle"
                name="handle"
                type="text"
                placeholder="@twitter / github / linkedin"
                value={formData.handle}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={!!errors.handle}
              />
              {errors.handle && (
                <span className={styles.error}>{errors.handle}</span>
              )}
            </div>

            <div className={styles.group}>
              <label htmlFor="company">Company / Organization</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="OpenAI / MIT / Sequoia"
                value={formData.company}
                onChange={handleChange}
                autoComplete="organization"
              />
            </div>

            <div className={styles.group}>
              <label htmlFor="linkedin">LinkedIn Profile URL</label>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/username"
                value={formData.linkedin}
                onChange={handleChange}
                autoComplete="url"
              />
            </div>

            <div className={styles.group}>
              <label htmlFor="location">Where are you based?</label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="Dallas, TX / New York, NY"
                value={formData.location}
                onChange={handleChange}
                autoComplete="address-level2"
              />
            </div>

            <div className={styles.divider} />

            <div className={styles.group}>
              <label htmlFor="role">Your Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select your role…</option>
                {ROLES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div className={styles.group}>
              <label htmlFor="participation">How do you plan to participate?</label>
              <select
                id="participation"
                name="participation"
                value={formData.participation}
                onChange={handleChange}
              >
                <option value="">Select a category…</option>
                {PARTICIPATION.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div className={styles.group}>
              <label htmlFor="goals">
                What are you hoping to get out of this event?
              </label>
              <textarea
                id="goals"
                name="goals"
                placeholder="Talent pipeline, API adoption, startup exposure, elite networking, recruiting, investment opportunities — tell us what success looks like for you."
                value={formData.goals}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit Interest →
            </button>

            <p className={styles.note}>
              Every application is reviewed manually. Expect a response within
              48 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
