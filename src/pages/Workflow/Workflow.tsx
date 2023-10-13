import { FC } from "react";
import LayoutPage from "../../components/LayoutPage";
import LayoutCard from "../../components/LayoutCard";
import FeedNavbar from "../Home/components/FeedNavbar";
import { useTheme } from "../../logic/queries/useTheme";
import CreateTextNote from "./components/CreateTextNote";

interface WorkflowProps {}

const Workflow: FC<WorkflowProps> = () => {
  const { darkMode } = useTheme();

  const cardStyling = darkMode ? "bg-secondaryDark " : "bg-secondaryLight";

  return (
    <LayoutPage>
      <FeedNavbar />
      <LayoutCard>
        <div className="w-full h-full">
          <div className="flex items-center justify-center w-full mb-2 h-1/3">
            <div className="lg:w-[90%] lg:h-[90%] w-full h-full flex  justify-center items-center">
              <div
                className={`${cardStyling} flex items-center justify-center w-full h-full p-3   rounded-2xl shadow-lg `}
              >
                <div className="flex items-center justify-center w-full h-full lg:w-1/2">
                  <div className="w-full">
                    <CreateTextNote />
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="w-full lg:h-2/3 h-1/3 lg:flex">
            <div className="flex items-center justify-center w-full h-full lg:w-3/5">
              <div className="lg:w-[90%] lg:h-[90%] w-full h-full  border-gray-700 border-2"></div>
            </div>
            <div className="flex items-center justify-center w-full h-full lg:w-2/5 ">
              <div className="lg:w-[90%] lg:h-[90%] w-full h-full  border-gray-700 border-2"></div>
            </div>
          </div>
        </div>
      </LayoutCard>
    </LayoutPage>
  );
};

export default Workflow;

// const location = useLocation();
// const currentUrl = location.pathname;
// {currentUrl === "/workflows/create" ? (
//   <CreateTextNote />
// ) : (
//   <div className="flex justify-center w-full text-lg font-bold">
//     Here you will be able to create your own workflows
//   </div>
// )}
