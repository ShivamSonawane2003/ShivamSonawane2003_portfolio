import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Brain, ShieldCheck, Zap, FileSearch } from 'lucide-react';

const projects = [
  {
    title: 'Diabetic Retinopathy Prediction',
    description: 'Binary classification model to predict diabetic retinopathy using ML algorithms. Processed 6,000+ medical records with interactive Streamlit interface.',
    icon: Brain,
    tags: ['Machine Learning', 'Healthcare', 'Streamlit', 'Python'],
    liveLink: 'https://diabetic-retinopathy-prediction-in-patients.streamlit.app/',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Fraud Detection System',
    description: 'Fraud detection model using Isolation Forest with 89% recall on 5,000+ transactions. Applied SMOTE for class imbalance with real-time anomaly detection.',
    icon: ShieldCheck,
    tags: ['Anomaly Detection', 'Finance', 'SMOTE', 'Python'],
    liveLink: 'https://fraud-detection-system-shivam-sonawane.streamlit.app/',
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Electric Motor Speed Prediction',
    description: 'Implemented ML algorithms for speed prediction with 96% accuracy. Reduced training time by 20% through feature optimization.',
    icon: Zap,
    tags: ['Regression', 'IoT', 'Optimization', 'Streamlit'],
    color: 'from-yellow-500 to-orange-600',
  },
  {
    title: 'RAG Document Q&A System',
    description: 'FastAPI-based Retrieval-Augmented Generation application for answering queries from private documents with reduced hallucinations using FAISS VectorDB.',
    icon: FileSearch,
    tags: ['RAG', 'LLMs', 'FastAPI', 'FAISS', 'NLP'],
    color: 'from-purple-500 to-pink-600',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real-world ML solutions across healthcare, finance, and NLP domains
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: 'spring' }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass-card rounded-2xl overflow-hidden group perspective-1000"
            >
              {/* Project Header */}
              <div
                className={`h-36 bg-gradient-to-r ${project.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-background/20 backdrop-blur-sm" />
                {/* Animated pattern */}
                <motion.div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '20px 20px',
                  }}
                  animate={{ x: [0, 20], y: [0, 20] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <project.icon className="w-16 h-16 text-white/90 drop-shadow-lg" />
                  </motion.div>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ShivamSonawane2003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
