import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import AboutSection from '@/components/AboutSection';
import ArticlesSection from '@/components/ArticlesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ExperienceSection from '@/components/ExperienceSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ScrollProgress from '@/components/ScrollProgress';
import MorphingBackground from '@/components/MorphingBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <MorphingBackground />
      <Header />
      <main>
        <HeroSection />
        <FeaturedProjectsSection />
        <AboutSection />
        <ExperienceSection />
        <CaseStudiesSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
