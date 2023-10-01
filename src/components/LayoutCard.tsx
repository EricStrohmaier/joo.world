import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutCard: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="max-w-6xl w-full p-3">
      <div className="h-full bg-gray-100 rounded-[40px] border-gray-200 border-2">
        <div className="flex flex-col justify-center items-center w-full h-full p-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutCard;
