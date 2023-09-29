import { FC } from "react";

import ActionButton from "./CommonUI/ActionButton";
import Button from "./CommonUI/Button";
import { getProfileDataFromMetaData } from "../utils/helperFunctions";
import { useNostrConnection } from "../utils/nostr/use-nostr-connection";
import { useMetadata } from "../utils/nostr/use-metadata";

interface CreateTextNoteProps {}

const CreateTextNote: FC<CreateTextNoteProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { connection, setConnection } = useNostrConnection();
  const pubkey = connection?.pubkey;
  if (!pubkey) {
    console.log("No pubkey");
  }
  const { metadata } = useMetadata({ pubkey: pubkey || "" });

  return (
    <div className="max-w-6xl w-full  p-3">
      <div className="h-fit bg-gray-100 rounded-[40px] border-gray-200 border-2">
        <div className="flex justify-center items-center w-full h-full p-2">
          <div className="p-2 w-[90%] h-[90%] flex">
            <Button
              url={getProfileDataFromMetaData(metadata, pubkey || "").image}
              href={`/profile/${pubkey}`}
              style="mt-5 "
            />{" "}
            <div className="w-5/6 p-2">
              <div className="flex">
                <ActionButton title={"Choose Format"} style={"mb-2 mr-2"} />
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
