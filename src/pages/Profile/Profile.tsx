import { FC } from "react";
import LayoutPage from "../../components/LayoutPage";
import { Link, useParams } from "react-router-dom";
import { message } from "../../public";
import { useAuthor } from "../../logic/queries";
import { nip19 } from "nostr-tools";
import { Spinner } from "../../components/CommonUI/Spinner";
import ShowRelays from "../../components/CommonUI/ShowRelays";
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
          <div className="mb-2 mx-2 md:px-4 md:mx-0 flex flex-col gap-2">
            <div className="flex flex-row">
              <div
                className="-mt-24"
                style={{ maxWidth: "136px" } as React.CSSProperties}
              >
                <div className="rounded-full aspect-square border-4 border-black">
                  <img
                    src={picture}
                    width="128"
                    height="128"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 justify-end items-center flex space-x-2">
                <div className="flex">
                  <a href={``} className="">
                    <img src={message} alt="go to message" />
                  </a>
                </div>
                <div className="flex">
                  <a href={`lightning:${lud16}`} className="">
                    ⚡
                  </a>
                </div>
                <div>
                  <Link
                    to="/profile/edit"
                    className="btn btn-sm btn-neutral text-xs md:text-lg "
                  >
                    Edit Profile
                  </Link>
                </div>
                <div className="relative">
                  <button className="dropbtn btn btn-circle btn-sm btn-ghost text-neutral-500 pb-2 mr-2">
                    …
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex-1 ">
                <span className="text-xl font-semibold mr-2">
                  <span>{displayName}</span>
                </span>
                <div className="flex text-sm space-x-3">
                  <div>{nip05}</div>
                  <a
                    href={website?.toString()}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </div>
              </div>
              <div className="py-2">
                <p className="text-sm">{about}</p>
              </div>
            </div>
          </div>
          <div className="border-[0.5px]"></div>
        </div>
        <div>
          <ShowRelays></ShowRelays>
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
