import { useEffect, useState } from "react";
import { useUser } from ".";

const useProfileHex = () => {
  const [profileHex, setProfileHex] = useState<string>("");
  const hex = useUser().pubkey;
  useEffect(() => {
    const setHex = (hex: string | undefined) => {
      if (hex) {
        setProfileHex(hex);
      }
    };
    setHex(hex);
  }, [hex]);

  return profileHex;
};

export default useProfileHex;
