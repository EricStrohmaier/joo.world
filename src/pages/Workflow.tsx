import { FC } from "react";
import LayoutPage from "../components/LayoutPage";
import CreateTextNote from "../components/CreateTextNote";
import LayoutCard from "../components/UserLayoutCard";

interface WorkflowProps {}

const Workflow: FC<WorkflowProps> = () => {
  return (
    <LayoutPage>
      <LayoutCard>
        <CreateTextNote />
      </LayoutCard>
    </LayoutPage>
  );
};

export default Workflow;
