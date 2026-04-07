import { useState } from "react";
import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "@/components/common/ThemeToggle";
import type { FC } from "react";
import { FaBars } from "react-icons/fa";
import MobileSidebar from "@/components/common/MobileSidebar";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <nav className="navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="nav-logo">Ryan Portfolio</div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`text-lg font-medium relative group transition-all duration-300 hover:scale-105 ${
                    activeSection === section
                      ? "text-[#57737a] dark:text-[#C2FCF7]"
                      : "text-[#040f0f] dark:text-[#C9FBFF]/70 hover:text-[#57737a] dark:hover:text-[#C2FCF7]"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#57737a] dark:bg-[#C2FCF7] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ${
                      activeSection === section ? "scale-x-100" : ""
                    }`}
                  />
                </a>
              ))}
            </div>

            <div className="flex gap-2">
              {/* ThemeToggle */}
              <ThemeToggle />

              {/* Mobile Burger */}
              <motion.button
                onClick={() => setIsOpen(true)}
                className="mobile-burger"
                whileHover={{ scale: 1.15 }}
                // whileTap={{ scale: 0.95 }}
                aria-label="Open menu"
              >
                <FaBars className="text-[#040f0f] dark:text-[#C9FBFF] text-xl" />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
