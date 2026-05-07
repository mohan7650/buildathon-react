// ============================================
// BUILDATHON — Reveal on Scroll Hook
// hooks/useReveal.js
// ============================================

import { useEffect } from 'react';

/**
 * useReveal
 * Attaches an IntersectionObserver to all elements
 * with the `.reveal` class and adds `.in` when visible.
 * Call once in the root App component.
 */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);
}
