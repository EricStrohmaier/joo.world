/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useEffect, useState } from "react";
import LayoutPage from "../../components/LayoutPage";
import FeedNavbar from "../../components/FeedNavbar";
import LayoutCardComponent from "../../components/LayoutCard";
import { Dialog, Transition } from "@headlessui/react";
import { useTheme } from "../../logic/theme/useTheme";
import {
  readFollowing,
  readListEvents,
} from "../../logic/contextStore/saveEventInDexie";
import { useNDK } from "@nostr-dev-kit/ndk-react";
import { useCustomLists } from "../../logic/contextStore/getLists";
import { Event, nip19 } from "nostr-tools";
import { useLocalUser } from "../../logic/contextStore/UserContext";
import { getAllFeedSinceYesterday } from "../../logic/contextStore/Nostr";
import MyEvent from "../../components/Event";
import ListOfFollowers from "./components/ListOfFollowers";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const { darkMode } = useTheme();
  const backgroundstyle = darkMode
    ? "bg-primaryDark text-textDark"
    : "bg-primaryLight text-textLight";
  const buttonStyle = darkMode ? "bg-secondaryLight text-textLight px-2 py-1 rounded-md" : "bg-secondaryDark text-textDark px-2 py-1 rounded-md";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [following, setFollowing] = useState<string[] | undefined>(undefined);
  const [listName, setListName] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);
  const [selectedList, setSelectedList] = useState<Event>();
  const [selectedFeed, setSelectedFeed] = useState<{ all: [] }>({ all: [] });
  const [doNewList, setNewList] = useState(false);
  console.log(userProfiles);
  console.log(selectedFeed);

  const { userData } = useLocalUser();
  const { getUser } = useNDK();
  const hex = userData?.npub
    ? nip19.decode(userData?.npub).data.toString()
    : "";

  //get all the lists from the user
  useCustomLists(hex);

  const openModal = async () => {
    const allListEvents = await readListEvents();

    setListName(allListEvents as []);
    const resolvedUserProfiles = await getUserProfiles(following);
    //@ts-ignore
    setUserProfiles(resolvedUserProfiles);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setNewList(false);
  };

  //@ts-ignore
  const handleListClick = async (list) => {
    setSelectedList(list);
    console.log("list", list);

    const pTags = list.tags.filter((tag: string[]) => tag[0] === "p");
    const pTagValues = pTags.map((tag: string[]) => tag[1]);
    getAllFeedSinceYesterday(pTagValues as string[]).then((feedEvents) => {
      console.log("feedEvents", feedEvents);
      setSelectedFeed(feedEvents as { all: [] });
    });
  };
  const newList = () => {
    setNewList(!doNewList);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const followingData = await readFollowing();
        setFollowing(followingData);
        // Assuming getUserProfiles returns a Promise
        if (followingData) {
          const resolvedUserProfiles = await getUserProfiles(followingData);
          //@ts-ignore
          setUserProfiles(resolvedUserProfiles);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // if (userData === null) {
  return (
    <LayoutPage>
      <FeedNavbar>
        <div className="flex items-center justify-between">
          <div className="flex flex-row px-3 py-1 mr-2 border-2 rounded-3xl">
            {/* make local store selected list state and use for components */}
            {selectedList ? (
              <div className="cursor-pointer" onClick={openModal}>
                Current Selected Feed Name:{" "}
                {
                  selectedList?.tags?.find(
                    (tag: string[]) => tag[0] === "title"
                  )?.[1]
                }
              </div>
            ) : (
              <div className="cursor-pointer" onClick={openModal}>
                No Personal Selected Feed Please Select One Here!
              </div>
            )}
          </div>
          {/* <ActionButton title={`Edit feed`} svg={settings} onClick={openModal} /> */}
        </div>
      </FeedNavbar>
      <div className="flex flex-col items-center w-full">
        <LayoutCardComponent>
          <div className="flex flex-col justify-center max-w-[270px] sm:max-w-[700px] lg:max-w-[970px]">
            <div className="">
              {selectedFeed &&
              selectedFeed.all &&
              selectedFeed.all.length > 0 ? (
                <div>
                  {selectedFeed.all.map((event, index) => (
                    <div
                      className="overflow-hidden whitespace-nowrap"
                      key={index}
                    >
                      <MyEvent event={event} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex justify-center mt-5 text-3xl font-semibold">
                  You are welcome, no public feed
                </div>
              )}
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
              className={`${backgroundstyle} z-50 m-5 p-6 rounded-[40px] shadow-xl lg:max-w-[55%] w-full min-h-[60%] h-[95%] overflow-y-auto`}
            >
              <div className="w-full">
                <div className="flex justify-center mb-4 text-lg font-medium lg:text-2xl">
                  {!userData
                    ? "Please Login to view your feed"
                    : " Choose one of your contact lists to set your feed or create a new list"}
                </div>
                {/* handle proper login statements */}
                <div
                  className="px-3 py-1 mr-2 border-2 cursor-pointer rounded-3xl w-fit"
                  onClick={newList}
                >
                  Create New Feed list from your followers here!
                </div>
                <div className="px-3 py-1 mt-2 mr-2 border-2 cursor-pointer rounded-3xl w-fit">
                  Current selected Feed:{" "}
                  {
                    selectedList?.tags?.find(
                      (tag: string[]) => tag[0] === "title"
                    )?.[1]
                  }
                </div>
                <div className="text-md">
                  {following ? (
                    <div className="flex flex-col w-full gap-2 ">
                      <div className="flex h-full">
                        <div className="p-3 w-[100%] min-h-full h-full overflow-y-auto">
                          {doNewList ? (
                            <>
                              <div className="w-full px-3 py-2 mb-3 space-y-1 border-2 cursor-pointer rounded-3xl">
                                <p className="mt-1 text-lg font-semibold">
                                  Enter a name for your new list
                                </p>
                                <input
                                  className="w-full bg-transparent rounded-md grow "
                                  type="text"
                                  placeholder="e.g. 'Meme feed', 'Content Creators'"
                                />
                                <p className="mt-2 text-lg font-semibold">
                                  Description
                                </p>
                                <input
                                  className="w-full bg-transparent rounded-md grow "
                                  type="text"
                                  placeholder="An optional description..."
                                />
                                <div className="flex justify-end my-2">
                                  <button className={`mx-2 ${buttonStyle}`} onClick={newList}>Cancel Edit</button>
                                  <button className={`mx-2 ${buttonStyle}`}>Save</button>
                                </div>
                              </div>
                            </>
                          ) : null}
                          <div className="flex flex-col gap-2">
                            {listName?.map(
                              (
                                entry: { tags?: Array<[string, string]> },
                                index
                              ) => {
                                if (entry.tags) {
                                  // Find the title, description, and category tags in the 'tags' array
                                  const title = entry.tags.find(
                                    (tag) => tag[0] === "title"
                                  );
                                  const name = entry.tags.find(
                                    (tag) => tag[0] === "name"
                                  );
                                  const description = entry.tags.find(
                                    (tag) => tag[0] === "description"
                                  );
                                  const category = entry.tags.find(
                                    (tag) => tag[0] === "l"
                                  );

                                  return (
                                    <>
                                      <div
                                        key={index}
                                        className={`flex items-center gap-2 ${
                                          //@ts-ignore
                                          selectedList === entry
                                            ? "border-4 border-blue-600 w-fit rounded-2xl"
                                            : ""
                                        }`}
                                        onClick={() => handleListClick(entry)}
                                      >
                                        <div className="p-2 bg-gray-400 rounded-xl">
                                          {title ? (
                                            <p>List Title: {title[1]}</p>
                                          ) : null}
                                          {name ? (
                                            <p>List Title: {name[1]}</p>
                                          ) : null}
                                          {description ? (
                                            <p>Description: {description[1]}</p>
                                          ) : null}
                                          {category ? (
                                            <p>Category: {category[1]}</p>
                                          ) : null}
                                        </div>
                                      </div>
                                    </>
                                  );
                                }

                                return null; // Render nothing if 'tags' property is not present
                              }
                            )}
                          </div>
                        </div>
                        {userProfiles && doNewList ? (
                          <ListOfFollowers userProfiles={userProfiles} />
                        ) : null}
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
