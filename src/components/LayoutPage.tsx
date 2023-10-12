import React, { FC } from "react";
import NavList from "./NavList";
import { useTheme } from "../logic/queries/useTheme";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutPage: FC<LayoutProps> = ({ children }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  const layoutStyles = darkMode ? "bg-[#1E1E1E]" : "";

  return (
    <div
      className={`h-screen w-screen flex items-center justify-center ${layoutStyles}`}
    >
      <div
        className={`flex items-center justify-center h-[90%] w-screen ${layoutStyles}`}
      >
        <div className="flex mx-3 my-6 max-w-7xl h-full w-full bg-gray-100 rounded-[40px] overflow-hidden">
          <div className="border-r-2 border-gray-200 lg:w-1/5">
            <div className="flex flex-col items-center justify-center h-full mx-1 lg:mx-0 lg:w-full">
              <NavList />
              <button className="w-full" onClick={toggleDarkMode}>
                button
              </button>
            </div>
            <div className="border-[0.5px] w-full relative bottom-11"></div>
          </div>
          <div className="flex-col w-full bg-gray-100 bg-opacity-25">
            {" "}
            {children}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
