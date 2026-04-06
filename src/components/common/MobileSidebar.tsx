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

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

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
            <div className="p-6 border-b border-[#57737A]/30 sticky top-0 bg-[#040F0F]/95 backdrop-blur-xl z-10">
              <div className="flex items-center justify-between mb-6">
                <div
                  className="text-2xl font-bold bg-gradient-to-r 
                  from-[#85BDBF] to-[#57737A] bg-clip-text text-transparent"
                >
                  Ryan Portfolio
                </div>

                <motion.button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-[#C2FCF7]/20 border border-[#C2FCF7]/40 
                  hover:bg-[#C2FCF7]/40 hover:border-[#85BDBF]/60 
                  transition-all duration-200 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes className="text-[#85BDBF] text-xl" />
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
                        ? "bg-[#C2FCF7]/20 border-[#C2FCF7]/50 text-[#85BDBF] shadow-md"
                        : "text-[#C9FBFF]/70 hover:bg-[#040F0F]/70 hover:text-[#C2FCF7] border-[#57737A]/30"
                    } border hover:border-[#C2FCF7]/40 hover:shadow-[#85BDBF]/30`}
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]"
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileSidebar;
