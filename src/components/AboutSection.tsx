import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import Reveal from './common/Reveal';
import { about, profile } from '@/data/portfolio';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="aurora">
        <motion.div
          animate={{ x: [0, 90, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute top-16 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -70, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-16 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="Get to know me"
          eyebrowIcon={User}
          title="About"
          highlight="Me"
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Narrative */}
          <Reveal direction="right" className="lg:col-span-3">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <h3 className="text-2xl font-semibold mb-5 text-primary relative z-10">{about.heading}</h3>
              <div className="space-y-4 relative z-10">
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-2 relative z-10">
                {['Nashik, India', 'B.E. Computer Science', 'Published Researcher', 'Open to Work'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Capability grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {about.highlights.map((h, i) => (
              <Reveal key={h.label} direction="up" delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="glass-card gradient-border rounded-2xl p-4 text-center h-full flex flex-col items-center justify-center gap-2 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <h.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground/90">{h.label}</span>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
