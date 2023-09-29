import React from "react";
import { nip19 } from "nostr-tools";
import { getPubKey } from "../../actions/Nostr";

interface GoToProfileButtonProps {
  title: string;
}

const GoToProfileButton: React.FC<GoToProfileButtonProps> = ({ title }) => {
  const goToProfile = () => {
    getPubKey()
      .then((data) => {
        const npub = nip19.npubEncode(data);
        window.location.href = `/profile/${npub}`;
      })
      .catch((error) => console.error("Error logging in:", error));
  };

  return (
    <button
      onClick={goToProfile}
      className="bg-gray-100 font-bold text-md mr-2 border-2 border-gray-200"
    >
      {title}
    </button>
  );
};

export default GoToProfileButton;
