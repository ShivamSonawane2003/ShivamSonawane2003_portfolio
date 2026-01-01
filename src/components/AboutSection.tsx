import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Briefcase, GraduationCap, Award, Code, Sparkles } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Years Experience', value: 2, suffix: '+' },
  { icon: Code, label: 'Projects Completed', value: 15, suffix: '+' },
  { icon: Award, label: 'Certifications', value: 3, suffix: '' },
  { icon: GraduationCap, label: 'Publications', value: 1, suffix: '' },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Get to know me</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mx-auto rounded-full" 
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Turning Data into Intelligence
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Entry-level Data Scientist with hands-on experience in data analysis, 
                machine learning, and model deployment. I'm skilled in Python and SQL 
                with practical exposure to building end-to-end solutions.
              </p>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                I have experience working with real-world datasets across healthcare, 
                finance, and document analytics. My growing focus is on applied AI 
                and data-driven problem solving.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Strong analytical mindset with the ability to translate data insights 
                into clear, actionable outcomes. Currently exploring RAG-based AI systems, 
                LLMs, and MLOps.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {['Python', 'Machine Learning', 'Deep Learning', 'Gen AI', 'LLMs', 'SQL'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: 'spring' }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  boxShadow: '0 20px 40px -15px hsl(var(--primary) / 0.3)'
                }}
                className="glass-card p-6 rounded-2xl text-center group hover:glow-border transition-all duration-300 relative overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <motion.div 
                  className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="text-3xl font-bold text-foreground mb-1 relative z-10">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
