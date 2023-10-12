import { FC, useEffect, useState } from "react";

import { useUser } from "../../../logic/queries/useUser";
import { DailyTracking } from "../../../logic/types/DailyTracking";
import {
  getAllTrackings,
  resetTodayLocalStorage,
  useTrackingStorage,
} from "../../../logic/utils/TrackingStorage";
// import SetTimerCard from "../../../components/CommonUI/SetTimerCard";

interface TimeProps {}

const Timer: FC<TimeProps> = () => {
  const user = useUser();
  console.log(user);
  const timer = 1000; // 1 second
  const [now, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, timer);
  }, []);

  const initTracking: DailyTracking = {
    day: new Date(),
    start: now.getTime(),
    end: now.getTime(),
  };

  const [tracking] = useTrackingStorage(initTracking);
  // reset today
  if (localStorage.getItem("resetToday") === "true") {
    tracking.start = now.getTime();
    localStorage.removeItem("resetToday");
  }
  // crossed midnight
  if (
    new Date(tracking.day).toLocaleDateString() !==
    new Date().toLocaleDateString()
  ) {
    tracking.day = new Date();
    tracking.start = now.getTime();
  }
  // update tracking
  if (tracking.end !== now.getTime()) {
    tracking.end = now.getTime();
  }
  // update by custom input
  if (localStorage.getItem("customStart")) {
    tracking.start = parseInt(localStorage.getItem("customStart") || "");
    localStorage.removeItem("customStart");
  }
  const getallTracking = getAllTrackings();
  console.log("getAlltracking", getallTracking);

  const trackingDuration = tracking.end - tracking.start;

  const handleResetToday = () => {
    resetTodayLocalStorage();
  };

  return (
    <>
      <div className="w-full ">
        <div className="flex items-center flex-col h-full">
          <div className="text-lg font-semibold"> Your session duration:</div>
          <div className="text-xl md:text-2xl font-extrabold ">
            {new Date(trackingDuration).toISOString().substr(11, 8)}
          </div>
          <div
            className="bg-gray-300 p-1 px-3 rounded-xl cursor-pointer mt-4 text-lg font-semibold "
            onClick={handleResetToday}
          >
            Reset
          </div>
          {/* <div className="w-full h-52  mt-3 flex justify-center">
            <SetTimerCard title={"Set custom timer"} />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Timer;

{
  /* <div className="text-2xl  md:text-4xl font-extrabold my-12 flex  items-center text-center">
<div className="">
  {" "}
  Time is the only{" "}
  <span className="text-3xl md:text-5xl uppercase">
    currency
  </span>{" "}
  we have.
  <br /> Let's spend it carefully.
</div>{" "}
</div> */
}
