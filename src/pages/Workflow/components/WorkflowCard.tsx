import { FC } from "react";
import { useTheme } from "../../../logic/theme/useTheme";

interface WorkflowCardProps {
  children: React.ReactNode;
  style?: string;
}

const WorkflowCard: FC<WorkflowCardProps> = ({ children, style }) => {
  const { darkMode } = useTheme();

  const cardStyling = darkMode ? "bg-secondaryDark " : "bg-secondaryLight";

  return (
    <div
      className={`lg:h-[50%] md:w-[98%] w-full  h-full flex justify-center items-center  ${style}}`}
    >
      <div
        className={`${cardStyling} flex items-center justify-center w-full h-full p-3   rounded-2xl shadow-lg `}
      >
        <div className="flex items-center justify-center w-full h-full ">
          <div className="w-full ">{children}</div>
        </div>
      </div>{" "}
    </div>
  );
};

export default WorkflowCard;
