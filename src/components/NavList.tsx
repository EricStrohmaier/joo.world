import { FC } from "react";

import Button from "./CommonUI/Button";
import { box, dots, globe, home, login, logout, stack } from "../public";
import { useUser } from "../logic/queries";
import { nip19 } from "nostr-tools";
import { loader } from "../logic/utils";

interface NavListProps {}

const NavList: FC<NavListProps> = () => {
  const navstyle = " hover:bg-gray-200 p-1 px-2";
  const { pubkey, metadata } = useUser();
  console.log("pubkey", pubkey);
  console.log("metadata", metadata);

  return (
    <>
      <div className="min-h-[80vh] h-full flex flex-col justify-between ">
        <div className="space-y-5 flex flex-col items-start">
          <Button imgUrl={home} title="Home" href={"/"} style={navstyle} />
          <Button
            imgUrl={stack}
            title="Workflows"
            href={"/"}
            style={navstyle}
          />
          <Button imgUrl={box} title="Focus" href={"/"} style={navstyle} />
          <Button imgUrl={dots} title="Settings" href={"/"} style={navstyle} />
          <Button
            imgUrl={globe}
            title="Learn stuff"
            href={"/about"}
            style={navstyle}
          />
        </div>
        <div className="space-y-1 flex flex-col items-start">
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
              <Button
                imgUrl={
                  metadata?.picture
                    ? loader(metadata?.picture, {
                        w: 96,
                        h: 96,
                      })
                    : ""
                }
                title={metadata?.displayName}
                // href={`/profile/`}
                style={" hover:bg-gray-300 p-2"}
                href={`/profile/${nip19.npubEncode(pubkey || "")}`}
              />
              <Button
                imgUrl={logout}
                imgStyles={
                  "w-[26px] h-[26px] flex justify-center items-center "
                }
                title="Logout"
                href={"/logout"}
                style={"hover:bg-gray-200 p-1 text-sm"}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavList;
