import { FC } from "react";
import ProfileImage from "./ProfileImage";

interface FeaturedCardProps {
  profilePicUrl: string; // URL of the profile picture
  username: string; // Username or display name
  postContent: string; // Text content of the post
  npub: string; // NIP-05 address of the user
  featuredPost?: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  username,
  postContent,
  profilePicUrl,
  npub,
  featuredPost,
}) => {
  return (
    <div className="w-full mx-auto">
      <div className="py-3 px-2 rounded-lg">
        <div className="flex items-center space-x-4">
          <ProfileImage
            profilePicUrl={`${profilePicUrl}`}
            alt={`${username}'s profile`}
            username={username}
            npub={npub}
          />
        </div>

        <p className="mt-2 text-gray-700 ">{postContent}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
