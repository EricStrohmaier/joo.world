/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NDKKind } from "@nostr-dev-kit/ndk";
import { useNDK } from "@nostr-dev-kit/ndk-react";
import { saveEventsInDexie } from "./saveEventInDexie";

export async function useCustomLists(hex: string) {
  const { fetchEvents } = useNDK();
  if (hex) {
    const filter = {
      kinds: [
        NDKKind.CategorizedPeopleList as number,
        NDKKind.Contacts as number,
      ],
      authors: [hex],
    };
    try {
      const events = await fetchEvents(filter);
      const eventArray = [...events];
      const listEvents = eventArray.map((entry) => ({
        tags: entry.tags,
        createdAt: entry.created_at,
        id: entry.id,
        kind: entry.kind,
        pubkey: entry.pubkey,
        url: entry.relay?.url,
      }));

      // console.log("listEvents", listEvents);
      const kind3Events = listEvents.filter((entry) => entry.kind === 3);
      const latestFollowerList = kind3Events.reduce(
        (latest, current) =>
          //@ts-ignore
          current.createdAt > latest.createdAt ? current : latest,
        kind3Events[0]
      );

      // Extract hex keys from tags
      const followingHexKeys = latestFollowerList.tags.map((tagArray) => {
        //add to dixie store?
        const followingHexKeys = tagArray[1];
        return followingHexKeys;
      });


      const peopleLists = listEvents.filter(
        (entry) =>
          //additional filter here pls
          //  entry.tags.some((tag) => tag.includes("People"))
          (entry.tags.some((tag) => tag[0] === "name") ||
            entry.tags.some((tag) => tag[0] === "title")) &&
          entry.tags.some((tag) => tag[0] === "description")
      );

      const filterdListEvents: { [key: string]: string[] }[] = [];

      peopleLists.forEach((entry) => {
        const customListHexKeys: { [key: string]: string | string[] } = {};
        const pTags: string[] = [];

        entry.tags.forEach((tagArray) => {
          const key = tagArray[0];
          const value = tagArray[1];

          if (
            key === "l" ||
            key === "title" ||
            key === "description" ||
            key === "name"
          ) {
            customListHexKeys[key] = value;
          }

          if (key === "p") {
            pTags.push(value);
          }
        });

        customListHexKeys["p"] = pTags;

        //save data here
        if (Object.keys(customListHexKeys).length > 0) {
          //@ts-ignore
          filterdListEvents.push(customListHexKeys);
        }
        eventArray.forEach((event) => {
          //@ts-ignore
          return saveEventsInDexie(event, filter);
        });
      });

      return { followingHexKeys, filterdListEvents };
    } catch (error) {
      console.error("Error fetching LISTS", error);
    }
  }
}


