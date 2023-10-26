import React, { FC } from "react";

interface DisplayFeedProps {
  children: React.ReactNode;
}


const DisplayFeed: FC<DisplayFeedProps> = ({ children }) => {
  return (
    <div className="w-full h-full  rounded-[20px]">
      <div className="p-1 w-full h-fit rounded-[20px] flex border-2">
        <div className="w-full m-2 h-fit">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DisplayFeed;
