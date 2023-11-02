import { FC } from "react";

import Button from "./CommonUI/Button";
import { globe, home, login, logout, stack } from "../icons";
import { useUser } from "../logic/contextStore/UserContext";
import { Link } from "react-router-dom";
import { useNDK } from "@nostr-dev-kit/ndk-react";
import { loader } from "../logic/utils/loader";
// import { dexieAdapter } from "../logic/contextStore/NdkStore";
// import { nip19 } from "nostr-tools";

interface NavListProps {}

const NavList: FC<NavListProps> = () => {
  const navstyle = "p-1 px-2 hover:opacity-75";

  const { userData } = useUser();
  //  const hex = userData?.npub ? nip19.decode(userData?.npub).data.toString() : undefined;
  
  const { getProfile } = useNDK();
  const metadata = getProfile(userData?.npub || "");
  
  // dexieAdapter
  
  // if (ndkInstance.cacheAdapter) {
  //   const cacheAdapter = ndkInstance.cacheAdapter;

  //   try {
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //     //@ts-ignore
  //     cacheAdapter.fetchProfile(hex).then((profile) => {
  //       console.log("Profile fetched from cache:", profile);
  //     });
  //   } catch (error) {
  //     console.error("Error storing user metadata:", error);
  //   }
  // } else {
  //   console.error("ndkInstance.cacheAdapter is undefined");
  // }

  return (
    <>
      <div className="min-h-[80vh] h-full flex flex-col justify-between my-12">
        <div className="flex flex-col items-start space-y-5">
          <Button
            imgUrl={home}
            title="Home"
            href={"/"}
            style={`${navstyle} `}
          />
          <Button
            imgUrl={stack}
            title="Workflows"
            href={"/workflows"}
            style={`${navstyle} `}
          />
          <Button
            imgUrl={globe}
            title="What is this?"
            href={"/about"}
            style={navstyle}
          />
        </div>
        <div className="flex flex-col items-start space-y-1">
          {" "}
          {userData === null ? (
            <Button
              imgUrl={login}
              title="Login"
              href={"/login"}
              style={navstyle}
            />
          ) : (
            <>
              <div className="w-full">
                <Link to={`/p/${userData?.npub}`} className="">
                  <div
                    className={`flex justify-start items-center rounded-[10px] transition duration-100 hover:opacity-75 p-1`}
                  >
                    <div className="w-[40px] h-[40px] lg:mr-2 rounded-[10px] flex justify-center items-center">
                      {" "}
                      <img
                        src={
                          metadata?.image
                            ? loader(metadata?.image, {
                                w: 96,
                                h: 96,
                              })
                            : ""
                        }
                        className={`w-full h-full overflow-hidden rounded-[8px] z-0 `}
                      />
                    </div>

                    <div className="items-center justify-center hidden font-bold text-center text-md h-fit w-fit lg:flex">
                      <div>{metadata?.displayName}</div>
                    </div>
                  </div>
                </Link>
              </div>
              <Button
                imgUrl={logout}
                imgStyles={
                  "w-[26px] h-[26px] flex justify-center items-center "
                }
                title="Logout"
                href={"/logout"}
                style={"hover:opacity-75 p-1 text-sm"}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavList;
