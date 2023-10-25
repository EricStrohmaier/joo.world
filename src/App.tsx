import { AppRouter } from "./logic/routes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./logic/theme/useTheme";
import { UserProvider } from "./logic/store/UserContext";
import { NDKProvider } from "@nostr-dev-kit/ndk-react";

export const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
