import { FC } from "react";
import LayoutPage from "../../components/LayoutPage";
import { useParams } from "react-router-dom";
import { message } from "../../public";
import { useAuthor } from "../../logic/queries";
import { nip19 } from "nostr-tools";
import { Spinner } from "../../components/CommonUI/Spinner";
import ShowRelays from "../../components/CommonUI/ShowRelays";
import AboutProfile from "./components/AboutProfile";
// import { useRelays } from "../logic/queries/useRelays";

interface ProfileProps {}

export const ProfileLogic: FC<ProfileProps> = () => {
  const { npub } = useParams();

  const hex = npub ? nip19.decode(npub).data.toString() : undefined;

  const { data: author, status } = useAuthor(hex);

  const { displayName, picture, banner, nip05, about, lud16, website } =
    author || {};

  // const relays = useRelays();

  if (status == "loading") {
    return (
      <LayoutPage>
        <div className="h-full bg-gray-100 flex justify-center items-center overflow-hidden shadow-md text-xs xl:rounded-xl">
          <div className="flex justify-center items-center">
            {" "}
            <Spinner />
          </div>
        </div>
      </LayoutPage>
    );
  }
  return (
    <LayoutPage>
      <div className="max-w-full h-fit ">
        {" "}
        <div className="w-full h-full border-black">
          <img
            className="w-full h-32 mb-4 object-cover"
            src={banner ? banner : "bg-purple-500 opacity-50"}
            alt={`${displayName}'s banner`}
          />
        </div>
        <div>
          <AboutProfile
            displayName={displayName}
            picture={picture}
            about={about}
            message={message}
            lud16={lud16}
            nip05={nip05}
            website={website}
          />
          <div className="border-[0.5px]"></div>
        </div>
        <div>
          <ShowRelays />
        </div>
      </div>
    </LayoutPage>
  );
};

// dropdown buttons ?
{
  /* <div className="absolute z-10 p-2 flex flex-col gap-2 right-0 w-56 rounded-md shadow-lg bg-black border-neutral-500 border-2">
  <button className="btn btn-sm">Copy Link</button>
  <button className="btn btn-sm">Copy User ID</button>
  <button className="btn btn-sm">Show QR code</button>
  <button className="btn btn-sm">Copy Raw Data</button>
</div>; */
}
