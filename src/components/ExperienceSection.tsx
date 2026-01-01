import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'AI/ML Intern',
    company: 'Infomanav Autotropic Cloud Technologies Pvt. Ltd.',
    location: 'Nashik',
    period: 'June 2025 – Present',
    description: [
      'Built a tool to extract structured financial data from SEC Edgar filings using LLMs',
      'Developed a parser to extract key candidate information from resumes using LLMs',
      'Implemented a stock recommendation engine using fundamental, technical, and sentiment analysis',
      'Created an interactive dashboard to visualize daily user activity and key metrics',
      'Built a stock price forecasting system using LSTM and Gradient Boosting models',
    ],
    current: true,
  },
  {
    title: 'Data Science Intern',
    company: 'AiVariant',
    location: 'Pune, India',
    period: 'August 2024 – May 2025',
    description: [
      'Improved dataset accuracy by 98% through comprehensive data preprocessing',
      'Monitored data activities, cleaned and validated 10,000+ data entries weekly',
      'Enhanced model input quality through rigorous data validation',
    ],
    current: false,
  },
  {
    title: 'Junior Software Developer',
    company: 'Humming Byte Technologies',
    location: 'Nashik, India',
    period: 'January 2024 – June 2024',
    description: [
      'Developed 5+ mobile applications using Android Studio, improving user engagement by 20%',
      'Designed and maintained 3+ web applications using HTML, CSS',
      'Collaborated with team to debug and optimize software, improving performance by 25%',
    ],
    current: false,
  },
  {
    title: 'Junior Software Program Analyst',
    company: 'Innovatus Technologies',
    location: 'Pune, India',
    period: 'September 2023 – January 2024',
    description: [
      'Translated 10+ user requirements into technical specifications',
      'Debugged and resolved 15+ software issues, reducing system downtime by 40%',
      'Managed client communications, leading to a 95% customer satisfaction rate',
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card p-6 rounded-2xl hover:glow-border transition-all duration-300"
                >
                  {exp.current && (
                    <span className="inline-block px-3 py-1 text-xs bg-primary/20 text-primary rounded-full mb-3 font-semibold">
                      Current Role
                    </span>
                  )}
                  
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
