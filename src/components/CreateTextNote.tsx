import { FC } from "react";

import ProfileImage from "./CommonUI/ProfileImage";
import ActionButton from "./CommonUI/ActionButton";

interface CreateTextNoteProps {}

const CreateTextNote: FC<CreateTextNoteProps> = () => {
  return (
    <div className="max-w-6xl w-full p-3">
      <div className="h-80 bg-gray-100 rounded-[40px] border-gray-200 border-2">
        <div className="flex justify-center items-center w-full h-full p-2">
          <div className="p-2 w-[90%] h-[90%] flex">
            <ProfileImage
              className="top-5 relative"
              profilePicUrl={
                "https://avatars.githubusercontent.com/u/122783162?v=4"
              }
              username={""}
              alt={""}
              npub={""}
            />
            <div className="w-5/6 p-2">
              <div className="flex">
                <ActionButton title={"Choose Format"} style={"mb-2 mr-2"} />
                {/* <ActionButton title={"Choose Audience"} style={"mb-2"} /> */}
              </div>

              <div className="mb-2 ">
                <textarea
                  className="w-full h-32 border border-gray-300 rounded-2xl p-2 focus:outline-none focus:ring focus:border-blue-400"
                  placeholder="Dynamic Questions will be renderd here"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <ActionButton title={"Pics"} style={"mr-2"} />
                  <ActionButton title={"Configure Relays"} />
                </div>
                <div className="flex">
                  <ActionButton title={"Cancel"} style={"mr-2"} />
                  <ActionButton title={"Publish"} style={"mr-2"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTextNote;
