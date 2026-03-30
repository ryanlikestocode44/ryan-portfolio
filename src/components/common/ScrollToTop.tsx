import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import type { FC } from "react";

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.1, y: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="p-4 bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl hover:shadow-slate-500/25 hover:border-slate-500/70 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-slate-500/30 group"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-slate-300 text-xl group-hover:text-white transition-colors" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
