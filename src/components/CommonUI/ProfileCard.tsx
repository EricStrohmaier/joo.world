import { FC } from "react";
import ProfileImage from "./ProfileImage";
import FeaturedCard from "./FeaturedCard";
import LikeButton from "./LikeButton";
import { comment, heart, repost } from "../../public";

interface ProfileCardProps {
  profilePicUrl: string; // URL of the profile picture
  username: string; // Username or display name
  postContent: string; // Text content of the post
  npub: string; // NIP-05 address of the user
  featuredPost?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
  username,
  postContent,
  profilePicUrl,
  npub,
  featuredPost,
}) => {
  return (
    <div className="w-full mx-auto">
      <div className="py-3  my-1 px-2 rounded-lg">
        {/* Profile Picture */}

        <div className="flex items-center space-x-4">
          <ProfileImage
            profilePicUrl={`${profilePicUrl}`}
            alt={`${username}'s profile`}
            username={username}
            npub={npub}
          />
        </div>

        {/* Post Content */}
        <p className="my-2 mb-3 text-gray-700">{postContent}</p>
        {featuredPost && (
          <div className=" border-2 rounded-lg m-2 mb-3 ">
            <FeaturedCard
              profilePicUrl={`${profilePicUrl}`}
              // alt={"featuredPost.username"}
              username={"featuredPost.username"}
              npub={"featuredPost.npub"}
              postContent={featuredPost}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-2 flex justify-start space-x-4">
          <LikeButton svg={heart} />
          <LikeButton svg={repost} />

          <LikeButton svg={comment} />
        </div>
      </div>
      {/* TODO if last divider line not displaying  */}
      <div className="border-b-2 my-2 "></div>
    </div>
  );
};

export default ProfileCard;
