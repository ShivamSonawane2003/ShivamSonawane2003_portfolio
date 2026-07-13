import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './common/SectionHeader';
import Reveal from './common/Reveal';
import ContactForm from './ContactForm';
import { SiKaggle } from './icons/BrandIcons';
import { profile } from '@/data/portfolio';

const contactInfo = [
  { icon: Mail, label: 'Email', value: profile.email, href: profile.socials.email },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
];

const socials = [
  { icon: Github, label: 'GitHub', href: profile.socials.github },
  { icon: Linkedin, label: 'LinkedIn', href: profile.socials.linkedin },
  { icon: SiKaggle, label: 'Kaggle', href: profile.socials.kaggle },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          eyebrow="Let's connect"
          eyebrowIcon={Send}
          title="Get In"
          highlight="Touch"
          subtitle="Open to AI/ML, Generative AI, and Data Science roles, collaborations, and interesting problems."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Info */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-primary">Let&apos;s talk</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                Whether you&apos;re hiring, building something with AI, or just want to chat about LLMs and agents —
                my inbox is always open.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const content = (
                    <>
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-105 transition-all flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-muted-foreground">{info.label}</div>
                        <div className="text-foreground group-hover:text-primary transition-colors truncate">
                          {info.value}
                        </div>
                      </div>
                    </>
                  );
                  return info.href ? (
                    <a key={info.label} href={info.href} className="flex items-center gap-4 group">
                      {content}
                    </a>
                  ) : (
                    <div key={info.label} className="flex items-center gap-4 group">
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      aria-label={s.label}
                      className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border transition-all"
                    >
                      <s.icon size={19} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="left" className="lg:col-span-3">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" /> Send a message
              </h3>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
