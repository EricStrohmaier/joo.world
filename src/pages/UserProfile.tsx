import React, { FC } from "react";
import LayoutPage from "../components/LayoutPage";
import { Link } from "react-router-dom";
import { message } from "../public";
import { useAuthor } from "../logic/queries";

interface UserProfileProps {
  pubkey: string; // Pass pubkey as a prop
}

const UserProfile: FC<UserProfileProps> = ({ pubkey }) => {
  const { data: author, status } = useAuthor(pubkey);
  const { displayName, picture, banner, nip05, about, lud16, website } =
    author || {};

  if (status === "loading") {
    return (
      <LayoutPage>
        <div className="h-32 flex justify-center items-center overflow-hidden bg-white shadow-md text-xs xl:rounded-xl">
          Loading...
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
            src={banner}
            alt={`${displayName}'s social media banner`}
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
              <div className="flex-1 justify-end items-center flex gap-2 space-x-4">
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
                  <Link to="/profile/edit" className="btn btn-sm btn-neutral">
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
      </div>
    </LayoutPage>
  );
};

export default UserProfile;
