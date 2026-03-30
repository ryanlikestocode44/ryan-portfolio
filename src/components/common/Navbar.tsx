import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "@/components/common/ThemeToggle";

const Navbar = () => {
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
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-80 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#c9fbff] to-[#c2fcf7] bg-clip-text text-transparent">
            Ryan Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`text-lg font-medium hover:text-[#85bdbf] transition-all duration-300 relative group ${
                  activeSection === section
                    ? "text-[#85bdbf]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
