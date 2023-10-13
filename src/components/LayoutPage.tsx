import React, { FC } from "react";
import NavList from "./NavList";
import { useTheme } from "../logic/queries/useTheme";

interface LayoutProps {
  children: React.ReactNode;
  toggleDarkMode?: () => void;
}

const LayoutPage: FC<LayoutProps> = ({ children }) => {
  const { darkMode } = useTheme(); // Access darkMode using the useTheme hook

  const layoutStyles = darkMode
    ? "bg-backgroundDark text-textDark"
    : "bg-backgroundLight text-textLight ";
  const darkStyle = darkMode ? "bg-primaryDark" : "bg-primaryLight";

  return (
    <div
      className={`h-full min-h-screen  w-full flex items-center justify-center ${layoutStyles}`}
    >
      <div
        className={`flex items-center justify-center min-h-[90%] h-full w-full ${layoutStyles}`}
      >
        <div
          className={`flex mx-3 my-6 max-w-7xl h-full w-full rounded-[40px] overflow-hidden ${darkStyle}`}
        >
          <div className="border-r-2 lg:w-1/5">
            <div className="flex flex-col items-center justify-center h-full mx-1 lg:mx-0 lg:w-full">
              <NavList />
            </div>
            <div className="border-[0.5px] w-full relative bottom-11"></div>
          </div>
          <div className="flex-col w-full">{children}</div>{" "}
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
