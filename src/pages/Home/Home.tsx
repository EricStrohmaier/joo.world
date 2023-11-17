/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useEffect, useState } from "react";
import LayoutPage from "../../components/LayoutPage";
import FeedNavbar from "../../components/FeedNavbar";
import LayoutCardComponent from "../../components/LayoutCard";
import ActionButton from "../../components/CommonUI/ActionButton";
import { globe } from "../../icons";
import { Dialog, Transition } from "@headlessui/react";
import { useTheme } from "../../logic/theme/useTheme";
import {
  readFollowing,
  readListEvents,
} from "../../logic/contextStore/saveEventInDexie";
import { useNDK } from "@nostr-dev-kit/ndk-react";
import { useCustomLists } from "../../logic/contextStore/getLists";
import { nip19 } from "nostr-tools";
import { useLocalUser } from "../../logic/contextStore/UserContext";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { darkMode } = useTheme();
  const backgroundstyle = darkMode
    ? "bg-primaryDark text-textDark"
    : "bg-primaryLight text-textLight";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [following, setFollowing] = useState<string[] | undefined>(undefined);
  const [listsState, setListsState] = useState<string[] | undefined>(undefined);
  const [listName, setListName] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);
  const [selectedList, setSelectedList] = useState();

  console.log("User Profiles:", userProfiles);
  console.log("Lists State:", listsState);
  console.log("List Name:", listName);
  const { userData } = useLocalUser();
  const { getUser } = useNDK();
  // const hex = nip19.decode("npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc").data.toString();
  const hex = userData?.npub
    ? nip19.decode(userData?.npub).data.toString()
    : "";
  //get all the lists from the user
  useCustomLists(hex);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //@ts-ignore
  const handleListClick = (list) => {
    console.log("List:", list);
    setSelectedList(list);
  };

  //@ts-ignore
  async function getUserProfiles(following) {
    try {
       //@ts-ignore
      const userDataPromises = following?.map((entry) => {
        const user = getUser(entry);
        return user?.profile;
      });

      // Wait for all promises to resolve
      const userData = await Promise.all(userDataPromises);
      if (userData) {
        return userData;
      }
    } catch (error) {
      console.error("Error fetching user profiles:", error);
      throw error;
    }
  }

  //@ts-ignore
  async function getListsState(allListEvents) {
    //@ts-ignore
    const subArrays = allListEvents.map((event) => event.tags);
    //@ts-ignore
    setListsState(subArrays);
    //@ts-ignore
    const filteredData = subArrays.map((subArray) => {
      if (Array.isArray(subArray)) {
        return subArray
          .filter(
            ([tag]) => tag === "title" || tag === "description" || tag === "l"
          )
          .reduce((obj, [tag, value]) => {
            obj[tag as keyof typeof obj] = value;
            return obj;
          }, {} as Record<string, string>);
      } else {
        return {};
      }
    });
    //@ts-ignore
    setListName(filteredData);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const followingData = await readFollowing();
        setFollowing(followingData);

        const allListEvents = await readListEvents();

        // Assuming getUserProfiles returns a Promise
        if (followingData) {
          const resolvedUserProfiles = await getUserProfiles(followingData);
          //@ts-ignore
          setUserProfiles(resolvedUserProfiles);
        }

        if (allListEvents) {
          await getListsState(allListEvents);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function on page load
  },[]); // Empty dependency array ensures that useEffect runs only once when the component mounts

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

      {/* popup module  */}
      <Transition show={isModalOpen}>
        <Dialog onClose={closeModal}>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />

            <div
              className={`${backgroundstyle} z-50 m-5 p-6 rounded-[40px] shadow-xl lg:max-w-[55%] w-full min-h-[60%] h-fit`}
            >
              <div className="w-full">
                <div className="flex justify-center mb-4 text-lg font-medium lg:text-2xl">
                  Choose one of your contact lists to set your feed or create a
                  new list
                </div>
                <div className="text-md">
                  {following ? (
                    <div className="flex flex-col w-full h-full gap-2 ">
                      <div className="flex h-full">
                        <div className="p-3 w-[35%] min-h-full h-full">
                          <div className="flex flex-col gap-2 border-2 border-red-900">
                            {listName?.map((entry, index) => (
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
                                <div>
                                  <p>Title: {entry.title}</p>
                                  <p>Description: {entry.description}</p>
                                  {entry.l ? <p>Category: {entry.l}</p> : null}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="w-full h-full border-2 border-red-900">
                          <div className="p-3">
                            {userProfiles.map((user, index) => (
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
