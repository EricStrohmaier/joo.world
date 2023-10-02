import { FC, useEffect, useState } from "react";
import ActionButton from "./CommonUI/ActionButton";
import ProfileCard from "./CommonUI/ProfileCard";
import { getCurrentTimeIn24HourFormat } from "../utils/helperFunctions";
import LayoutCard from "./LayoutCard";
import { dots, globe, settings, stack, watch } from "../public";

interface DisplayFeedProps {}

const DisplayFeed: FC<DisplayFeedProps> = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      const formattedTime = getCurrentTimeIn24HourFormat();
      setCurrentTime(formattedTime);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <LayoutCard>
      <div className="my-4 w-[90%] h-fit rounded-[20px] flex">
        <div className="w-full h-full flex justify-between">
          <ActionButton
            titleVisible={`${currentTime}`}
            svg={watch}
            style={
              "px-2 pointer-events-none bg-gray-50 hover:shadow-none shadow-none flex justify-center items-center text-md font-semibold"
            }
            textStyle={"ml-[5px]"}
          />

          <div className="flex space-x-2">
            <ActionButton title={"Edit feed"} svg={settings} />
            <ActionButton title={"Edit your lists"} svg={stack} />
            <ActionButton title={"Your communitys"} svg={globe} />
            <ActionButton title={"Learn more"} svg={dots} />
          </div>
        </div>
      </div>
      <div className="p-2 w-[90%] h-[90%] rounded-[20px] flex border-2 bg-gray-50">
        <div className="w-full h-fit m-2 ">
          <ProfileCard
            profilePicUrl={
              "https://avatars.githubusercontent.com/u/25105806?v=4"
            }
            username={"Example User "}
            npub={"short@handle.nothing"}
            postContent={"Tester test mr testinger"}
            // featuredPost={"featured post here"}
          />
          <ProfileCard
            profilePicUrl={
              "https://avatars.githubusercontent.com/u/25105806?v=4"
            }
            username={"Mr Testinger"}
            npub={"nbub0x123456789"}
            postContent={
              "Bitcoin is literally the best thing ever!!! -- thanks to copilot"
            }
            featuredPost={"featured postinger agrees"}
          />
        </div>
      </div>
    </LayoutCard>
  );
};

export default DisplayFeed;
