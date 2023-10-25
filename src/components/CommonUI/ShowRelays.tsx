import { FC } from "react";

interface ShowRelaysProps {}

const ShowRelays: FC<ShowRelaysProps> = () => {
  const relays = [
    "wss://nos.lol",
    "wss://nostr-pub.wellorder.net",
    "wss://relay.damus.io",
    "wss://relay.snort.social",
    "wss://nostr.wine/",
  ];

  return (
    <div className="mx-2 my-2 md:px-4 md:mx-0">
      {relays.map((relay, index) => (
        <div key={index}>
          <h3 className="inline-flex">{relay}</h3>
        </div>
      ))}
    </div>
  );
};

export default ShowRelays;
