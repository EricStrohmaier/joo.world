/* eslint-disable @typescript-eslint/no-explicit-any */
import { NDKEvent, NDKFilter } from "@nostr-dev-kit/ndk";

export async function GetCustomFeed(hexKeys: any, fetchEvents: { (filter: NDKFilter): Promise<NDKEvent[]>; (arg0: { kinds: number[]; authors: string[]; limit: number; }): any; }) {

    try {
      const events = await fetchEvents({
        kinds: [1],
        authors: hexKeys,
        limit: 50,
      });
      const eventArray = [...events];

      const listEvents = eventArray.map((entry) => ({
        content: entry.content,
        tags: entry.tags,
        createdAt: entry.created_at,
        id: entry.id,
        kind: entry.kind,
        pubkey: entry.pubkey,
        url: entry.relay?.url,
      }));
      return listEvents;

    } catch (error) {
      console.error("Error fetching FeedEvents at GetCustomFeed", error);
    }
}
