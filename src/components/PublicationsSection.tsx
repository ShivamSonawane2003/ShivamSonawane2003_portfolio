import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, ExternalLink, Calendar, Users } from 'lucide-react';

const publications = [
  {
    title: 'Machine Learning Approaches for Healthcare Data Analysis',
    authors: ['Shivam Sonawane', 'Co-Author Name'],
    journal: 'International Journal of Data Science',
    date: '2024',
    link: '#',
    description: 'A comprehensive study on applying machine learning techniques to healthcare datasets for improved diagnostic accuracy.',
    tags: ['Machine Learning', 'Healthcare', 'Data Analysis'],
  },
];

const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="publications" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research & <span className="gradient-text">Publications</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Contributing to the advancement of AI and Data Science through research
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 8 }}
              className="glass-card p-8 rounded-2xl group hover:glow-border transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{pub.authors.join(', ')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{pub.date}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {pub.journal}
                  </p>

                  <p className="text-foreground mb-4 leading-relaxed">
                    {pub.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all group/link"
                  >
                    Read Publication
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Empty state message if no publications */}
          {publications.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">
                Publications will be displayed here as they become available.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;

