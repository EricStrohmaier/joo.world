import { FC } from "react";
import Button from "./CommonUI/Button";
import { useMetadata } from "../utils/nostr/use-metadata";
import {
  NostrAccountConnection,
  useNostrConnection,
} from "../utils/nostr/use-nostr-connection";
import { getProfileDataFromMetaData } from "../utils/helperFunctions";

interface NavigationBarProps {}

const NavigationBar: FC<NavigationBarProps> = () => {
  const isLogged = sessionStorage.getItem("isLogged") === "true";
  const { connection, setConnection } = useNostrConnection();
  const pubkey = connection?.pubkey;
  if (!pubkey) {
    console.log("No pubkey");
  }
  const { metadata } = useMetadata({ pubkey: pubkey || "" });

  async function connectToNostrExtension() {
    if (window.nostr) {
      try {
        const pubkey = await window.nostr.getPublicKey();
        return {
          type: "nostr-ext",
          pubkey,
        } as NostrAccountConnection;
      } catch (err) {
        throw new Error("Permission to get public key rejected");
      }
    } else {
      throw new Error(
        "Couldn't find a nostr supporting extension in your browser"
      );
    }
  }
  async function login() {
    try {
      const connection = await connectToNostrExtension();
      setConnection(connection);
      sessionStorage.setItem("isLogged", "true");
    } catch (err) {
      console.log(err);
    }
  }
  const logout = () => {
    setConnection(null);
    sessionStorage.setItem("isLogged", "false");
  };

  return (
    <div className="w-full  bg-white shadow-md fixed top-0 left-0 right-0 bg-opacity-50 z-[5] backdrop-filter backdrop-blur-lg">
      <div className="flex justify-center items-center z-10 px-3">
        <div className="w-full max-w-6xl flex justify-between p-2">
          <Button
            title={"nostWork"}
            href={"/"}
            style="bg-gray-100 p-3 h-[50px] font-bold text-md mr-2 border-2 border-gray-200"
          />
          <div className="flex font-bold text-md ">
            {/* maybe making a popup modal view here for the profile */}
            {isLogged ? (
              <div className="flex space-x-2">
                <Button
                  url={getProfileDataFromMetaData(metadata, pubkey || "").image}
                  href={`/profile/${pubkey}`}
                  style=" "
                />
                <button
                  className=" bg-gray-100 border-2 border-gray-200 rounded-[10px] p-3"
                  onClick={logout}
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={login}
                className="bg-gray-100 border-2 border-gray-200 rounded-[10px] p-3"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex border-gray-200 border-b-2 w-full"></div>
    </div>
  );
};

export default NavigationBar;
