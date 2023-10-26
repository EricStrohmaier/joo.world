import { FC } from "react";
import LayoutPage from "../../components/LayoutPage";
import LayoutCard from "../../components/LayoutCard";
import FeedNavbar from "../Home/components/FeedNavbar";
import CreateTextNote from "./components/CreateTextNote";
import WorkflowCard from "./components/WorkflowCard";

interface WorkflowProps {}

const Workflow: FC<WorkflowProps> = () => {
  return (
    <LayoutPage>
      <FeedNavbar />
      <LayoutCard>
        <div className="w-full h-fit">
         
            <div className="flex items-center justify-center w-full mb-6 min-h-[33%]">
              <WorkflowCard>
                <CreateTextNote />
              </WorkflowCard>
            </div>

            <div className="w-full lg:h-2/3 h-1/3 lg:flex">
              <div className="flex items-center justify-center w-full h-full mb-4 lg:w-3/5">
                <WorkflowCard>
                  <div className="flex items-center justify-center w-full h-40">
                    comming soon <br />
                    Post's:
                    <br />
                    Schleude your posts <br />
                    publish drafts etc.
                  </div>
                </WorkflowCard>{" "}
              </div>
              <div className="flex items-center justify-center w-full h-full lg:w-2/5 ">
                <WorkflowCard>
                  {" "}
                  <div className="flex items-center justify-center w-full h-40">
                    comming soon <br />
                    LISTS:
                    <br />
                    View and edit your lists{" "}
                  </div>
                </WorkflowCard>{" "}
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
