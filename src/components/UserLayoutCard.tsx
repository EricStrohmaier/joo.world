import { FC } from "react";

interface LayoutCardProps {
  children: React.ReactNode;
}

const LayoutCard: FC<LayoutCardProps> = ({ children }) => {
  return (
    <div className=" w-full h-full">
      <div className="h-full flex justify-center">
        <div className="flex flex-col justify-center items-center w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutCard;
