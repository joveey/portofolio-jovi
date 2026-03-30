import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResumeSection from '@/components/ResumeSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  return (
    <div className="pb-8">
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
