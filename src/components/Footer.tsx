import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { SiKaggle } from './icons/BrandIcons';
import { profile } from '@/data/portfolio';

const socials = [
  { icon: Github, href: profile.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: SiKaggle, href: profile.socials.kaggle, label: 'Kaggle' },
  { icon: Mail, href: profile.socials.email, label: 'Email' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-12 bg-background/95 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold gradient-text inline-block mb-2">
              {profile.name}
            </a>
            <p className="text-sm text-foreground/70">
              AI/ML Engineer <span className="text-primary">·</span> Generative AI{' '}
              <span className="text-primary">·</span> Data Scientist
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                aria-label={s.label}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col items-center gap-4">
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 hover:-translate-y-0.5 transition-all"
          >
            Back to top <ArrowUp size={15} />
          </a>
          <span className="text-sm text-foreground/60">
            © {year} {profile.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
