/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from "react";
import { Metadata } from "../../../logic/types/nostr";


interface CreateNewListProps {
    userProfiles: Metadata[];
}

const CreateNewList: FC<CreateNewListProps> = ({userProfiles}) => {
  return (
    <>
      <div className="w-full h-full overflow-y-auto border-2 border-red-900">
        <div className="p-3">
          {userProfiles.map((user, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              <div>{user?.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreateNewList;
