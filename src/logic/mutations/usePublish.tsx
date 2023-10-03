/* eslint-disable no-async-promise-executor */
import { Event, EventTemplate } from "nostr-tools";
import { useCallback } from "react";
import { useUser } from "../queries";
import { useLocalStore } from "../store";
import { signEventWithNip07, signEventWithSeckey } from "../utils";

// import { useUser } from '@/logic/queries';
// import { useLocalStore } from '@/logic/store';
// import { signEventWithNip07, signEventWithSeckey } from '@/logic/utils';

export const usePublish = () => {
  const { pool, relays } = useLocalStore();

  const { seckey } = useUser();

  const publish = useCallback(
    (partialEvent: Partial<EventTemplate>) =>
      new Promise<Event>(async (resolve, reject) => {
        if (!partialEvent.kind) {
          reject(new Error("Kind is not provided"));
          return;
        }

        const nowInSeconds = Math.floor(Date.now() / 1000);

        const eventTemplate: EventTemplate = {
          ...partialEvent,
          content: partialEvent.content || "",
          created_at: partialEvent.created_at || nowInSeconds,
          kind: partialEvent.kind,
          tags: partialEvent.tags || [],
        };

        try {
          const signedEvent = seckey
            ? signEventWithSeckey(eventTemplate, seckey)
            : await signEventWithNip07(eventTemplate);

          const pubs = pool.publish(relays, signedEvent);

          Promise.all(pubs).then(() => resolve(signedEvent));
        } catch (error) {
          reject(error);
        }
      }),
    [relays, seckey, pool]
  );

  return publish;
};
