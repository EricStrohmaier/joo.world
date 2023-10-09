import { FC } from "react";
import DisplayFeed from "./components/DisplayFeed";
import LayoutPage from "../../components/LayoutPage";
import FeedNavbar from "./components/FeedNavbar";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <LayoutPage>
        <FeedNavbar />
        <div className="font-bold text-xl ">ofocus</div>
        <DisplayFeed />
      </LayoutPage>
    </>
  );
};

export default Home;
