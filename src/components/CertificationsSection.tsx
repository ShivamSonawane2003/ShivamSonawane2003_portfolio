import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford University (Coursera)',
    date: '2024',
    credential: 'Verified Certificate',
    link: '#',
    icon: Award,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI (Coursera)',
    date: '2024',
    credential: 'Verified Certificate',
    link: '#',
    icon: Award,
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Data Science Professional Certificate',
    issuer: 'IBM (Coursera)',
    date: '2023',
    credential: 'Professional Certificate',
    link: '#',
    icon: Award,
    color: 'from-green-500 to-emerald-600',
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background effects */}
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
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in AI/ML and Data Science
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl group hover:glow-border transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div className="relative z-10 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cert.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {cert.credential}
                  </span>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all group/link"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

