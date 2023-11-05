import { FC, useState } from "react";
import ActionButton from "../../../components/CommonUI/ActionButton";
import { Dialog, Transition } from "@headlessui/react";
import ShowRelays from "../../../components/CommonUI/ShowRelays";
import { useTheme, useTime } from "../../../logic/theme/useTheme";
import { moon, server, sun, watch } from "../../../icons";
import { useLocalUser } from "../../../logic/contextStore/UserContext";

interface FeedNavbarProps {}

const FeedNavbar: FC<FeedNavbarProps> = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { currentTime } = useTime() || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userData } = useLocalUser();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  //dynamic relay list???
  const relay = <ShowRelays />;

  return (
    <div
      className="w-[90%] mx-auto my-5 mt-7"
      style={{
        position: "sticky", // Make the nav sticky to the top
        top: 0,
        zIndex: 40,
      }}
    >
      <div className="flex justify-between w-full ">
        <div
          className={`flex justify-center px-2 items-center text-md font-semibold hover:shadow-md border-2 rounded-[70px] w-fit p-1 shadow-md transition duration-0 `}
        >
          <img
            src={watch}
            className="max-w-6 max-h-6"
            style={darkMode ? { filter: "invert(1)" } : {}}
          />

          <p className={`text-sm ml-[5px]`}> {`${currentTime}`}</p>
        </div>

        <div className="flex space-x-1 lg:space-x-3">
          <ActionButton
            title={`Show connected relay's`}
            svg={server}
            onClick={openModal}
          />
          <ActionButton
            title="Toggle Theme"
            {...(darkMode ? { svg: sun } : { svg: moon })}
            onClick={toggleDarkMode}
          />
        </div>
      </div>

      <Transition show={isModalOpen}>
        <Dialog onClose={closeModal}>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

            <div className="z-50 w-4/5 max-w-md p-6 bg-gray-100 rounded-lg shadow-xl lg:w-full">
              <Dialog.Title className="mb-4 text-lg font-medium">
                {userData
                  ? "You are connected with these relays"
                  : "Connected to Relay's"}
              </Dialog.Title>

              <div className="text-sm text-gray-500">{relay}</div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default FeedNavbar;
