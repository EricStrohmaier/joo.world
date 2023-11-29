import { FC } from "react";
// import { useTheme } from "../logic/theme/useTheme";

interface LayoutCardComponentProps {
  children: React.ReactNode;
}

const LayoutCardComponent: FC<LayoutCardComponentProps> = ({ children }) => {
//   const { darkMode } = useTheme();

//   const cardStyling = darkMode ? "bg-secondaryDark " : "bg-secondaryLight";

  return (
    <div
      className={` md:w-[98%] w-full  h-full flex justify-center items-center}`}
    >
      <div
        className={` flex items-center justify-center w-full h-full p-3 rounded-2xl  `}
      >
        <div className="flex items-center justify-center w-full h-full ">
          <div className="w-full ">{children}</div>
        </div>
      </div>{" "}
    </div>
  );
};

export default LayoutCardComponent;
