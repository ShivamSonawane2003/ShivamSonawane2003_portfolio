import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { navItems, profile } from '@/data/portfolio';
import { asset } from '@/config';

const sectionIds = ['home', ...navItems.map((n) => n.href.replace('#', ''))];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      {/* Solid backdrop as its own element, rendered only when scrolled and
          with NO opacity transition — a half-finished transition would leave
          page content showing through the bar. */}
      {scrolled && (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 border-b border-border/60 shadow-lg"
          style={{ backgroundColor: 'hsl(222 47% 5%)' }}
        />
      )}

      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-lg md:text-xl font-bold gradient-text whitespace-nowrap"
          whileHover={{ scale: 1.04 }}
        >
          {profile.name}
        </motion.a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-sm transition-colors ${
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent"
                  />
                )}
              </a>
            );
          })}
          <a
            href={asset(profile.resumeFile)}
            download={profile.resumeFile}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/40 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
          >
            <FileText size={15} /> Résumé
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-1"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-background/95 border border-border/60 mt-2 mx-4 rounded-xl"
          >
            <div className="py-4 px-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={asset(profile.resumeFile)}
                download={profile.resumeFile}
                className="inline-flex items-center gap-2 text-primary font-medium"
                onClick={() => setMobileOpen(false)}
              >
                <FileText size={16} /> Download Résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
