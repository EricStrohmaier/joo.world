import { FC } from "react";
import LayoutPage from "../../components/LayoutPage";
import LayoutCard from "../../components/LayoutCard";

interface WorkflowProps {}

const Workflow: FC<WorkflowProps> = () => {
  return (
    <LayoutPage>
      <LayoutCard>
        <div className="w-full h-full">
          <div className="flex items-center justify-center w-full mb-2 h-1/3">
            <div className="lg:w-[90%] lg:h-[90%] w-full h-full flex  justify-center items-center">
              <div className="flex items-center justify-center w-full h-full p-3 overflow-hidden transition-colors border border-transparent rounded-lg bg-gray-50 hover:border-gray-300">
                <div className="items-center justify-center w-full h-full lg:w-1/2">
                  <div>
                    <div>Share with us what motivates you?</div>
                    <div className="mt-6">Whats your goal today?</div>
                    <input
                      className="p-1 rounded-2xl indent-4"
                      type="text"
                      placeholder="Your Awnser"
                    />
                    <button className="p-1 px-2 ml-2 bg-gray-300 rounded-lg">
                      Post
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="w-full lg:h-2/3 h-1/3 lg:flex ">
            <div className="flex items-center justify-center w-full h-full my-2 lg:w-3/5">
              <div className="lg:w-[90%] lg:h-[90%] w-full h-full  border-gray-700 border-2"></div>
            </div>
            <div className="flex items-center justify-center w-full h-full mt-2 lg:w-2/5 ">
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
