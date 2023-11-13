/* eslint-disable @typescript-eslint/ban-ts-comment */

// import _ from 'lodash';
import { ndkInstance } from "./NdkStore";
import { useNDK } from "@nostr-dev-kit/ndk-react";

export async function usePersonalFeedDixie(hex: string) {
  const { fetchEvents } = useNDK();

  if (hex) {
    const filter = {
      kinds: [1],
      authors: [hex],
      limit: 50,
    };
    try {
      const events = await fetchEvents(filter);
      // const eventArray = [...events];
      // const personalFeeds = eventArray.map((entry) => ({
      //   content: entry.content,
      //   tags: entry.tags,
      //   createdAt: entry.created_at,
      //   id: entry.id,
      //   pubkey: entry.pubkey,
      //   url: entry.relay?.url,
      // }));

      //   if (/* specify your condition here */) {
      await saveFeed(events, filter);
      //   }
    } catch (error) {
      console.error("Error fetching personal feed", error);
    }
  }
}

async function saveFeed(events: object[], filter: object) {
  try {
    if (ndkInstance.cacheAdapter) {
      const cacheAdapter = ndkInstance.cacheAdapter;
      try {
        events.forEach(async (event) => {
          //@ts-ignore
          await cacheAdapter.setEvent(event, filter);
        });
        console.log("Personal feed stored");
      } catch (error) {
        console.error("Error storing personal feed:", error);
      }
    } else {
      console.error(
        "ndkInstance.cacheAdapter is undefined",
        ndkInstance.cacheAdapter
      );
    }
  } catch (error) {
    console.error("Error saving personal feed", error);
  }
}

