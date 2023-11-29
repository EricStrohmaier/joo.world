
import LayoutPage from "../../components/LayoutPage";
import Login from "./components/Login";

export const LoginPage = () => {


  return (
    <LayoutPage>
      <div className="flex justify-center min-h-full">
        <div className="flex flex-col items-center flex-1 px-4 my-12 md:justify-center sm:px-6 lg:px-20 xl:px-24">
          <div className="w-full max-w-md mx-auto">
            <div>
              <h2 className="text-xl font-bold leading-9 tracking-tight md:text-3xl">
                Login to your NOSTR account
              </h2>
              <p className="mt-2 text-sm font-light leading-6 text-opacity-80 md:text-lg">
                My <span className="font-bold">WHAT</span> account? Learn more
                at{" "}
                <a
                  href="https://nostr.com"
                  className="font-light text-blue-600 hover:text-blue-500 hover:underline"
                >
                  nostr.com
                </a>
              </p>
            </div>
            <Login />
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default LoginPage;
