import React, {
  createContext,
  useState,
  useEffect,
  type ReactNode, // ✅ FIXED: Explicit import
} from "react";
import type { ThemeContextType } from "@/types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) {
        const shouldBeDark = JSON.parse(saved);
        setDarkMode(shouldBeDark);
        document.documentElement.classList.toggle("dark", shouldBeDark);
      }
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", newDarkMode);
    }

    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  if (!mounted) {
    return <div className="min-h-screen bg-[#040F0F]">{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
