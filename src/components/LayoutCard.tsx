import { FC } from "react";

interface LayoutCardProps {
  children: React.ReactNode;
}

const LayoutCard: FC<LayoutCardProps> = ({ children }) => {
  return (
    <div className="flex justify-center w-full h-full">
     
          <div className="w-full h-full m-6 ">{children}</div>
      
    </div>
  );
};

export default LayoutCard;
