import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentTimeIn24HourFormat } from "../utils/helperFunctions";

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
type TimeContextType = {
  currentTime: string;
};

const ThemeContext = createContext<ThemeContextType>({
  darkMode: true,
  toggleDarkMode: () => {},
});
const TimeContext = createContext<TimeContextType | null>(null);

export const useTheme = () => {
  return useContext(ThemeContext);
};
export const useTime = () => {
  return useContext(TimeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize the darkMode state from localStorage or default to false (light mode)
    return localStorage.getItem("darkMode") === "true" ? true : false;
  });
  
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      // Store the new state in localStorage
      localStorage.setItem("darkMode", newDarkMode.toString());
      return newDarkMode;
    });
  };
  

  useEffect(() => {
    const handleStorageChange = () => {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <TimeProvider>{children}</TimeProvider>
    </ThemeContext.Provider>
  );
};


type TimeProviderProps = {
  children: React.ReactNode;
};

export const TimeProvider: React.FC<TimeProviderProps> = ({ children }) => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const formattedTime = getCurrentTimeIn24HourFormat();
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimeContext.Provider value={{ currentTime }}>
      {children}
    </TimeContext.Provider>
  );
};
