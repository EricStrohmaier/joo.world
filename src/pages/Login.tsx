import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutPage from "../components/LayoutPage";
 import { useUser } from "../logic/contextStore/UserContext";
import { useNDK } from "@nostr-dev-kit/ndk-react";

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { loginWithNip07 } = useNDK();
  const { setUser } = useUser();

  async function initializeNDK() {
    setIsLoading(true);
    const user = await loginWithNip07();

    if (user) {
      setUser({ npub: user.npub });
    }
    setIsLoading(false);
    navigate("/");
  }

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

            <div className="mt-12">
              <div className="">
                <div className="">
                  <button
                    type="button"
                    onClick={() => initializeNDK()}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-purple-800 px-3 py-1.5 text-white"
                    disabled={isLoading}
                  >
                    <span className="text-sm font-semibold leading-6 md:text-lg">
                      {isLoading ? "Loading..." : "Browser Extension"}
                    </span>
                  </button>
                </div>

                <p className="mt-4 text-sm font-light leading-6 text-opacity-80 md:text-lg">
                  Don't have an extension?{" "}
                  <a
                    href="https://getalby.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-light text-blue-600 group hover:text-blue-500 hover:underline"
                  >
                    Get yours from Alby
                    <span> &rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};

export default Login;
