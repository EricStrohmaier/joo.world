import { FC } from "react";
import Button from "./CommonUI/Button";

interface NavigationBarProps {}

const NavigationBar: FC<NavigationBarProps> = () => {
  return (
    <div className="w-full  bg-white shadow-md fixed top-0 left-0 right-0 bg-opacity-50 z-[5] backdrop-filter backdrop-blur-lg">
      <div className="flex justify-center items-center z-10 px-3">
        <div className="w-full max-w-6xl flex justify-between p-2">
          <Button
            title={"nostWork"}
            href={"/"}
            style="bg-gray-100 p-3 h-[50px] font-bold text-md mr-2 border-2 border-gray-200"
          />
          <div className="flex font-bold text-md ">
            {/* maybe making a popup modal view here for the profile */}

            <div className="flex space-x-2">
              <button className=" bg-gray-100 border-2 border-gray-200 rounded-[10px] p-3">
                Sign Out
              </button>
            </div>

            <button className="bg-gray-100 border-2 border-gray-200 rounded-[10px] p-3">
              Sign In
            </button>
          </div>
        </div>
      </div>
      <div className="flex border-gray-200 border-b-2 w-full"></div>
    </div>
  );
};

export default NavigationBar;
