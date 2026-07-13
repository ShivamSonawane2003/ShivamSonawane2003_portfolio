import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  distance?: number;
  once?: boolean;
  as?: 'div' | 'li' | 'span' | 'section';
}

const offset = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':
      return { y: distance };
    case 'down':
      return { y: -distance };
    case 'left':
      return { x: distance };
    case 'right':
      return { x: -distance };
    default:
      return {};
  }
};

/**
 * Scroll-triggered entrance animation.
 *
 * Uses the `useInView` hook (reliable across environments) rather than the
 * `whileInView` prop, and renders content immediately with no transform when
 * the user prefers reduced motion.
 */
const Reveal = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  distance = 24,
  once = true,
  as = 'div',
}: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, margin: '-60px' });
  const MotionTag = motion[as];

  if (reduceMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      initial={{ opacity: 0, ...offset(direction, distance) }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
