import db from "./Dexie";

export async function saveEventsInDexie(events: { [key: string]: string[]; }[]) {
  try {
    const existingKeys = await db.listEvents.toArray();

    const newEvents = events.filter((event) => {
      return !existingKeys.some((existingEvent) => existingEvent.id === event.id);
    });
    await db.listEvents.bulkAdd(newEvents);

  } catch (error) {
    console.error("Error saving List Event Data ", error);
  }
}


export async function saveFollowing(followingPubkeys: string[]) {
  try {
    await db.transaction('rw', db.following, async () => {
      await db.following.clear();
      await db.following.put({ followingPubkeys });
    });

  } catch (error) {
    console.error("Error saving Following Data ", error);
  }
}

export async function readListEvents() {
  try {
    const allListEvents = await db.listEvents.toArray();
    return allListEvents;
  } catch (error) {
    console.error("Error reading List Event Data", error);
  }
}

export async function readFollowing() {
  try {
    const followingData = await db.following.toArray();
    return followingData.length > 0 ? followingData[0].followingPubkeys : [];
  } catch (error) {
    console.error("Error reading Following Data", error);
  }
}