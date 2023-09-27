import { FC } from "react";

interface CreateWorkflowsProps {}

const CreateWorkflows: FC<CreateWorkflowsProps> = ({}) => {
  return (
    <div className="max-w-6xl w-full p-3">
      <div className="h-32 bg-gray-100 rounded-[40px] border-gray-200 border-2">
        <div className="flex justify-center items-center w-full h-full p-2">
          <div className="p-2 w-[90%] h-[90%] flex">
            <div className="p-2 border-2 bg-gray-50  rounded-2xl">
              {" "}
              lets create a workflows together
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkflows;
