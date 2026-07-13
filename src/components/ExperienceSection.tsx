import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Building2, GraduationCap, Award, BookOpenCheck } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import Reveal from './common/Reveal';
import { experiences, education, certifications, publication } from '@/data/portfolio';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-card/30 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="My journey"
          eyebrowIcon={Briefcase}
          title="Experience &"
          highlight="Education"
          subtitle="Three roles shipping AI to production, backed by a CS degree and a published research paper."
        />

        {/* Work timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {experiences.map((exp, i) => (
            <Reveal
              key={`${exp.company}-${i}`}
              direction="right"
              delay={i * 0.1}
              className="relative pl-14 md:pl-20 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-6 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                )}
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 gradient-border hover:glow-border transition-all"
              >
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  {exp.current && (
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-accent/15 text-accent border border-accent/30">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-primary font-medium mb-3">
                  <Building2 size={15} />
                  <span>{exp.company}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {exp.location}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] rounded-md bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Education + Certifications + Research */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          {/* Education */}
          <Reveal direction="up">
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((ed) => (
                  <div key={ed.degree}>
                    <h4 className="text-sm font-medium text-foreground leading-snug">{ed.degree}</h4>
                    <p className="text-sm text-primary">{ed.school}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {ed.period} · {ed.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal direction="up" delay={0.08}>
            <div className="glass-card rounded-2xl p-6 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Certifications</h3>
              </div>
              <div className="space-y-5">
                {certifications.map((c) => (
                  <div key={c.credentialId}>
                    <h4 className="text-sm font-medium text-foreground leading-snug">{c.title}</h4>
                    <p className="text-sm text-primary">{c.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {c.year} · ID: {c.credentialId}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Research milestone */}
          <Reveal direction="up" delay={0.16}>
            <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-2 mb-5 relative z-10">
                <BookOpenCheck className="w-5 h-5 text-accent" />
                <h3 className="font-semibold text-foreground">Publication</h3>
              </div>
              <div className="relative z-10">
                <h4 className="text-sm font-medium text-foreground leading-snug mb-1">{publication.title}</h4>
                <p className="text-xs text-accent mb-2">{publication.venue}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{publication.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {publication.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] rounded-md bg-accent/10 text-accent border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
