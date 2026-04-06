import { useRef } from "react";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Hobbies from "@/components/sections/Hobbies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import "@/index.css";

const App: React.FC = () => {
  const AppRootRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider>
      <div ref={AppRootRef} data-theme="light" className="app-wrapper">
        <Navbar />
        <main>
          <Hero />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Hobbies />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop /> {/* Bottom-left */}
      </div>
    </ThemeProvider>
  );
};

export default App;
