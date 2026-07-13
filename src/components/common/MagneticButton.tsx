import { useRef, useState, type ReactNode, type MouseEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: string | boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  /** how strongly it follows the cursor (px) */
  strength?: number;
}

/**
 * A button/link that subtly leans toward the cursor. Falls back to a plain,
 * still element when prefers-reduced-motion is set.
 */
const MagneticButton = ({
  children,
  href,
  onClick,
  className = '',
  download,
  target,
  rel,
  ariaLabel,
  strength = 14,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: (x / rect.width) * strength * 2, y: (y / rect.height) * strength * 2 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const motionProps = {
    ref: ref as never,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    animate: { x: pos.x, y: pos.y },
    transition: { type: 'spring' as const, stiffness: 250, damping: 18, mass: 0.4 },
    className,
    'aria-label': ariaLabel,
  };

  if (href) {
    return (
      <motion.a href={href} download={download} target={target} rel={rel} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type="button" onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
};

export default MagneticButton;
