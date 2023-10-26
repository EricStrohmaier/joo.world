import { FC } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../logic/theme/useTheme";

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

  displayName,
  nip05,
  website,
  about,
  lud16,
}) => {
  const { darkMode } = useTheme();

  const styleing = darkMode ? "border-textDark " : "border-textLight";

  return (
    <div className="flex flex-col gap-2 mx-2 mb-2 md:px-4 md:mx-0">
      <div className="flex flex-row ">
        <div
          className="-mt-24"
          style={{ maxWidth: "136px" } as React.CSSProperties}
        >
          <div className={`border-2 rounded-full aspect-square ${styleing}`}>
            <img
              src={picture}
              width="128"
              height="128"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-end flex-1 mr-16 lg:mx-1">
          <div className="flex">
            <div className="mr-3">
              <a href={`lightning:${lud16}`} className="">
                ⚡
              </a>
            </div>

            <Link
              to="/profile/edit"
              className="flex items-center text-xs md:text-lg"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex-1 ">
          <span className="mr-2 text-xl font-semibold">
            <span>{displayName}</span>
          </span>
          <div className="flex space-x-3 text-sm">
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
