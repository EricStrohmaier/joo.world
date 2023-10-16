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
  darkMode: false,
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
    // Initialize the darkMode state from localStorage or default to true (light mode)
    return localStorage.getItem("darkMode") === "true" ? false : true;
  });
  

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      // Store the new state in localStorage
      localStorage.setItem("darkMode", newDarkMode.toString());
      // console.log("New darkMode state:", newDarkMode); // Log the new state
      return newDarkMode;
    });
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setDarkMode(localStorage.getItem("darkMode") === "false");
      // console.log("Updated darkMode state from localStorage:", darkMode); // Log the updated state
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
