import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import Reveal from './common/Reveal';
import ProjectCard from './projects/ProjectCard';
import { projects, secondaryProjects, profile } from '@/data/portfolio';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="Selected work"
          eyebrowIcon={FolderGit2}
          title="Featured"
          highlight="Projects"
          subtitle="Production AI systems and ML products — click any card for the full engineering case study: problem, solution, architecture, and results."
        />

        {/* Case studies */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Secondary projects */}
        <Reveal className="mt-16">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8">
            More things I&apos;ve built
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {secondaryProjects.map((p, i) => (
              <Reveal key={p.title} className="h-full" delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-5 h-full group hover:glow-border transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} code`} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live`} className="text-muted-foreground hover:text-accent transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1.5">
                  {p.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] rounded-md bg-muted/50 text-muted-foreground border border-border/60">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal className="text-center mt-14">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github size={20} />
            Explore all 27 repositories
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
