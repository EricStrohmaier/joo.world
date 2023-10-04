import { FC } from "react";
import DisplayFeed from "../components/DisplayFeed";
import LayoutPage from "../components/LayoutPage";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <LayoutPage>
        <DisplayFeed />
      </LayoutPage>
    </>
  );
};

export default Home;
