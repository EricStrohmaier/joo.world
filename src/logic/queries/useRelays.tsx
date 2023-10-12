import { useLocalStore } from "../store";

export const useRelays = () => {
  //   const pool = useLocalStore((store) => store.pool);
  const relays = useLocalStore((store) => store.relays);

  //   console.log("useRelays", pool, relays);
  return { relays };
};
