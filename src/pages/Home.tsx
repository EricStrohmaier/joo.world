import { FC } from "react";
import LayoutPage from "../components/LayoutPage";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <LayoutPage>
        <div className="m-5 flex justify-center">Home page</div>
      </LayoutPage>
    </>
  );
};

export default Home;
