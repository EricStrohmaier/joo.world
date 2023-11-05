import React, { FC } from "react";
import NavList from "./NavList";
import { useTheme } from "../logic/theme/useTheme";
// import { usePersonalFeed } from "../logic/contextStore/PersonalFeedContext";
// import { useLocalUser } from "../logic/contextStore/UserContext";
// import { nip19 } from "nostr-tools";
// import { useSaveUserMetadata } from "../logic/contextStore/metadataService";


interface LayoutProps {
  children: React.ReactNode;
  toggleDarkMode?: () => void;
}

const LayoutPage: FC<LayoutProps> = ({ children }) => {
  const { darkMode } = useTheme(); // Access darkMode using the useTheme hook
  const layoutStyles = darkMode
    ? "bg-backgroundDark text-textDark "
    : "bg-backgroundLight text-textLight ";
  const darkStyle = darkMode
    ? "bg-primaryDark border-textDark"
    : "border-textLight bg-primaryLight";

  // const { userData } = useLocalUser();
  // const npub = userData?.npub;
  // const hex = npub ? nip19.decode(npub).data.toString() : undefined;

  // const saveUserMetadataPromise = useSaveUserMetadata(npub || "");

  // useEffect(() => {
  //   // Use 'await' to call the !!promise-returning function!!
  //   const saveUserMetadata = async () => {
  //     const saveMetadataFunction = await saveUserMetadataPromise;
  //     await saveMetadataFunction(hex || "");
  //   };

  //   saveUserMetadata(); 
  // },); 

  // const fetchPersonalFeedData = async (hex: string | undefined) => {
  //   if (hex) {
  //     const filter = {
  //       kinds: [1],
  //       authors: [hex],
  //       limit: 20,
  //     };

  //     try {
  //       const events = await fetchEvents(filter);
  //       const eventArray = [...events];
  //       //console.log("eventArray", events);
  //       const personalFeed = eventArray.map((entry) => ({
  //         content: entry.content,
  //         tags: entry.tags,
  //         createdAt: entry.created_at,
  //         id: entry.id,
  //         pubkey: entry.pubkey,
  //         url: entry.relay?.url,
  //       }));

  //       // console.log("Fetched data:", personalFeed);
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       //@ts-ignore
  //       setPersonalFeedData(personalFeed);
  //     } catch (err) {
  //       console.error("Error fetching data:", err);
  //     }
  //   }
  // };

  //  useEffect(() => {

  //   // fetchPersonalFeedData(hex);

  //   // Set up a periodic data refresh using setInterval
  //   // const refreshInterval = 60000; // Refresh every 60 seconds (adjust as needed)
  //   // const intervalId = setInterval(() => {
  //   //   fetchPersonalFeedData(hex);
  //   // }, refreshInterval);

  //   // Clean up the interval when the component unmounts
  //   // return () => {
  //   //   clearInterval(intervalId);
  //   // };
  // }, [hex]);

  return (
    <div
      className={`h-full min-h-screen  w-full flex items-center justify-center ${layoutStyles}`}
    >
      <div
        className={`flex items-center justify-center min-h-[90%] h-full w-full ${layoutStyles}`}
      >
        <div
          className={`flex mx-3 my-6 max-w-7xl h-full w-full rounded-[40px] overflow-hidden ${darkStyle}`}
        >
          <div className={`border-r-[1px] lg:w-1/5 ${darkStyle}`}>
            <div className="flex flex-col items-center justify-center h-full mx-1 lg:mx-0 lg:w-full">
              <NavList />
            </div>
            <div
              className={`border-[0.5px] w-full relative bottom-11 ${darkStyle}`}
            ></div>
          </div>
          <div className="flex-col w-full">
            <div className="flex justify-center w-full h-full">
              <div className="w-full h-full m-6 ">{children}</div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default LayoutPage;
