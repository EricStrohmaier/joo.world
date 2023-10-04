import { FC } from "react";

import ActionButton from "./CommonUI/ActionButton";
import { image, server } from "../public";
import LayoutCard from "./UserLayoutCard";

interface CreateTextNoteProps {}

const CreateTextNote: FC<CreateTextNoteProps> = () => {
  return (
    <LayoutCard>
      <div className=" w-[90%] h-[90%] flex">
        {/* <div>
          <img
            className="w-12 h-12 rounded-full mt-2"
            src="https://avatars.githubusercontent.com/u/122783162?v=4"
            alt="random pic"
          />
        </div> */}
        <div className="w-full p-2">
          {/* <div className="w-5/6 p-2"> */}
          <div className="flex">
            <ActionButton
              titleVisible={"Choose Format"}
              style={"mb-2 mr-2 px-2"}
            />
            {/* <ActionButton title={"Choose Audience"} style={"mb-2"} /> */}
          </div>

          <div className="mb-2">
            <textarea
              className="w-full h-32 border border-gray-300 rounded-2xl p-2 focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Dynamic Questions will be renderd here"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <ActionButton svg={image} style={"mr-2"} />
              <ActionButton svg={server} />
            </div>
            <div className="flex">
              <ActionButton titleVisible={"Cancel"} style={"mr-2  px-2"} />
              <ActionButton titleVisible={"Publish"} style={"mr-2 px-2"} />
            </div>
          </div>
        </div>
      </div>
    </LayoutCard>
  );
};

export default CreateTextNote;
