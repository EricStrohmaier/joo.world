import { FC, useEffect, useState } from "react";
import ActionButton from "./CommonUI/ActionButton";
import ProfileCard from "./CommonUI/ProfileCard";
import { getCurrentTimeIn24HourFormat } from "../utils/helperFunctions";

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
    <div className="max-w-6xl w-full p-3">
      <div className="h-full bg-gray-100 rounded-[40px] border-gray-200 border-2">
        <div className="flex flex-col justify-center items-center w-full h-full p-2">
          <div className="my-4 w-[90%] h-fit rounded-[20px] flex">
            <div className="w-full h-full flex justify-between">
              <ActionButton
                title={` : ${currentTime}`}
                svg={"./../public/watch.svg"}
                style={
                  "pointer-events-none  bg-gray-50 hover:shadow-none shadow-none flex justify-center items-center text-md font-semibold"
                }
              />

              <div className="flex space-x-2">
                <ActionButton
                  title={"edit feed"}
                  svg={"./../public/settings.svg"}
                />
                <ActionButton
                  title={"edit your lists"}
                  svg={"./../public/stack.svg"}
                />
                <ActionButton
                  title={"your communitys"}
                  svg={"./../public/globe.svg"}
                />
                <ActionButton
                  title={"learn more"}
                  svg={"./../public/dots.svg"}
                />
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
        </div>
      </div>
    </div>
  );
};

export default DisplayFeed;
