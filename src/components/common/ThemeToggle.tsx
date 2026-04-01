import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import type { FC } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: FC = () => {
  let darkMode = true;
  let toggleTheme = () => {};

  try {
    const theme = useTheme();
    darkMode = theme.darkMode;
    toggleTheme = theme.toggleTheme;
  } catch (e) {
    // ✅ Graceful fallback
    console.warn(`ThemeToggle: Not in ThemeProvider, using fallback values.
      Error: ${e instanceof Error ? e.message : String(e)}`);
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="cursor-pointer p-2 md:p-2.5 rounded-xl bg-[#040F0F]/50 backdrop-blur-lg border border-[#57737A]/60 hover:border-[#C2FCF7]/70 hover:bg-[#040F0F]/70 shadow-lg hover:shadow-[#C2FCF7]/20 transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-[#85BDBF]/50 group relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
    >
      <motion.div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C2FCF7]/20 to-[#85BDBF]/20 opacity-0 group-hover:opacity-100 transition-opacity" />

      <AnimatePresence mode="wait">
        {!darkMode ? (
          <motion.span
            key="sun"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="block text-[#F4D03F] text-lg"
          >
            <FaSun />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ scale: 0, opacity: 0, rotate: 180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.4, opacity: 0, rotate: -180 }}
            transition={{ duration: 0.2 }}
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
