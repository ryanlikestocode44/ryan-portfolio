import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import type { FC } from "react";

const ThemeToggle: FC = () => {
  const [darkMode, setDarkMode] = useState(false); // ✅ Light default

  useEffect(() => {
    // Load saved theme
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) {
        setDarkMode(JSON.parse(saved));
        document.documentElement.classList.toggle("dark", JSON.parse(saved));
      }
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // ✅ Apply theme
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", newDarkMode);
    }

    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      whileHover={{ scale: 1.08, rotate: 2 }}
      whileTap={{ scale: 0.96 }}
      aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
    >
      <AnimatePresence mode="wait">
        {darkMode ? (
          <motion.span
            key="sun"
            initial={{ scale: 0, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.3, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25 }}
            className="block text-[#F4D03F] text-lg"
          >
            <FaSun />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ scale: 0, opacity: 0, rotate: 180 }}
            animate={{ scale: 1, opacity: 1, rotate: 360 }}
            exit={{ scale: 0.3, opacity: 0, rotate: 180 }}
            transition={{ duration: 0.25 }}
            className="block text-[#C9FBFF] text-lg"
          >
            <FaMoon />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
