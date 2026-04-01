import React, {
  createContext,
  useState,
  useEffect,
} from "react";
import type { ReactNode } from "react";
import type { ThemeContextType } from "@/types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false); // ✅ Hydration fix

  // ✅ Mount client-side only
  useEffect(() => {
    setMounted(true);

    // Load from localStorage
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      const shouldBeDark = JSON.parse(saved);
      setDarkMode(shouldBeDark);
      applyTheme(shouldBeDark);
    }
  }, []);

  const applyTheme = (isDark: boolean) => {
    if (typeof document === "undefined") return;

    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-[#040F0F]");
      document.body.classList.remove("bg-[#f8fafc]");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-[#040F0F]");
      document.body.classList.add("bg-[#f8fafc]");
    }
  };

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    applyTheme(newDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
  };

  // ✅ Don't render until mounted (SSR fix)
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
