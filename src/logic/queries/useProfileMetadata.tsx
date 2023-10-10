import { useSubscribe } from "nostr-hooks";

import useStore from "../store/useStore";

const useProfileMetadata = (profileHex: string | undefined) => {
  // const profileHex = useUser().pubkey || "";

  const relays = useStore((store) => store.relays);

  const { events: metadataEvents, eose: metadataEose } = useSubscribe({
    relays,
    filters: [{ authors: [profileHex!], kinds: [0] }],
    options: { enabled: !!profileHex },
  });

  const isFetchingMetadata = !metadataEose && !metadataEvents.length;
  const isMetadataEmpty = metadataEose && !metadataEvents.length;

  return {
    latestMetadataEvent: metadataEvents[0],
    isFetchingMetadata,
    isMetadataEmpty,
    metadataEvents,
    metadataEose,
  };
};

export default useProfileMetadata;
