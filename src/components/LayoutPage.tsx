import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutPage: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-full my-12 ">
      <div className="flex mx-3 max-w-6xl h-[600px] w-full bg-gray-100 rounded-[40px]">
        <div className="w-1/4 border-r-2 border-gray-200 ">
          <div className="m-3 my-12 flex flex-col space-y-6 items-center justify-center">
            <div>nav list?</div> <div>nav list? item</div>{" "}
            <div>nav list? item</div> <div>nav list? item</div>{" "}
          </div>
        </div>
        <div className="overflow-hidden w-full flex-col m-5 bg-purple-700 bg-opacity-25  rounded-[40px]">
          {" "}
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
