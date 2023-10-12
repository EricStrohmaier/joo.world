import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
