import { FC } from "react";
import NavList from "./NavList";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutPage: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-full my-7 ">
      <div className="flex mx-3 max-w-6xl min-h-[90vh] h-full w-full bg-gray-100 rounded-[40px] overflow-hidden">
        <div className="lg:w-1/5 border-r-2 border-gray-200 ">
          <div className="my-12 mx-1 lg:mx-0 flex flex-col items-center justify-center  lg:w-full ">
            <NavList />
          </div>
          <div className="border-[0.5px] w-full relative bottom-11"></div>
        </div>
        <div className="overflow-hidden w-full flex-col bg-gray-100 bg-opacity-25">
          {" "}
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
