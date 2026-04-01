import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import type { FC } from "react";

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500); // Increased threshold
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Slide from right
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 left-6 z-50 md:bottom-8 md:left-8" // ✅ LEFT BOTTOM
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-3 md:p-3.5 bg-gradient-to-br from-[#040F0F]/90 to-[#57737A]/50 backdrop-blur-xl rounded-xl border border-[#C2FCF7]/40 hover:border-[#85BDBF]/70 hover:from-[#040F0F] hover:to-[#85BDBF]/60 hover:shadow-[#C2FCF7]/30 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C2FCF7]/50 group"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-[#C9FBFF] text-base md:text-lg group-hover:text-[#85BDBF] transition-colors" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
