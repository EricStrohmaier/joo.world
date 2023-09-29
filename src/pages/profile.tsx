import { FC } from "react";
import { getProfileDataFromMetaData } from "../utils/helperFunctions";
import { useMetadata } from "../utils/nostr/use-metadata";
import { useNostrConnection } from "../utils/nostr/use-nostr-connection";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const { connection: nostrConnection } = useNostrConnection();

  if (!nostrConnection) throw new Error("Nostr Connection not found");

  // You should have a valid `pubkey` variable defined here
  const pubkey = nostrConnection?.pubkey || "";

  const { metadata } = useMetadata({ pubkey });

  const profile = getProfileDataFromMetaData(metadata, pubkey);

  console.log(profile);

  return (
    <div>
      <div>{JSON.stringify(profile)}</div>
    </div>
  );
};

export default Profile;
