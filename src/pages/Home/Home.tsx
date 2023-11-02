import { FC } from "react";
import LayoutPage from "../../components/LayoutPage";
import FeedNavbar from "./components/FeedNavbar";
import { useUser } from "../../logic/contextStore/UserContext";
import WorkflowCard from "../Workflow/components/WorkflowCard";
import OneTask from "./components/OneTask";
import Login from "../Login/components/Login";
// import { useNDK } from "@nostr-dev-kit/ndk-react";

interface HomeProps {}
const Home: FC<HomeProps> = () => {
   const { userData } = useUser();
  // const { getProfile } = useNDK();
  // const metadata = getProfile(userData?.npub || "");

  if (userData === null) {
    return (
      <LayoutPage>
        <FeedNavbar />

        <div className="w-full ">
          <div className="flex flex-col items-center">
            <div className="text-6xl font-extrabold">joooo Welcome!</div>
            <div className="mb-20 text-2xl font-extrabold">
              This is an anti-social media app.
            </div>
            <div className="flex flex-col text-base font-base">
              <div>
                Unplug from the noise, yet stay connected with the world through{" "}
                <span className="text-xl font-extrabold">Nostr.</span>{" "}
              </div>
              <div>
                Here you'll find less distraction, more focus on productivity
                and creativity.
              </div>
              <Login />
            </div>
          </div>
        </div>
      </LayoutPage>
    );
  }

  return (
    <>
      <LayoutPage>
        <FeedNavbar />

        <div className="flex flex-col items-center w-full">
          {/* <div className="text-6xl font-extrabold">Hello {metadata.name}</div> */}
          <div className="mb-5 text-2xl font-extrabold">
          Focus, is Success
          </div>
          <WorkflowCard>
            <div className="flex items-center justify-center w-full h-96">
              <OneTask />
            </div>
          </WorkflowCard>{" "}
        </div>
      </LayoutPage>
    </>
  );
};

export default Home;
