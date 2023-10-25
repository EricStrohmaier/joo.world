import { FC, useEffect, useState } from "react";
import { DailyTracking } from "../../../logic/types/DailyTracking";
import { getAllTrackings, resetTodayLocalStorage, useTrackingStorage } from "../../../logic/utils/TrackingStorage";


interface TimeProps {}

const Timer: FC<TimeProps> = () => {
  
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
  // console.log("getAlltracking", getallTracking);

  const trackingDuration = tracking.end - tracking.start;

  const handleResetToday = () => {
    resetTodayLocalStorage();
  };

  return (
    <>
      <div className="w-full ">
        <div className="flex flex-col items-center h-full">
          <div className="text-lg font-semibold"> Your session duration:</div>
          <div className="text-xl font-extrabold md:text-2xl ">
            {new Date(trackingDuration).toISOString().substr(11, 8)}
          </div>
          <div
            className="p-1 px-3 mt-4 text-lg font-semibold bg-gray-300 cursor-pointer rounded-xl "
            onClick={handleResetToday}
          >
            Reset
          </div>
          {/* <div className="flex justify-center w-full mt-3 h-52">
            <SetTimerCard title={"Set custom timer"} />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Timer;

{
  /* <div className="flex items-center my-12 text-2xl font-extrabold text-center md:text-4xl">
<div className="">
  {" "}
  Time is the only{" "}
  <span className="text-3xl uppercase md:text-5xl">
    currency
  </span>{" "}
  we have.
  <br /> Let's spend it carefully.
</div>{" "}
</div> */
}
