import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: string;
  highlight: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

const SectionHeader = ({
  eyebrow,
  eyebrowIcon: Icon = Sparkles,
  title,
  highlight,
  subtitle,
  align = 'center',
}: SectionHeaderProps) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div ref={ref} className={`flex flex-col ${alignment} mb-14`}>
      <motion.div
        initial={{ scale: reduceMotion ? 1 : 0.6, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30"
      >
        <Icon className="w-4 h-4 text-primary" />
        <span className="text-primary text-xs font-medium tracking-wide uppercase">{eyebrow}</span>
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-bold">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={inView ? { width: 88, opacity: 1 } : { width: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 mt-5 rounded-full bg-gradient-to-r from-primary to-accent"
      />

      {subtitle && (
        <p className={`mt-5 text-muted-foreground max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
