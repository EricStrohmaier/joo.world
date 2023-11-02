import { AppRouter } from "./logic/routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./logic/theme/useTheme";
import { UserProvider } from "./logic/contextStore/UserContext";
import { NDKProvider } from "@nostr-dev-kit/ndk-react";
import { PersonalFeedProvider } from "./logic/contextStore/PersonalFeedContext";

export const App = () => {

  return (
    <BrowserRouter>
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
     
    </BrowserRouter>
  );
};
