import "./App.css";
// import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import CreateTextNote from "./components/CreateTextNote";
import DisplayFeed from "./components/DisplayFeed";

// export const RELAYS = [
//   "wss://nostr-pub.wellorder.net",
//   "wss://nostr.drss.io",
//   "wss://nostr.swiss-enigma.ch",
//   "wss://relay.damus.io",
// ];

export interface Metadata {
  name?: string;
  about?: string;
  picture?: string;
  nip05?: string;
}

function App() {
  // const [pool, setPool] = useState<SimplePool | null>(null);

  // useEffect(() => {
  //   const _pool = new SimplePool();
  //   setPool(_pool);

  //   return () => {
  //     _pool.close(RELAYS);
  //   };
  // }, []);

  return (
    <div className={`app bg-background text-text w-full`}>
      <Navbar />
      {/* this is a spacer for the fist element under the nav bar */}
      <div className="h-20 w-1"></div>
      <div className="flex flex-col items-center justify-center ">
        <CreateTextNote />
        {/* <CreateWorkflows /> */}
        <DisplayFeed />
      </div>
    </div>
  );
}

export default App;
