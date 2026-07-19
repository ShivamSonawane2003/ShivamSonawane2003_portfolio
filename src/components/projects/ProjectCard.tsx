import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Reveal from '@/components/common/Reveal';
import type { Project } from '@/data/portfolio';

const DetailList = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">{title}</h4>
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <Reveal className="h-full" delay={(index % 2) * 0.1}>
      <Dialog open={open} onOpenChange={setOpen}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full gradient-border hover:glow-border transition-shadow"
        >
          {/* Thin accent rule */}
          <div className={`h-[3px] w-full bg-gradient-to-r ${project.accent}`} />

          {/* Banner */}
          <div className="relative h-40 overflow-hidden bg-gradient-to-b from-muted/25 to-transparent">
            {/* accent glow */}
            <div
              className={`absolute -top-20 left-1/2 -translate-x-1/2 w-[22rem] h-44 rounded-full blur-3xl bg-gradient-to-r ${project.accent} opacity-25 group-hover:opacity-45 transition-opacity duration-500`}
            />
            <div className="absolute inset-0 bg-grid opacity-20" />
            {/* index numeral */}
            <span className="absolute right-4 -bottom-6 text-[6.5rem] leading-none font-black text-foreground/[0.06] select-none">
              {num}
            </span>

            <div className="absolute top-4 left-5 flex flex-wrap gap-1.5">
              {project.badges.map((b) => (
                <span
                  key={b}
                  className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-background/70 text-foreground/85 border border-border/70"
                >
                  {b}
                </span>
              ))}
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${project.title} on GitHub`}
                  className="w-9 h-9 rounded-full bg-background/70 border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                >
                  <Github size={16} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${project.title} live demo`}
                  className="w-9 h-9 rounded-full bg-background/70 border border-border/70 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            {/* icon tile */}
            <div className="absolute left-5 bottom-4">
              <div className="w-14 h-14 rounded-2xl bg-background/80 border border-border/80 flex items-center justify-center group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300">
                <project.icon className="w-7 h-7 text-primary" />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-2 text-xs font-mono mb-2">
              <span className="text-accent">{project.category}</span>
              <span className="text-muted-foreground/50">·</span>
              <span className="text-muted-foreground">{project.year}</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-primary/80 mt-0.5 mb-3">{project.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">{project.overview}</p>

            {/* Key result highlight */}
            <div className="flex items-start gap-2 rounded-xl bg-accent/5 border border-accent/15 px-3 py-2.5 mb-4">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-xs text-foreground/85 leading-snug">{project.achievements[0]}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.slice(0, 6).map((t) => (
                <span key={t} className="px-2.5 py-1 text-[11px] rounded-md bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
              {project.tech.length > 6 && (
                <span className="px-2.5 py-1 text-[11px] rounded-md bg-muted/50 text-muted-foreground">
                  +{project.tech.length - 6}
                </span>
              )}
            </div>

            <div className="mt-auto flex items-center justify-between">
              <DialogTrigger asChild>
                <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/btn">
                  Read case study
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </DialogTrigger>
              <div className="flex gap-3 text-muted-foreground">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
                    <Github size={17} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="hover:text-accent transition-colors">
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Case study modal */}
        <DialogContent className="max-w-2xl max-h-[88vh] overflow-y-auto bg-card border-border/60">
          <DialogHeader>
            <div className={`h-1.5 w-full rounded-full bg-gradient-to-r ${project.accent} mb-4`} />
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.accent} flex items-center justify-center flex-shrink-0`}>
                <project.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                <p className="text-sm text-muted-foreground">{project.subtitle}</p>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6 mt-2">
            <p className="text-muted-foreground leading-relaxed">{project.overview}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Problem</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Solution</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <DetailList title="Architecture" items={project.architecture} />

            <div>
              <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="tech-chip text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <DetailList title="Challenges" items={project.challenges} />
              <DetailList title="Achievements" items={project.achievements} />
            </div>

            <div className="flex flex-wrap gap-3 pt-2 border-t border-border/50">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <Github size={16} /> View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-accent/50 text-accent text-sm font-semibold hover:bg-accent/10 transition-colors"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Reveal>
  );
};

export default ProjectCard;
