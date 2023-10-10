import { FC } from "react";
import DisplayFeed from "./components/DisplayFeed";
import LayoutPage from "../../components/LayoutPage";
import FeedNavbar from "./components/FeedNavbar";
import useProfileContacts from "../../logic/queries/useProfileContent";

interface HomeProps {}
const Home: FC<HomeProps> = () => {
  const { contactEvents } = useProfileContacts();
  let profileHex;
  const followernames: string[] = []; // An array to store follower names

  if (contactEvents && contactEvents.length > 0) {
    const sortedContactEvents = contactEvents.sort(
      (a, b) => b.created_at - a.created_at
    );

    const latestContactEvent = sortedContactEvents[0];
    const { tags } = latestContactEvent;

    if (tags && tags.length > 0) {
      tags.forEach((tag) => {
        const [, tagValue] = tag;
        profileHex = tagValue;
        // console.log("profileHex:", profileHex);
        followernames.push(profileHex);
      });
    } else {
      console.log("Tags array is undefined or empty");
    }
  } else {
    // console.log("contactEvents is undefined or empty");
  }

  // You now have an array of follower names
  console.log("Follower Names:", followernames);

  return (
    <>
      <LayoutPage>
        <FeedNavbar />
        <div className="font-bold text-xl flex justify-center">ofocus</div>
        <DisplayFeed />
      </LayoutPage>
    </>
  );
};

export default Home;
