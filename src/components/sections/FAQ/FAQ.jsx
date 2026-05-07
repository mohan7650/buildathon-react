// ============================================
// BUILDATHON — FAQ Section
// components/sections/FAQ/FAQ.jsx
// ============================================

import { useState } from 'react';
import { FAQ_ITEMS } from '../../../utils/constants';
import styles from './FAQ.module.css';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.question}
        aria-expanded={isOpen}
        aria-controls={item.id}
        onClick={onToggle}
      >
        <span>{item.question}</span>
        <span className={styles.toggle} aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        id={item.id}
        className={styles.answer}
        role="region"
        aria-labelledby={`${item.id}-btn`}
      >
        <div className={styles.answerInner}>{item.answer}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">
            <span className="dot" />
            Frequently asked
          </span>
          <h2>The details.</h2>
        </div>

        <div className={`${styles.list} reveal`} role="list">
          {FAQ_ITEMS.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
