import Navbar from '@/components/Navbar'
import SkillsSection from '@/components/SkillsSection';
import Banner from '@/components/Banner';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Skills */}
      <SkillsSection />
 
      {/* Projects */}
      <ProjectsSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}

export default Home