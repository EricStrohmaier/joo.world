import { FC } from "react";
import { Link } from "react-router-dom";

interface AboutProfileProps {
  picture?: string;
  displayName?: string;
  nip05?: string;
  website?: string;
  about?: string;
  lud16?: string;
  message?: string;
}

const AboutProfile: FC<AboutProfileProps> = ({
  picture,
  message,
  displayName,
  nip05,
  website,
  about,
  lud16,
}) => {
  return (
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
  );
};

export default AboutProfile;
