import { useEffect, useState, type ReactNode } from "react";
import { themes, type Theme } from "../../types/model";
import { ThemeContext } from "./ThemeContext";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());
  useEffect(() => {
    document.body.className = `transition-colors duration-500 ${themes[theme]}`;

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
