import { FC } from "react";
import ProfileCard from "./CommonUI/ProfileCard";
import LayoutCard from "./LayoutCard";

interface DisplayFeedProps {}

const DisplayFeed: FC<DisplayFeedProps> = () => {
  return (
    <LayoutCard>
      <div className=" w-full h-full -my-7 rounded-[20px]">
        <div className="p-1 w-full h-fit rounded-[20px] flex border-2 bg-gray-50">
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
    </LayoutCard>
  );
};

export default DisplayFeed;
