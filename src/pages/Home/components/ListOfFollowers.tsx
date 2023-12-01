/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from "react";
import { Metadata } from "../../../logic/types/nostr";


interface ListOfFollowersProps {
    userProfiles: Metadata[];
}

const ListOfFollowers: FC<ListOfFollowersProps> = ({userProfiles}) => {
  return (
    <>
      <div className="w-full h-full overflow-y-auto ">
        <div className="p-3">
          <p className="flex justify-center mb-2 text-xl font-semibold">Select Profiles you want in your new list!</p>
          {userProfiles.map((user, index) => (
            <div key={index} className="flex items-start gap-2 p-1 ml-7">
              <img src={user?.image} className="w-10 h-10 bg-pink-200 rounded-full"/>
              <div>{user?.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListOfFollowers;
