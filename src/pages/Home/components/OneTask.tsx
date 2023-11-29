import { FC } from "react";

interface Props {
}


const OneTask: FC<Props> = () => {
  return (
    <div className="w-full h-full  rounded-[20px]">
      <div className="p-1 w-full h-fit rounded-[20px] flex border-2">
        <div className="w-full h-full m-2">
            OneTask bro
        </div>
      </div>
    </div>
  );
};

export default OneTask;
