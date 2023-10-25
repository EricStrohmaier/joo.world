import { FC } from "react";
import LayoutPage from "../../components/LayoutPage";
import { useParams } from "react-router-dom";
import { nip19 } from "nostr-tools";
import AboutProfile from "./components/AboutProfile";
import Timer from "./components/Time";
import { useNDK } from "@nostr-dev-kit/ndk-react";
import { message } from "../../icons";

interface ProfileProps {}

export const ProfileLogic: FC<ProfileProps> = () => {
  const { npub } = useParams();

  const hex = npub ? nip19.decode(npub).data.toString() : undefined;
  const { getProfile } = useNDK();
  const metadata = getProfile(hex || '');

  return (
    <LayoutPage>
      <div className="max-w-full h-fit ">
        {" "}
        <div className="w-full h-full border-black">
          <img
            className="object-cover w-full h-32 mb-4"
            src={metadata.banner}
            alt={`${metadata.displayName}'s banner`}
          />
        </div>
        <div>
          <AboutProfile
            displayName={metadata.displayName}
            picture={metadata.image}
            about={metadata.about}
            message={message}
            lud16={metadata.lud16}
            nip05={metadata.nip05}
            website={metadata.website}
          />
          <div className="border-[0.5px]"></div>
        </div>
        <div className="flex flex-col justify-end ">
          <Timer />
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