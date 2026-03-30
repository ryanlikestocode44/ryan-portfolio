import { useState, useEffect, useCallback } from "react";
import type { ThemeContextType } from "@/types";

export const useTheme = (): ThemeContextType => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleTheme = useCallback(() => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  }, [darkMode]);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  return { darkMode, toggleTheme };
};
