import { FC } from "react";

import Button from "./CommonUI/Button";
import { box, globe, home, login, logout, stack } from "../public";
import { useUser } from "../logic/queries";
import { nip19 } from "nostr-tools";
import { loader } from "../logic/utils";

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
          <Button
            imgUrl={stack}
            title="Create"
            href={"/workflows/create"}
            style={navstyle}
          />
          <Button imgUrl={box} title="Focus" href={"/"} style={navstyle} />
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
                style={"hover:opacity-75 p-2"}
                href={`/p/${npub}`}
              />
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
