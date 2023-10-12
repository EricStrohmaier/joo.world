import { FC } from "react";
import { useLocation } from "react-router-dom";
import LayoutPage from "../../components/LayoutPage";
import CreateTextNote from "./components/CreateTextNote";
import LayoutCard from "../../components/LayoutCard";

interface WorkflowProps {}

const Workflow: FC<WorkflowProps> = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <LayoutPage>
      <LayoutCard>
        {currentUrl === "/workflows/create" ? (
          <CreateTextNote />
        ) : (
          <div className="w-full text-lg font-bold flex justify-center">
            Here you will be able to create your own workflows
          </div>
        )}
      </LayoutCard>
    </LayoutPage>
  );
};

export default Workflow;
