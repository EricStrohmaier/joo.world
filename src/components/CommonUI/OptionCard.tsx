import { FC } from "react";

interface OptionCardProps {
  children: React.ReactNode;
}

const OptionCard: FC<OptionCardProps> = ({ children }) => {
  return (
    <div className="m-0">
      <div className="flex justify-center border-gray-600">{children}</div>
    </div>
  );
};

export default OptionCard;
