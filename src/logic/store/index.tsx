import { SimplePool } from "nostr-tools";
import { create } from "zustand";

interface State {
  pool: SimplePool;
  relays: string[];
}

interface Actions {
  setRelays: (relays: string[]) => void;
}

export const useLocalStore = create<State & Actions>((set) => ({
  pool: new SimplePool(),
  relays: [
    "wss://nos.lol",
    "wss://nostr-pub.wellorder.net",
    "wss://relay.damus.io",
    "wss://relay.snort.social",
    "wss://nostr.wine/",
  ],
  setRelays: (relays) => set({ relays }),
}));
