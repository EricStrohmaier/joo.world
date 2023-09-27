import { FC, HTMLProps } from "react";

interface ProfileImageProps extends HTMLProps<HTMLDivElement> {
  profilePicUrl: string;
  alt: string;
  username?: string;
  npub: string;
}

const ProfileImage: FC<ProfileImageProps> = ({
  className,
  profilePicUrl,
  alt,
  username,
  npub,
}) => {
  // Combine the default class and any additional class passed as props
  const classes = `w-12 h-fit  ${className || ""}`;

  return (
    <div className={classes}>
      <div className="flex items-center space-x-2">
        <img
          src={profilePicUrl}
          alt={`${alt}'s profile`}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex p-2 w-max">
          <div className="text-xl font-semibold w-max mr-2 flex items-center">
            {username}
          </div>
          <div className="text-sm font-normal flex items-center">{npub}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
