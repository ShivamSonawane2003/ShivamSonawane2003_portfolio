import { useReducedMotion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, FileText, ArrowRight, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import MagneticButton from './common/MagneticButton';
import AnimatedCounter from './common/AnimatedCounter';
import { SiKaggle } from '@/components/icons/BrandIcons';
import { profile, heroStats } from '@/data/portfolio';
import { asset } from '@/config';

const useTypingRoles = (roles: readonly string[]) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1));
          } else {
            setTimeout(() => setDeleting(true), 1600);
          }
        } else if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      },
      deleting ? 45 : 90
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, roles]);

  return text;
};

const socialLinks = [
  { icon: Github, href: profile.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: SiKaggle, href: profile.socials.kaggle, label: 'Kaggle' },
  { icon: Mail, href: profile.socials.email, label: 'Email' },
];

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const role = useTypingRoles(profile.titles);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Grid + readability vignette over the shared neural-network background */}
      <div className="absolute inset-0 z-[1] bg-grid opacity-25" />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 58% 46% at 50% 42%, hsl(222 47% 5% / 0.55) 0%, transparent 70%)',
        }}
      />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-background/70 pointer-events-none" />

      {/* Floating tech glyphs */}
      {!reduceMotion && (
        <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
          {['{ }', '</>', 'AI', '🤖', 'ƒ(x)', '[]'].map((g, i) => (
            <span
              key={g}
              className="absolute font-mono text-primary/20 text-2xl md:text-3xl select-none animate-float"
              style={{
                left: `${8 + i * 15}%`,
                top: `${15 + ((i * 13) % 60)}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${5 + i}s`,
              }}
            >
              {g}
            </span>
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-7 reveal-fade">
            {profile.availability.open && (
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <span className="text-foreground/90">{profile.availability.label}</span>
              </span>
            )}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-sm text-primary">
              <MapPin className="w-3.5 h-3.5" />
              {profile.currentRole.title} @ {profile.currentRole.company}
            </span>
          </div>

          {/* Name */}
          <p
            className="text-primary font-mono text-base md:text-lg mb-3 reveal-fade"
            style={{ animationDelay: '0.05s' }}
          >
            {'> Hi, I am'}
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight reveal-fade"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="gradient-text glow-text">{profile.name}</span>
          </h1>

          {/* Rotating role */}
          <div
            className="text-2xl md:text-4xl font-semibold mb-6 h-12 flex items-center justify-center reveal-fade"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-muted-foreground">I&apos;m&nbsp;</span>
            <span className="text-primary">{role}</span>
            <span className="ml-1 w-0.5 h-8 md:h-10 bg-primary animate-blink" aria-hidden="true" />
          </div>

          {/* Headline / intro */}
          <p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed reveal-fade"
            style={{ animationDelay: '0.3s' }}
          >
            I build <span className="text-foreground font-medium">production-grade AI systems</span> — LLM
            applications, multi-agent platforms, and ML pipelines — from data and models to{' '}
            <span className="text-foreground font-medium">FastAPI services running in Docker</span>.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-14 reveal-fade"
            style={{ animationDelay: '0.4s' }}
          >
            <MagneticButton
              href={asset(profile.resumeFile)}
              download={profile.resumeFile}
              ariaLabel="Download résumé"
              className="shimmer-btn inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
            >
              <FileText size={18} /> Résumé
            </MagneticButton>
            <MagneticButton
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Open GitHub profile"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full glass-card font-semibold text-foreground hover:text-primary hover:glow-border transition-all"
            >
              <Github size={18} /> GitHub
            </MagneticButton>
            <MagneticButton
              href="#contact"
              ariaLabel="Go to contact section"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-accent/60 text-accent font-semibold hover:bg-accent/10 transition-all"
            >
              Contact <ArrowRight size={18} />
            </MagneticButton>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12 reveal-fade"
            style={{ animationDelay: '0.5s' }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl px-4 py-5 gradient-border">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-5 reveal-fade" style={{ animationDelay: '0.6s' }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border hover:-translate-y-1 transition-all"
                aria-label={s.label}
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors reveal-fade"
        style={{ animationDelay: '0.8s' }}
        aria-label="Scroll to about section"
      >
        <span className="text-xs mb-2 tracking-widest uppercase">Scroll</span>
        <span className="animate-float">
          <ChevronDown size={22} />
        </span>
      </a>
    </section>
  );
};

export default HeroSection;
