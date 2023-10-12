import { FC } from "react";

import Button from "./CommonUI/Button";
import { box, globe, home, login, logout, stack } from "../public";
import { useUser } from "../logic/queries";
import { nip19 } from "nostr-tools";
import { loader } from "../logic/utils";
// import { getCurrentTimeIn24HourFormat } from "../logic/utils/helperFunctions";

interface NavListProps {}

const NavList: FC<NavListProps> = () => {
  const navstyle = " hover:bg-gray-200 p-1 px-2";
  const { pubkey, metadata } = useUser();
  const npub = pubkey ? nip19.npubEncode(pubkey) : "#";
  // const [currentTime, setCurrentTime] = useState<string>("");

  // useEffect(() => {
  //   // Update the current time every second
  //   const intervalId = setInterval(() => {
  //     const formattedTime = getCurrentTimeIn24HourFormat();
  //     setCurrentTime(formattedTime);
  //   }, 1000);

  //   // Clear the interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <>
      <div className="min-h-[80vh] h-full flex flex-col justify-between mb-12 my-5 mt-7">
        <div className=" flex flex-col items-start">
          {/* <div className="w-full">
            <div
              className={`flex justify-start items-center rounded-[10px] transition duration-100 px-2 `}
            >
              <div className="w-[34px] hidden lg:flex h-[34px] lg:mr-2 rounded-[10px]  justify-center items-center">
                {" "}
                <img
                  src={watch}
                  className={`w-full h-full overflow-hidden rounded-[8px]`}
                />
              </div>
              <div className="text-md font-bold h-fit w-fit justify-center items-center text-center">
                <div>{`${currentTime}`}</div>
              </div>
            </div>
          </div> */}
          <div className="space-y-5 my-9">
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
                style={" hover:bg-gray-300 p-2"}
                href={`/p/${npub}`}
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
