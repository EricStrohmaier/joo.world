// import { useQuery } from "@tanstack/react-query";
// import { Filter } from "nostr-tools";
// import { useCallback } from "react";

// import { useSettings } from "."; // Make sure to provide the correct path to useSettings
// // import { filterBoardsByMuteList, parseBoardsFromEvents } from '@/logic/utils';
// import { useLocalStore } from "../store";

// export const useSearch = (text: string | undefined) => {
//   const pool = useLocalStore((state) => state.pool);
//   const relays = useLocalStore((state) => state.relays);

//   const { data: settings } = useSettings(); // Assuming useSettings provides settings data.

//   // const queryClient = useQueryClient();

//   const fetchSearch = useCallback(async () => {
//     if (!pool || !relays || !text) {
//       throw new Error("Missing dependencies in search");
//     }

//     // const filter: Filter = {
//     //   kinds: [33889 as number],
//     //   limit: 10,
//     //   search: text,
//     // };

//     // Add your logic for fetching data based on the filter and settings.
//     // You can use queryClient to cache the data if needed.

//     // For example:
//   //   // const searchData = await fetchData(filter, settings?.muteList);

//   //   return searchData;
//   // }, [pool, relays, text, settings]);

//   return useQuery({
//     queryKey: [
//       "nostr",
//       "search",
//       { text, muteList: settings?.muteList.join(",") },
//     ],
//     queryFn: fetchSearch,
//     retry: 4,
//     staleTime: 4000, // 4 seconds
//     enabled: !!pool && !!relays && !!text,
//   });
// }
