import React, {
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      const shouldBeDark = JSON.parse(saved);
      setDarkMode(shouldBeDark);
      // ✅ Tailwind dark: expects THIS class
      document.documentElement.classList.toggle("dark", shouldBeDark);
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // ✅ Apply to documentElement (html)
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
