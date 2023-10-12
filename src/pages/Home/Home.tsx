import { FC } from "react";
// import DisplayFeed from "./components/DisplayFeed";
import LayoutPage from "../../components/LayoutPage";
import FeedNavbar from "./components/FeedNavbar";
import LayoutCard from "../../components/LayoutCard";
import { Link } from "react-router-dom";
import { useUser } from "../../logic/queries";

interface HomeProps {}
const Home: FC<HomeProps> = () => {
  const { pubkey } = useUser();

  if (pubkey === "") {
    return (
      <LayoutPage>
        <FeedNavbar />

        <LayoutCard>
          <div className="w-full relative bottom-10">
            <div className="flex items-center flex-col">
              <div className="text-6xl font-extrabold">joooo Welcome!</div>
              <div className="text-2xl font-extrabold mb-20">
                This is an anti-social media app.
              </div>
              <div className="text-base font-base flex flex-col">
                <div>
                  Unplug from the noise, yet stay connected with the world
                  through <span className="font-extrabold text-xl">Nostr.</span>{" "}
                </div>
                <div>
                  Here you'll find less distraction, more focus on productivity
                  and creativity.
                </div>
                <div className="mt-16 flex  justify-center text-blue-500 underline underline-offset-1">
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
          <div className="w-full relative bottom-10">
            <div className="flex items-center flex-col">
              <div className="text-6xl font-extrabold">joooo Lets gooo!</div>
              <div className="text-2xl font-extrabold mb-20">
                This is the anti-social media app.
              </div>
              <div className="text-base font-base flex flex-col"></div>
            </div>
          </div>
        </LayoutCard>
      </LayoutPage>
    </>
  );
};

export default Home;
