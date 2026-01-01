import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-12 bg-background/90 backdrop-blur-md border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-2xl font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Shivam Sonawane
            </motion.a>
            <p className="text-sm text-foreground/80 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Shivam
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-foreground/70 hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-foreground/70 hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/ShivamSonawane2003"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://in.linkedin.com/in/shivam-sonawane-582b48346"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:sasonawane2003@gmail.com"
              whileHover={{ scale: 1.2, y: -3 }}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </motion.a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-foreground/70">
          © {currentYear} Shivam Sonawane. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
