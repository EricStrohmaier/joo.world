import { AppRouter } from "./logic/routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./logic/theme/useTheme";
import { UserProvider } from "./logic/contextStore/UserContext";
import { NDKProvider } from "@nostr-dev-kit/ndk-react";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersonalFeedProvider } from "./logic/contextStore/PersonalFeedContext";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
       <PersonalFeedProvider>
        <NDKProvider
          relayUrls={[
            "wss://nos.lol",
            "wss://nostr-pub.wellorder.net",
            "wss://relay.damus.io",
            "wss://relay.snort.social",
            "wss://nostr.wine/",
          ]}
        >
          <ThemeProvider>
            <UserProvider>
              {" "}
              <AppRouter />
            </UserProvider>
          </ThemeProvider>
        </NDKProvider>
        </PersonalFeedProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
