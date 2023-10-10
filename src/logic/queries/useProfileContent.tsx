import { useSubscribe } from "nostr-hooks";

import useStore from "../store/useStore";
import useProfileHex from "./useProfileHex";

const useProfileContacts = () => {
  const profileHex = useProfileHex();

  const relays = useStore((store) => store.relays);

  const { events: contactEvents, eose: contactEose } = useSubscribe({
    relays,
    filters: [{ authors: [profileHex], kinds: [3] }],
    options: { enabled: !!profileHex },
  });

  const isFetchingContacts = !contactEose && !contactEvents.length;
  const isContactsEmpty = contactEose && !contactEvents.length;

  return {
    isFetchingContacts,
    isContactsEmpty,
    contactEvents,
    contactEose,
  };
};

export default useProfileContacts;
