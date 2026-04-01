import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "@/components/common/ThemeToggle";
import type { FC } from "react";

const Navbar: FC = () => {
  const activeSection = useActiveSection();
  const sections = [
    "home",
    "education",
    "skills",
    "experience",
    "projects",
    "hobbies",
    "contact",
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#040F0F]/90 dark:bg-[#040F0F]/95 bg-white/80 dark:border-[#57737A]/30 border-b border-[#C2FCF7]/20 shadow-lg dark:shadow-[#85BDBF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-[#C9FBFF] to-[#C2FCF7] dark:from-[#85BDBF] dark:to-[#57737A] bg-clip-text text-transparent dark:text-[#C9FBFF]/90">
            Ryan Portfolio
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-lg font-medium relative group transition-all duration-300 hover:scale-105 ${
                  activeSection === section
                    ? "text-[#85BDBF] dark:text-[#C2FCF7]"
                    : "text-slate-700 dark:text-[#C9FBFF]/70 hover:text-[#85BDBF] dark:hover:text-[#C2FCF7]"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#85BDBF] dark:bg-[#C2FCF7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                    activeSection === section ? "scale-x-100" : ""
                  }`}
                />
              </a>
            ))}
          </div>

          {/* ThemeToggle */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
