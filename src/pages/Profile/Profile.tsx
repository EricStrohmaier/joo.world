import { FC, useEffect, useState } from "react";
import LayoutPage from "../../components/LayoutPage";
import { useParams } from "react-router-dom";
import { nip19 } from "nostr-tools";
import Timer from "./components/Time";
import { getMyProfile } from "../../logic/contextStore/Nostr";
import { Metadata } from "../../logic/types/nostr";
import AboutProfile from "./components/AboutProfile";
import { message } from "../../icons";
import { useTheme } from "../../logic/theme/useTheme";
import PersonalFeed from "./components/PersonalFeed";

interface ProfileProps {}

export const ProfileLogic: FC<ProfileProps> = () => {
  const { npub } = useParams();
  const [metadata, setMetadata] = useState<Metadata>({});
  const { darkMode } = useTheme();
    const styleing = darkMode ? "border-textDark " : "border-textLight";

  const hex = npub ? nip19.decode(npub).data.toString() : undefined;

  useEffect(() => {
    const getUserProfile = async () => {
      // getting users metadata potential later more stuff like reviews, list of places etc
      const loadedProfile = await getMyProfile(hex as string)
      setMetadata(loadedProfile)
    }
    getUserProfile()
  }, [hex])
  
  
  return (
    <LayoutPage>
      <div className="w-full h-fit ">
        <div className="-m-6">
          <div className="w-full h-full">
            <img
              className="object-cover w-full h-32 mb-4"
              src={metadata?.banner}
              alt={`${metadata?.displayName}'s banner`}
            />
          </div>

          <AboutProfile
            displayName={metadata?.displayName}
            picture={metadata?.picture}
            about={metadata?.about}
            message={message}
            lud16={metadata?.lud16}
            nip05={metadata?.nip05}
            website={metadata?.website}
          />
          <div className={`border-[0.5px] ${styleing}`}></div>
        </div>
    
        <div className="">
          <Timer />
          <PersonalFeed />
        </div>
    
      </div>
     
    </LayoutPage>
  );
};

// dropdown buttons ?
{
  /* <div className="absolute right-0 z-10 flex flex-col w-56 gap-2 p-2 bg-black border-2 rounded-md shadow-lg border-neutral-500">
  <button className="btn btn-sm">Copy Link</button>
  <button className="btn btn-sm">Copy User ID</button>
  <button className="btn btn-sm">Show QR code</button>
  <button className="btn btn-sm">Copy Raw Data</button>
</div>; */
}
// if (status == "loading") {
//   return (
//     <LayoutPage>
//       <div className="flex items-center justify-center h-full overflow-hidden text-xs shadow-md xl:rounded-xl">
//         <div className="flex items-center justify-center">
//           {" "}
//           <Spinner />
//         </div>
//       </div>
//     </LayoutPage>
//   );
// }
