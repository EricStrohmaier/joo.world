import { FC, useEffect, useState } from "react";
import LayoutPage from "../../components/LayoutPage";
import FeedNavbar from "./components/FeedNavbar";
import LayoutCard from "../../components/LayoutCard";
import { Link } from "react-router-dom";
import { useUser } from "../../logic/contextStore/UserContext";
import WorkflowCard from "../Workflow/components/WorkflowCard";
import { useNDK } from "@nostr-dev-kit/ndk-react";
import { nip19 } from "nostr-tools";
import ProfileCard from "../../components/CommonUI/ProfileCard";

interface HomeProps {}
const Home: FC<HomeProps> = () => {
  const { userData } = useUser();
  const { fetchEvents, getUser } = useNDK();
  const npub = userData?.npub;
  const hex = npub ? nip19.decode(npub).data.toString() : undefined;
  const [personalHomefeed, setPersonalFeedData] = useState([]);

  const fetchHomeFeedData = async (hex: string | undefined) => {
    //@ts-ignore
    const followers = await getUser(hex).follows();
    const eventFollower = [...followers];
    const npubFollowers = eventFollower.map((entry) => entry.npub); // Extract npub values as an array of strings
    
    // Convert each npubFollower to its hexKey equivalent
    const authors = npubFollowers.map((npubFollower) => {
      const hexKey = nip19.decode(npubFollower).data.toString();
      return hexKey;
    });

    // console.log("followers", authors);

    if (authors) {
      const filter = {
        kinds: [1],
        authors: authors, // Use the array of authors here
        limit: 20,
      };

      try {
        const events = await fetchEvents(filter);
        const eventArray = [...events];
        console.log("eventArray", events);
        const personalFeed = eventArray.map((entry) => ({
          content: entry.content,
          tags: entry.tags,
          createdAt: entry.created_at,
          id: entry.id,
          pubkey: entry.pubkey,
          url: entry.relay?.url,
        }));
        
        //@ts-ignore
        setPersonalFeedData(personalFeed);
        console.log("Main Feed data:", personalFeed);

      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
  };
  useEffect(() => {
    // Check if data has already been fetched
    if (!personalHomefeed.find((item) => item) && !personalHomefeed.length) {
      fetchHomeFeedData(hex);
    }
  }, [hex, personalHomefeed]);


  if (userData === null) {
    return (
      <LayoutPage>
        <FeedNavbar />

        <LayoutCard>
          <div className="w-full ">
            <div className="flex flex-col items-center">
              <div className="text-6xl font-extrabold">joooo Welcome!</div>
              <div className="mb-20 text-2xl font-extrabold">
                This is an anti-social media app.
              </div>
              <div className="flex flex-col text-base font-base">
                <div>
                  Unplug from the noise, yet stay connected with the world
                  through <span className="text-xl font-extrabold">Nostr.</span>{" "}
                </div>
                <div>
                  Here you'll find less distraction, more focus on productivity
                  and creativity.
                </div>
                <div className="flex justify-center mt-16 text-blue-500 underline underline-offset-1">
                  <Link to={"/login"}> Login to get started!</Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </LayoutCard>
      </LayoutPage>
    );
  }

  return (
    <>
      <LayoutPage>
        <FeedNavbar />

        <LayoutCard>
          <div className="flex flex-col items-center w-full">
            <div className="text-6xl font-extrabold">joooo Lets gooo!</div>
            <div className="text-2xl font-extrabold mb-9">
              This is the anti-social media app.
            </div>
            <WorkflowCard>
              <ProfileCard
              //@ts-ignore
              postContent={personalHomefeed.content}
              />
            </WorkflowCard>{" "}
          </div>
        </LayoutCard>
      </LayoutPage>
    </>
  );
};

export default Home;
