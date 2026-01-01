import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming & ML',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL', level: 90 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'TensorFlow', level: 82 },
      { name: 'PyTorch', level: 78 },
    ],
  },
  {
    title: 'Generative AI',
    skills: [
      { name: 'LLMs', level: 85 },
      { name: 'RAG Systems', level: 88 },
      { name: 'Transformers', level: 80 },
      { name: 'Embeddings', level: 85 },
      { name: 'NLP', level: 82 },
    ],
  },
  {
    title: 'Data & Analytics',
    skills: [
      { name: 'Pandas/NumPy', level: 95 },
      { name: 'EDA', level: 92 },
      { name: 'Feature Engineering', level: 88 },
      { name: 'Tableau', level: 75 },
      { name: 'Power BI', level: 70 },
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      { name: 'Streamlit', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'Git/GitHub', level: 88 },
      { name: 'Docker', level: 72 },
      { name: 'Jupyter', level: 95 },
    ],
  },
];

const SkillBar = ({ skill, index, isInView }: { skill: { name: string; level: number }; index: number; isInView: boolean }) => {
  return (
    <div className="mb-4 group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{skill.name}</span>
        <motion.span 
          className="text-sm text-primary font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2.5 bg-muted rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, hsl(190 100% 50%) 0%, hsl(160 100% 45%) 100%)`,
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2, repeatDelay: 3 }}
          />
        </motion.div>
        {/* Glow dot at end */}
        <motion.div
          initial={{ opacity: 0, left: 0 }}
          animate={isInView ? { opacity: 1, left: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1 }}
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 -translate-x-1/2"
          style={{ boxShadow: '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary) / 0.5)' }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full data science and machine learning stack
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="glass-card p-6 rounded-2xl hover:glow-border transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                {category.title}
              </h3>
              {category.skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} isInView={isInView} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-center text-xl font-semibold mb-8 text-muted-foreground">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'FastAPI',
              'Streamlit', 'SQL', 'Git', 'Docker', 'Pandas', 'NumPy',
              'OpenCV', 'HuggingFace', 'LangChain', 'FAISS'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 bg-muted/50 text-foreground rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
