import { FC } from "react";

import Button from "./CommonUI/Button";
import { globe, home, login, logout, stack } from "../public";
import { useUser } from "../logic/queries";
import { nip19 } from "nostr-tools";
import { loader } from "../logic/utils";
import { Link } from "react-router-dom";

interface NavListProps {}

const NavList: FC<NavListProps> = () => {
  const navstyle = "p-1 px-2 hover:opacity-75";
  const { pubkey, metadata } = useUser();
  const npub = pubkey ? nip19.npubEncode(pubkey) : "#";

  return (
    <>
      <div className="min-h-[80vh] h-full flex flex-col justify-between my-12">
        <div className="flex flex-col items-start space-y-5">
          <Button imgUrl={home} title="Home" href={"/"} style={navstyle} />
          <Button
            imgUrl={stack}
            title="Workflows"
            href={"/workflows"}
            style={navstyle}
          />
          {/* <Button
            imgUrl={stack}
            title="Create"
            href={"/workflows/create"}
            style={navstyle}
          /> */}
          {/* <Button imgUrl={box} title="Focus" href={"/"} style={navstyle} /> */}
          <Button
            imgUrl={globe}
            title="What is this?"
            href={"/about"}
            style={navstyle}
          />
        </div>
        <div className="flex flex-col items-start space-y-1">
          {" "}
          {!pubkey ? (
            <Button
              imgUrl={login}
              title="Login"
              href={"/login"}
              style={navstyle}
            />
          ) : (
            <>
              <div className="w-full">
                <Link to={`/p/${npub}`} className="">
                  <div
                    className={`flex justify-start items-center rounded-[10px] transition duration-100 hover:opacity-75 p-1`}
                  >
                    <div className="w-[40px] h-[40px] lg:mr-2 rounded-[10px] flex justify-center items-center">
                      {" "}
                      <img
                        src={
                          metadata?.picture
                            ? loader(metadata?.picture, {
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
