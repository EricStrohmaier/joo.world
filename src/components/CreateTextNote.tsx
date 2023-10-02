import { FC } from "react";

import ActionButton from "./CommonUI/ActionButton";
import Button from "./CommonUI/Button";
import { getProfileDataFromMetaData } from "../utils/helperFunctions";
import { useNostrConnection } from "../utils/nostr/use-nostr-connection";
import { useMetadata } from "../utils/nostr/use-metadata";
import LayoutCard from "./LayoutCard";
import { image, server } from "../public";

interface CreateTextNoteProps {}

const CreateTextNote: FC<CreateTextNoteProps> = () => {
  const { connection } = useNostrConnection();
  const pubkey = connection?.pubkey;
  if (!pubkey) {
    console.log("No pubkey");
  }
  const { metadata } = useMetadata({ pubkey: pubkey || "" });

  return (
    <LayoutCard>
      <div className="p-2 w-[90%] h-[90%] flex">
        <Button
          url={getProfileDataFromMetaData(metadata, pubkey || "").image}
          href={`/profile/${pubkey}`}
          style="mt-5 "
        />{" "}
        <div className="w-5/6 p-2">
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
