import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, GitFork, Star, FolderGit2 } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import Reveal from './common/Reveal';
import { github } from '@/data/portfolio';

const langColor: Record<string, string> = {
  'Python': '#3776AB',
  'JavaScript / TypeScript': '#f7df1e',
  'Jupyter / HTML': '#e34c26',
  'Java / Other': '#b07219',
};

/** External GitHub stat cards — lazy-loaded and hidden on failure. */
const StatImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`rounded-xl border border-border/50 bg-card/40 ${className}`}
    />
  );
};

const GithubSection = () => {
  const user = github.username;
  const barsRef = useRef<HTMLDivElement>(null);
  const barsInView = useInView(barsRef, { once: true, margin: '-60px' });

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="Open source"
          eyebrowIcon={Github}
          title="GitHub"
          highlight="Showcase"
          subtitle="27 public repositories focused on applied AI — agents, LLM apps, computer vision, and data science."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Profile summary */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-7 h-full flex flex-col gradient-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">@{user}</p>
                  <p className="text-xs text-muted-foreground">AI / ML Engineer</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: FolderGit2, value: `${github.repoCount}`, label: 'Repos' },
                  { icon: Star, value: 'AI/ML', label: 'Focus' },
                  { icon: GitFork, value: '10+', label: 'Shipped' },
                ].map((s) => (
                  <div key={s.label} className="text-center rounded-xl bg-muted/30 py-3">
                    <s.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                    <div className="text-sm font-bold text-foreground">{s.value}</div>
                    <div className="text-[10px] text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Focus areas</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {github.focusAreas.map((f) => (
                  <span key={f} className="tech-chip text-xs">
                    {f}
                  </span>
                ))}
              </div>

              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <Github size={16} /> View Full Profile
              </a>
            </div>
          </Reveal>

          {/* Language distribution + stats */}
          <Reveal direction="left" className="lg:col-span-3">
            <div className="glass-card rounded-2xl p-7 h-full">
              <h3 className="font-semibold text-foreground mb-6">Language Distribution</h3>
              <div className="space-y-5" ref={barsRef}>
                {github.languages.map((lang, i) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="flex items-center gap-2 text-foreground/90">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColor[lang.name] }} />
                        {lang.name}
                      </span>
                      <span className="font-mono text-muted-foreground">{lang.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: barsInView ? `${lang.pct}%` : 0 }}
                        transition={{ duration: 1, delay: i * 0.12, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: langColor[lang.name] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex justify-center">
                <StatImage
                  src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=00000000&title_color=22d3ee&icon_color=34d399&text_color=94a3b8&hide=contribs`}
                  alt="GitHub statistics"
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
