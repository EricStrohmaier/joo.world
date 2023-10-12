import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createIDBPersister } from "./logic/utils";
import { AppRouter } from "./logic/routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./logic/queries/useTheme";

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
      <BrowserRouter>
        {" "}
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    </PersistQueryClientProvider>
  );
};
