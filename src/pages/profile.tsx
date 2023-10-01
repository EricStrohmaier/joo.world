import { FC } from "react";
import { getProfileDataFromMetaData } from "../utils/helperFunctions";
import { useMetadata } from "../utils/nostr/use-metadata";
import { useNostrConnection } from "../utils/nostr/use-nostr-connection";
import LayoutPage from "../components/LayoutPage";
import { Link } from "react-router-dom";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const { connection: nostrConnection } = useNostrConnection();
  if (!nostrConnection) throw new Error("Nostr Connection not found");
  // You should have a valid `pubkey` variable defined here
  const pubkey = nostrConnection?.pubkey || "";
  const { metadata } = useMetadata({ pubkey });
  const profile = getProfileDataFromMetaData(metadata, pubkey);

  console.log("profile", profile);

  return (
    <LayoutPage>
      <div className="max-w-full h-fit ">
        {" "}
        <div className="w-full h-full border-black">
          <img
            className="w-full h-32 mb-4 object-cover"
            src={profile.banner}
            alt={`${profile.name}'s social media banner`}
          />
        </div>
        <div>
          <div className="mb-2 mx-2 md:px-4 md:mx-0 flex flex-col gap-2">
            <div className="flex flex-row">
              <div
                className="-mt-24"
                style={{ maxWidth: "136px" } as React.CSSProperties}
              >
                <div className="rounded-full aspect-square border-4 border-black">
                  <img
                    src={profile.image}
                    width="128"
                    height="128"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 justify-end items-center flex gap-2 space-x-4">
                <div className="flex">
                  <a
                    // to="lightning:strohstacks@getalby.com"
                    href={`lightning:${profile.lightning_address}`}
                    className="btn btn-sm btn-neutral"
                  >
                    <img src="./../public/message.svg" alt="" />
                  </a>
                </div>
                <div className="flex">
                  <a
                    // to="lightning:strohstacks@getalby.com"
                    href={`lightning:${profile.lightning_address}`}
                    className="btn btn-sm btn-neutral"
                  >
                    ⚡
                  </a>
                </div>
                <div>
                  <Link to="/profile/edit" className="btn btn-sm btn-neutral">
                    Edit Profile
                  </Link>
                </div>
                <div className="relative">
                  <button className="dropbtn btn btn-circle btn-sm btn-ghost text-neutral-500 pb-2">
                    …
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex-1 ">
                <span className="text-xl font-semibold mr-2">
                  <span>{profile.displayName}</span>
                </span>
                <small className="inline-block text-iris-green visible">
                  strohstacks@nostrplebs.com
                </small>
              </div>

              <div className="py-2">
                <p className="text-sm">nostrudent</p>
                <div className="flex flex-1 flex-row align-center justify-center mt-4">
                  <div className="flex-1">
                    <a
                      href="https://eric-strohmaier.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      eric-strohmaier.netlify.app
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Profile;
// dropdown buttons ?
{
  /* <div className="absolute z-10 p-2 flex flex-col gap-2 right-0 w-56 rounded-md shadow-lg bg-black border-neutral-500 border-2">
  <button className="btn btn-sm">Copy Link</button>
  <button className="btn btn-sm">Copy User ID</button>
  <button className="btn btn-sm">Show QR code</button>
  <button className="btn btn-sm">Copy Raw Data</button>
</div>; */
}
