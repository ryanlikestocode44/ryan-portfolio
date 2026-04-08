import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  FaTimes,
  FaHome,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaGamepad,
  FaEnvelope,
} from "react-icons/fa";
import type { FC } from "react";
import type { MobileSidebarProps } from "@/types";

const MobileSidebar: FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const activeSection = useActiveSection();
  const sections = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "education", label: "Education", icon: FaGraduationCap },
    { id: "skills", label: "Skills", icon: FaCode },
    { id: "experience", label: "Experience", icon: FaBriefcase },
    { id: "projects", label: "Projects", icon: FaProjectDiagram },
    { id: "hobbies", label: "Hobbies", icon: FaGamepad },
    { id: "contact", label: "Contact", icon: FaEnvelope },
  ];

  return (
    <>
      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
            className="sidebar"
          >
            {/* Header */}
            <div className="sidebar-header">
              <div className="flex items-center justify-between mb-6">
                <div className="sidebar-header-title">Ryan Portfolio</div>

                <motion.button
                  onClick={onClose}
                  className="sidebar-close"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes className="text-[#040f0f] dark:text-[#85BDBF] text-xl" />
                </motion.button>
              </div>
            </div>

            {/* Links */}
            <div className="p-6 space-y-3 overflow-y-auto h-[calc(100vh-200px)]">
              {sections.map(({ id, label, icon: Icon }) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  onClick={onClose}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group 
                    ${
                      activeSection === id
                        ? "bg-[#57737a]/20 border-[#57737a]/50 text-[#040f0f]   dark:bg-[#C2FCF7]/20 dark:border-[#C2FCF7]/50 dark:text-[#85BDBF] shadow-md"
                        : "text-[#040f0f]/70 hover:bg-[#C9FBFF]/70 hover:text-[#57737a] border-[#c2fcf7]/30  dark:text-[#C9FBFF]/70 hover:dark:bg-[#040F0F]/70 hover:dark:text-[#C2FCF7] dark:border-[#57737A]/30"
                    } border hover:border-[#57737a]/40 hover:shadow-[#040f0f]/30 hover:dark:border-[#C2FCF7]/40 hover:dark:shadow-[#85BDBF]/30`}
                  whileHover={{
                    scale: 1.02,
                    x: 4,
                    backgroundColor: "#C2FCF7/20",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-lg">{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-sm z-[998]"
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileSidebar;
