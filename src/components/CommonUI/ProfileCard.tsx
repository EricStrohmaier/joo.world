import { FC } from "react";
import LikeButton from "./LikeButton";
import { comment, heart, repost } from "../../icons";

interface ProfileCardProps {
  index?: number;
  profilePicUrl?: string; // URL of the profile picture
  username?: string; // Username or display name
  postContent?: string; // Text content of the post
  npub?: string; // NIP-05 address of the user
  featuredPost?: string;
}

const ProfileCard: FC<ProfileCardProps> = ({
 
  username,
  postContent,
  npub =``,
}) => {
  return (
    <>
    <div className="flex flex-col lg:w-[95%] w-[90%] ">
      <div className="my-1 rounded-lg ">
        {/* Profile Picture */}

        <div className="flex items-center space-x-4">
          {username? <div>{username}</div>:null}
          {npub? <div>name {npub} </div>:null}
        </div>

        {/* Post Content */}
        <div className="my-2 mb-3 w-fit">{postContent}</div>
        
          {/* Featured Post */}

        {/* Action Buttons */}
        <div className="flex justify-start mt-2 space-x-4">
          <LikeButton svg={heart} />
          <LikeButton svg={repost} />

          <LikeButton svg={comment} />
        </div>
      </div>
      {/* TODO if last divider line not displaying  */}
      {/* <div className="my-2 border-b-2 "></div> */}
    </div>
    </>
  );
};

export default ProfileCard;
