import { FC } from "react";
import { useTheme } from "../../../logic/queries/useTheme";

interface WorkflowCardProps {
  children: React.ReactNode;
  style?: string;
}

const WorkflowCard: FC<WorkflowCardProps> = ({ children, style }) => {
  const { darkMode } = useTheme();

  const cardStyling = darkMode ? "bg-secondaryDark " : "bg-secondaryLight";

  return (
    <div
      className={`lg:h-[50%] w-full h-full flex justify-center items-center mx-5 ${style}}`}
    >
      <div
        className={`${cardStyling} flex items-center justify-center w-full h-full p-3   rounded-2xl shadow-lg `}
      >
        <div className="flex items-center justify-center w-full h-full lg:w-2/3">
          <div className="w-full ">{children}</div>
        </div>
      </div>{" "}
    </div>
  );
};

export default WorkflowCard;
