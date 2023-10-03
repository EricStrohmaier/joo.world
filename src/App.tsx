import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createIDBPersister } from "./logic/utils";
import { AppRouter } from "./logic/routes";

const persister = createIDBPersister();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // cacheTime: 1000 * 60 * 60 * 48, // 48 hours
      // staleTime: 1000 * 60 * 1, // 1 minute
      cacheTime: Infinity,
      staleTime: Infinity,
      // refetchOnWindowFocus: false,
    },
  },
});

export const App = () => {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <AppRouter />
    </PersistQueryClientProvider>
  );
};
