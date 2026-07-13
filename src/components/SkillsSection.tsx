import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import Reveal from './common/Reveal';
import { skillCategories } from '@/data/portfolio';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="What I work with"
          eyebrowIcon={Layers}
          title="Technical"
          highlight="Skills"
          subtitle="A full-stack AI toolkit — from data science and deep learning to LLM agents, vector search, and production MLOps."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} direction="up" delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card gradient-border rounded-2xl p-6 h-full group transition-shadow hover:shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.4)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:from-primary/30 transition-colors">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="tech-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
