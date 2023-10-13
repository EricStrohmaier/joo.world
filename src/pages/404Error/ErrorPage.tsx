import { FC } from "react";
import LayoutCard from "../../components/LayoutCard";
import LayoutPage from "../../components/LayoutPage";

interface ErrorProps {}

const ErrorPage: FC<ErrorProps> = () => {
  return (
    <>
      <LayoutPage>
        <LayoutCard>
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-6xl font-extrabold">404 Error</div>
              <div className="text-2xl font-extrabold mb-9">
                This page doesn't exist.
              </div>
              <div className="text-center">
                There is a lot under development, and new features are coming.
              </div>
            </div>
          </div>
        </LayoutCard>
      </LayoutPage>
    </>
  );
};

export default ErrorPage;
