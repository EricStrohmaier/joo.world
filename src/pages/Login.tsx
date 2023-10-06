import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../logic/queries";
import { useMutateUser } from "../logic/mutations";
import LayoutPage from "../components/LayoutPage";

export const Login = () => {
  const { pubkey } = useUser();
  const { loginWithExtension, loginWithSeckey } = useMutateUser();

  const navigate = useNavigate();
  const seckeyRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (pubkey) {
      navigate(`/`, { replace: true });
      // navigate(`/profile/${pubkey}`, { replace: true });
    }
  }, [pubkey, navigate]);

  return (
    <LayoutPage>
      <div className="flex min-h-full justify-center">
        <div className="flex flex-1 flex-col  items-center px-4 my-12 md:justify-center sm:px-6  lg:px-20 xl:px-24 ">
          <div className="mx-auto w-full max-w-md ">
            <div>
              <h2 className="text-xl md:text-3xl font-bold leading-9 tracking-tight text-gray-900">
                Login to your NOSTR account
              </h2>
              <p className="mt-2 text-sm md:text-lg leading-6 text-gray-500 font-light">
                My <span className="font-bold">WHAT</span> account? learn more
                at{" "}
                <a
                  href="https://nostr.com"
                  className="font-light text-blue-600 hover:text-blue-500 hover:underline"
                >
                  nostr.com
                </a>
              </p>
            </div>

            <div className="mt-20">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="seckey"
                      className="block text-sm md:text-lg font-medium leading-6 text-gray-900"
                    >
                      Your Secret Key
                    </label>
                    <div className="mt-2">
                      <input
                        ref={seckeyRef}
                        id="seckey"
                        name="seckey"
                        type="text"
                        autoComplete="off"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        seckeyRef &&
                        seckeyRef.current &&
                        loginWithSeckey.mutate(seckeyRef.current?.value)
                      }
                      className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm md:text-lg font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-6">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => loginWithExtension.mutate()}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-purple-800 px-3 py-1.5 text-white"
                  >
                    <span className="text-sm md:text-lg font-semibold leading-6">
                      Browser Extension (Recommended)
                    </span>
                  </button>
                </div>

                <p className="mt-4 text-sm md:text-lg leading-6 text-gray-500 font-light">
                  Don't have an extension?{" "}
                  <a
                    href="https://getalby.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group font-light text-blue-600 hover:text-blue-500 hover:underline"
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
