import NDKDexieCacheAdapter from "@nostr-dev-kit/ndk-cache-dexie";
import NDK from "@nostr-dev-kit/ndk";

const dexieAdapter = new NDKDexieCacheAdapter({ dbName: "yourstore" });
const ndkInstance = new NDK({ cacheAdapter: dexieAdapter, explicitRelayUrls:[
    "wss://nos.lol",
    "wss://nostr-pub.wellorder.net",
    "wss://relay.damus.io",
    "wss://relay.snort.social",
    "wss://nostr.wine/",
  ]});

export { dexieAdapter, ndkInstance };
