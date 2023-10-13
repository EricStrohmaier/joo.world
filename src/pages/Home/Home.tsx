import { FC } from "react";
// import DisplayFeed from "./components/DisplayFeed";
import LayoutPage from "../../components/LayoutPage";
import FeedNavbar from "./components/FeedNavbar";
import LayoutCard from "../../components/LayoutCard";
import { Link } from "react-router-dom";
import { useUser } from "../../logic/queries";
import DisplayFeed from "./components/DisplayFeed";

interface HomeProps {}
const Home: FC<HomeProps> = () => {
  const { pubkey } = useUser();

  if (pubkey === "") {
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
          <div className="w-full ">
            <div className="flex flex-col items-center">
              <div className="text-6xl font-extrabold">joooo Lets gooo!</div>
              <div className="text-2xl font-extrabold mb-9">
                This is the anti-social media app.
              </div>
              <DisplayFeed />
            </div>
          </div>
        </LayoutCard>
      </LayoutPage>
    </>
  );
};

export default Home;
