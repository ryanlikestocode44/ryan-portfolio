import React from "react";
import { useTheme } from "@/hooks/useTheme";

import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Hobbies from "@/components/sections/Hobbies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/common/Footer";

import "@/index.css";

const App: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "dark bg-[#040f0f]"
          : "bg-gradient-to-br from-slate-50 to-blue-50"
      } transition-all duration-500`}
    >
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
    </div>
  );
};

export default App;
