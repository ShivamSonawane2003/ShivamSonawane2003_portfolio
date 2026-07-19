import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  /** stagger delay in seconds */
  delay?: number;
  distance?: number;
  once?: boolean;
  as?: 'div' | 'li' | 'span' | 'section';
}

const translate = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up':
      return `translateY(${distance}px)`;
    case 'down':
      return `translateY(-${distance}px)`;
    case 'left':
      return `translateX(${distance}px)`;
    case 'right':
      return `translateX(-${distance}px)`;
    default:
      return 'none';
  }
};

/**
 * Scroll-triggered entrance animation.
 *
 * Deliberately built on IntersectionObserver + CSS transitions rather than a
 * JS animation loop. A JS/rAF-driven animation can stall (background tab,
 * throttled or low-powered device) and leave content frozen at opacity 0 —
 * i.e. invisible. Here the "revealed" state is a plain style change, so the
 * content always ends up visible even if the transition never visually plays.
 */
const Reveal = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  distance = 24,
  once = true,
  as: Tag = 'div',
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browser) → show immediately.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    // Anything already on screen at mount is shown right away, without
    // waiting for an observer callback to be delivered.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
    }

    let observerFired = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        observerFired = true;
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin: '-60px 0px -60px 0px' }
    );
    io.observe(el);

    // Fail-safe: if the observer never delivers a single callback (throttled
    // tab, odd browser), reveal anyway. Content must never stay invisible.
    const safety = window.setTimeout(() => {
      if (!observerFired) setInView(true);
    }, 2500);

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, [once]);

  const duration = reduceMotion ? 350 : 600;
  const style: CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView || reduceMotion ? 'none' : translate(direction, distance),
    transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  };

  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
};

export default Reveal;
