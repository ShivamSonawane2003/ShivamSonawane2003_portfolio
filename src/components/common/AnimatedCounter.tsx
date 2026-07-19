import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

/** Counts up from 0 to `value` the first time it scrolls into view. */
const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 1800 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setCount(value);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // easeOutExpo for a snappy finish
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Safety net: requestAnimationFrame is paused entirely in background or
    // heavily throttled tabs, which would leave the counter stuck at 0.
    // Timeouts still fire, so guarantee we land on the real number.
    const fallback = window.setTimeout(() => setCount(value), duration + 400);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fallback);
    };
  }, [isInView, value, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
