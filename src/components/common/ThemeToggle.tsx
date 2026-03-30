import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import type { FC } from "react";

const ThemeToggle: FC = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-slate-900/40 backdrop-blur-lg border border-slate-700/60 hover:border-slate-500/80 hover:bg-slate-800/60 shadow-lg hover:shadow-slate-400/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400/50 group relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Switch to ${darkMode ? "light" : "dark"} theme`}
    >
      {/* Thin border glow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-slate-500/20 to-slate-400/20 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.2 }}
      />

      {/* ICON ANIMATION ONLY */}
      <AnimatePresence mode="wait">
        {/* Sun (Light Mode) */}
        {!darkMode && (
          <motion.span
            key="sun"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="block text-yellow-400/90 text-lg"
          >
            ☀️
          </motion.span>
        )}

        {/* Moon (Dark Mode) */}
        {darkMode && (
          <motion.span
            key="moon"
            initial={{ scale: 0, opacity: 0, rotate: 180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotate: -180 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="block text-slate-300 text-lg"
          >
            🌙
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
