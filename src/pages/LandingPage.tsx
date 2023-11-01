import { FC } from "react";
import { useTheme } from "../logic/theme/useTheme";

interface LayoutProps {
  toggleDarkMode?: () => void;
}

const LandingPage: FC<LayoutProps> = () => {
  const { darkMode } = useTheme();

  const layoutStyles = darkMode
    ? "bg-backgroundDark text-textDark "
    : "bg-backgroundLight text-textLight ";
  const darkStyle = darkMode
    ? "bg-primaryDark border-textDark"
    : "border-textLight bg-primaryLight";

  return (
    <div
      className={`h-full min-h-screen  w-full flex items-center justify-center ${layoutStyles}`}
    >
      <div
        className={`flex items-center justify-center min-h-[90%] h-full  w-full ${layoutStyles}`}
      >
        <div
          className={`flex mx-3 my-6 max-w-7xl h-screen w-full rounded-[40px] overflow-hidden ${darkStyle}`}
        >
            <div>Landing Page</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
