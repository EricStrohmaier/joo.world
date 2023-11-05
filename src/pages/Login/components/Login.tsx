/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNDK } from "@nostr-dev-kit/ndk-react";
import { useLocalUser } from "../../../logic/contextStore/UserContext";

export const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { loginWithNip07 , getProfile} = useNDK();
  const { setLocalUser , setMetadata} = useLocalUser();


  async function initializeNDK() {
    setIsLoading(true);
    const user = await loginWithNip07();

    if (user) {
      setLocalUser({ npub: user.npub });
      const metadata = getProfile(user.npub || "");
      setMetadata(metadata)
    }
    setIsLoading(false);
    navigate("/");
  }


  return (
    <>
      <div className="mt-12">
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
    </>
  );
};

export default Login;
