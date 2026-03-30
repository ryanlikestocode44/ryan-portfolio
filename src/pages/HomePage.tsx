import Navbar from "@/components/common/Navbar";
import SkillsSection from "@/components/sections/Skills";
import Banner from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";

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
};

export default Home;
