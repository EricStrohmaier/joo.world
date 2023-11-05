import { FC, useEffect, useState } from "react";
import LayoutPage from "../../components/LayoutPage";
import { useParams } from "react-router-dom";
import AboutProfile from "./components/AboutProfile";
import Timer from "./components/Time";
import { message } from "../../icons";
import { useTheme } from "../../logic/theme/useTheme";
// import { usePersonalFeed } from "../../logic/contextStore/PersonalFeedContext";
import PersonalFeed from "./components/PersonalFeed";
import { nip19 } from "nostr-tools";
import { readUserProfile, useSaveUserMetadata } from "../../logic/contextStore/metadataService";
import { Metadata } from "../../logic/types/nostr";

interface ProfileProps {}

export const ProfileLogic: FC<ProfileProps> = () => {
  const { darkMode } = useTheme();
  const styleing = darkMode ? "border-textDark " : "border-textLight";

  const { npub } = useParams();

  const [metadata, setMetadata] = useState<Metadata>({}); // Initialize as null
  
  const hex = npub ? nip19.decode(npub).data.toString() : undefined;

  const saveUserMetadataPromise = useSaveUserMetadata(npub || "");

  useEffect(() => {
    const fetchAndSaveMetadata = async () => {
      try {
        const saveUserMetadata = await saveUserMetadataPromise;
        await saveUserMetadata(hex || "");
        const fetched = await readUserProfile(hex || "");
        setMetadata(fetched as Metadata); 
      } catch (error) {
        console.error("Error fetching user metadata:", error);
      }
    };

    fetchAndSaveMetadata();
  }, [hex, saveUserMetadataPromise]);
 
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
            picture={metadata?.image}
            about={metadata?.about}
            message={message}
            lud16={metadata?.lud16}
            nip05={metadata?.nip05}
            website={metadata?.website}
          />
          <div className={`border-[0.5px] ${styleing}`}></div>
        </div>
    
        <>
          <Timer />
          <PersonalFeed />
        </>
    
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
