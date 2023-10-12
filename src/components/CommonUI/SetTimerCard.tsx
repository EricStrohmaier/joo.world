import { FC } from "react";

interface SetTimerCardProps {
  title: string;
}

const SetTimerCard: FC<SetTimerCardProps> = ({ title }) => {
  return (
    <div className="w-1/4  mt-12 py-2 h-fit bg-gray-200 rounded-[70px] border-2 ">
      <div className="w-full h-full text-center flex flex-col ">
        <div className="text-xl font-semibold">{title}</div>
        <p>comming soon!</p>
        <div className=" mt-3">
          <input
            type="number"
            placeholder="15:00"
            disabled
            className="w-1/3 text-2xl font-semibold bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default SetTimerCard;
