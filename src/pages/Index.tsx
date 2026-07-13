import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/common/ScrollProgress';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import GithubSection from '@/components/GithubSection';
import WhyHireMeSection from '@/components/WhyHireMeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Full-page neural network background (crisp vector canvas) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_4%)] via-background to-[hsl(222_47%_6%)]" />
        <NeuralNetworkBackground opacity={0.6} density={1.15} />
        {/* readability veil so content stays legible over the network */}
        <div className="absolute inset-0 bg-background/45 pointer-events-none" />
      </div>

      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <GithubSection />
        <WhyHireMeSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
