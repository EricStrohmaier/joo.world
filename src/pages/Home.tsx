import { FC } from "react";
import DisplayFeed from "../components/DisplayFeed";
import LayoutPage from "../components/LayoutPage";
import FeedNavbar from "../components/FeedNavbar";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <LayoutPage>
        <FeedNavbar />
        <DisplayFeed />
      </LayoutPage>
    </>
  );
};

export default Home;
