import { FC } from "react";
import ActionButton from "../../../components/CommonUI/ActionButton";
import { settings, stack, globe, dots, watch } from "../../../public";
import { useTheme, useTime } from "../../../logic/queries/useTheme";

interface FeedNavbarProps {}

const FeedNavbar: FC<FeedNavbarProps> = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { currentTime } = useTime() || {};

  return (
    <div
      className="w-[90%] mx-auto my-5 mt-7"
      style={{
        position: "sticky", // Make the nav sticky to the top
        top: 0,
        zIndex: 999,
      }}
    >
      <div className="flex justify-between w-full ">
        <ActionButton
          title={"Current time"}
          titleVisible={`${currentTime}`}
          svg={watch}
          style={
            "px-2 pointer-event-none  hover:shadow-none shadow-none flex justify-center items-center text-md font-semibold"
          }
          textStyle={"ml-[5px]"}
        />
        <button onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <div className="flex space-x-1 lg:space-x-3">
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
