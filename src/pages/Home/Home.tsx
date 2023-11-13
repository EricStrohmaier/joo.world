/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useEffect, useState } from "react";
import LayoutPage from "../../components/LayoutPage";
import FeedNavbar from "../../components/FeedNavbar";
import { useLocalUser } from "../../logic/contextStore/UserContext";
import { nip19 } from "nostr-tools";
import { useCustomLists } from "../../logic/contextStore/getLists";
import { useNDK } from "@nostr-dev-kit/ndk-react";
// import { GetCustomFeed } from "../../logic/contextStore/getCustomFeed";
import LayoutCardComponent from "../../components/LayoutCard";
import ActionButton from "../../components/CommonUI/ActionButton";
import { globe } from "../../icons";
import { Dialog, Transition } from "@headlessui/react";
import { useTheme } from "../../logic/theme/useTheme";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { darkMode } = useTheme();
  const backgroundstyle = darkMode
    ? "bg-primaryDark text-textDark"
    : "bg-primaryLight text-textLight";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [following, setFollowing] = useState<string[] | undefined>(undefined);
  const [customListsState, setCustomListsState] = useState<string[] | undefined>(undefined);

  const [selectedList, setSelectedList] = useState();

  const { userData } = useLocalUser();
  // const hex = nip19.decode("npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc").data.toString();
  const hex = userData?.npub
    ? nip19.decode(userData?.npub).data.toString()
    : undefined;

    useCustomLists(hex || "");
  // const { fetchEvents, getUser } = useNDK();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  //@ts-ignore
  const handleListClick = (list) => {
    setSelectedList(list);
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await promise;

  //       const userDataPromises = result?.followingHexKeys?.map(
  //         async (entry) => {
  //           const user = getUser(entry);
  //           return user?.profile;
  //         }
  //       );
  //       if (userDataPromises) {
  //         const userData = await Promise.all(userDataPromises);

  //         //@ts-ignore
  //         setFollowing(userData);
  //       }

  //       const customLists = result?.filterdListEvents;

  //       if (customLists) {
  //         //@ts-ignore
  //         setCustomListsState(customLists);
  //       }
  //       // console.log("customLists", customListsState);

        
  //       // result?.filterdListEvents?.forEach(async (entry) => {
  //       //   const result = await GetCustomFeed(entry?.p, fetchEvents);
  //       //   console.log(`${entry?.title} feed result`, result);
  //       // });
        
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };
  //   fetchData();
  // }, [customListsState, fetchEvents, getUser, promise, userData]);

  // if (userData === null) {
  return (
    <LayoutPage>
      <FeedNavbar>
        <ActionButton title={`Edit feed`} svg={globe} onClick={openModal} />
      </FeedNavbar>
      <div className="flex flex-col items-center w-full">
        <LayoutCardComponent>
          <div className="flex justify-center w-full h-96">
            <div className="my-5 text-2xl font-extrabold">
              Focusing leads to Success
            </div>
          </div>
        </LayoutCardComponent>{" "}
      </div>

      <Transition show={isModalOpen}>
        <Dialog onClose={closeModal}>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />

            <div
              className={`${backgroundstyle} z-50 p-6 rounded-[40px] shadow-xl lg:max-w-[55%] w-full min-h-[60%] h-fit`}
            >
              <div className="w-full">
                {" "}
                <div className="mb-4 text-lg font-medium">
                  {userData
                    ? "Choose one of your contact lists here or create a new one"
                    : "Editing your feed with custom user lists"}
                </div>
                <div className="text-md">
                  {following ? (
                    <div className="flex flex-col w-full h-full gap-2">
                      <div className="flex h-full">
                        <div className="p-3 w-[25%] min-h-full ">
                          <div className="h-full">
                           
                              <div className="flex flex-col gap-2">
                                {customListsState?.map((entry, index) => (
                                  <div
                                    key={index}
                                    className={`flex items-center gap-2 ${
                                      selectedList === entry
                                        ? "border-2 border-blue-500"
                                        : ""
                                    }`}
                                    onClick={() => handleListClick(entry)}
                                  >
                                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                                    <div>{entry.title}</div>
                                  </div>
                                ))}
                              </div>
                            
                          </div>
                        </div>

                        <div className="w-full h-full">
                          <div className="p-3">
                            {following.map((user, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2"
                              >
                                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                                <div>{user?.name}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>Loading</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </LayoutPage>
  );
};

export default Home;
