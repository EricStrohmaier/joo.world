import { FC } from "react";

interface LayoutCardProps {
  children: React.ReactNode;
}

const LayoutCard: FC<LayoutCardProps> = ({ children }) => {
  return (
    <div className="w-full h-full ">
      <div className="flex justify-center h-full">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className=" w-[90%] h-full my-6 flex">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutCard;
