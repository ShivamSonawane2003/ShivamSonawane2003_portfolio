import { motion } from 'framer-motion';
import { BadgeCheck, ArrowRight } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import Reveal from './common/Reveal';
import { whyHireMe, profile } from '@/data/portfolio';

const WhyHireMeSection = () => {
  return (
    <section id="why-me" className="py-24 relative bg-card/30 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="The value I bring"
          eyebrowIcon={BadgeCheck}
          title="Why Hire"
          highlight="Me"
          subtitle="Not just models in notebooks — end-to-end AI systems built, deployed, and measured in production."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyHireMe.map((pillar, i) => (
            <Reveal key={pillar.title} direction="up" delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card gradient-border rounded-2xl p-7 h-full group relative overflow-hidden"
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 relative z-10">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{pillar.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Closing CTA banner */}
        <Reveal className="mt-14">
          <div className="glass-card rounded-2xl p-8 md:p-10 text-center relative overflow-hidden gradient-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Ready to build <span className="gradient-text">production AI</span> together?
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                I&apos;m open to AI/ML Engineer, Generative AI, and Data Scientist roles. Let&apos;s talk about what
                you&apos;re building.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all shimmer-btn"
              >
                Get in touch <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
