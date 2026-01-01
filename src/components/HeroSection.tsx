import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, FileText, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import heroBg from '@/assets/hero-bg.jpg';
import VideoBackground from './VideoBackground';

const roles = ['Data Scientist', 'AI/ML Engineer', 'Data Analyst', 'ML Developer'];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ShivamSonawane2003', label: 'GitHub' },
    { icon: Linkedin, href: 'https://in.linkedin.com/in/shivam-sonawane-582b48346', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sasonawane2003@gmail.com', label: 'Email' },
    { icon: FileText, href: 'https://www.kaggle.com/shivamsonawane96', label: 'Kaggle' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image (fallback) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
        }}
      />
      
      {/* Video Background */}
      <VideoBackground fixed={false} opacity={0.75} showOverlay={false} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60 z-[2]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[6]">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear',
            }}
            style={{
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono text-lg mb-4"
          >
            {"<Hello World />"}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            I'm{' '}
            <span className="gradient-text glow-text">Shivam Sonawane</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold mb-8 h-12"
          >
            <span className="text-muted-foreground">A </span>
            <span className="text-primary">{displayText}</span>
            <span className="text-primary animate-blink border-r-2 border-primary ml-1">
              &nbsp;
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transforming raw data into actionable insights and building intelligent 
            AI solutions that solve real-world problems. Passionate about Machine Learning, 
            Deep Learning, and Generative AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              Contact Me
            </a>
            <motion.a
              href="/Shivam-Sonawane-Resume.pdf"
              download="Shivam-Sonawane-Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
            >
              <FileText size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
