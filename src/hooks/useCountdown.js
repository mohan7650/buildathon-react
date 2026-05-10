// ============================================
// BUILDATHON — Countdown Hook
// hooks/useCountdown.js
// ============================================

import { useState, useEffect, useRef } from 'react';

/**
 * useCountdown
 * Returns { days, hours, minutes, seconds, isExpired }
 * Automatically cleans up the interval on unmount.
 */
export function useCountdown(targetTimestamp) {
  const [timeLeft, setTimeLeft] = useState(computeTimeLeft(targetTimestamp));
  const intervalRef = useRef(null);

  useEffect(() => {
    const start = () => {
      intervalRef.current = setInterval(() => {
        setTimeLeft(computeTimeLeft(targetTimestamp));
      }, 1000);
    };

    const stop = () => clearInterval(intervalRef.current);

    const onVisibility = () => {
      if (document.hidden) {
        stop();
      } else {
        setTimeLeft(computeTimeLeft(targetTimestamp));
        start();
      }
    };

    start();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [targetTimestamp]);

  return timeLeft;
}

function computeTimeLeft(target) {
  const diff = target - Date.now();

  if (diff <= 0) {
    return { days: '00', hours: '00', minutes: '00', seconds: '00', isExpired: true };
  }

  const pad = (n) => String(n).padStart(2, '0');

  return {
    days: pad(Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: pad(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
    minutes: pad(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))),
    seconds: pad(Math.floor((diff % (1000 * 60)) / 1000)),
    isExpired: false,
  };
}
