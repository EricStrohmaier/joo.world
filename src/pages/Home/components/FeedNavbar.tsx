import { FC, useEffect, useState } from "react";
import ActionButton from "../../../components/CommonUI/ActionButton";
import { settings, stack, globe, dots, watch } from "../../../public";
import { getCurrentTimeIn24HourFormat } from "../../../logic/utils/helperFunctions";

interface FeedNavbarProps {}

const FeedNavbar: FC<FeedNavbarProps> = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      const formattedTime = getCurrentTimeIn24HourFormat();
      setCurrentTime(formattedTime);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="w-[90%] mx-auto my-5 mt-7"
      style={{
        position: "sticky", // Make the container sticky
        top: 0, // Stick to the top of the LayoutCard
        zIndex: 999, // Ensure it's above other content
      }}
    >
      <div className="w-full flex justify-between">
        <ActionButton
          title={"Current time"}
          titleVisible={`${currentTime}`}
          svg={watch}
          style={
            "px-2 pointer-event-none bg-gray-50 hover:shadow-none shadow-none flex justify-center items-center text-md font-semibold"
          }
          textStyle={"ml-[5px]"}
        />
        {/* <div>
          <p>Your session duration: {sessionDuration} seconds</p>
        </div> */}
        <div className="flex lg:space-x-3 space-x-1">
          <ActionButton svg={settings} />
          <ActionButton svg={stack} />
          <ActionButton svg={globe} />
          <ActionButton svg={dots} />
        </div>
      </div>
    </div>
  );
};

export default FeedNavbar;
