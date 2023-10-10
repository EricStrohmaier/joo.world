import { Event, Filter, SimplePool, Sub } from "nostr-tools";
import { StateCreator } from "zustand";

export interface PoolSlice {
  pool: {
    sub: (filters: Filter[]) => Sub;
    list: (filters: Filter[]) => Promise<Event[]>;
    publish: (event: Event) => void; // Updated type
  };
  relays: string[];
}

const _pool = new SimplePool();

const createPoolSlice: StateCreator<PoolSlice> = (_set, get) => ({
  pool: {
    sub: (filters: Filter[]) => _pool.sub(get().relays, filters),
    list: (filters: Filter[]) => _pool.list(get().relays, filters),
    publish: (event: Event) => _pool.publish(get().relays, event),
  },
  relays: [
    "wss://relay.damus.io",
    "wss://relay.snort.social",
    "wss://eden.nostr.land",
    "wss://relay.nostr.info",
    "wss://offchain.pub",
    "wss://nostr-pub.wellorder.net",
    "wss://nostr.fmt.wiz.biz",
    "wss://nos.lol",
  ],
});

export default createPoolSlice;
