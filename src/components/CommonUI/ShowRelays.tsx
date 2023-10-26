import { useNDK } from "@nostr-dev-kit/ndk-react";
import { FC, useEffect, useState } from "react";
import { useUser } from "../../logic/contextStore/UserContext";

interface ShowRelaysProps {}

const ShowRelays: FC<ShowRelaysProps> = () => {
  const hardRelays = [
    "wss://nos.lol",
    "wss://nostr-pub.wellorder.net",
    "wss://relay.damus.io",
    "wss://relay.snort.social",
    "wss://nostr.wine/",
  ];
  const { userData} = useUser();
  const { getUser } = useNDK();

  const [relays, setRelays] = useState([]); // Initialize with an empty array

  useEffect(() => {
    if (userData) {
      const hex = userData?.npub;

      const fetchRelays = async () => {
        try {
          const relayData = await getUser(hex || "")
            .relayList()
            .then((result) => {
              return result
            });
            if (relayData instanceof Set) {
              const relayArray = [...relayData]; // Destructure the Set into an array
             
              const tagsArray = relayArray
                .map((entry) => entry.tags)
                .filter((tags) => Array.isArray(tags))
                .flat();

              
              const wssValues = tagsArray.map((tagArray) => tagArray[1]);
               //@ts-ignore
              setRelays(wssValues);

            }
        } catch (error) {
          console.error("Error fetching relays:", error);
        }
      };
      fetchRelays();
    }
  }, [userData]);

  if (!userData) {
    return (
      <div className="mx-2 my-2 md:px-4 md:mx-0">
        {hardRelays.map((relay, index) => (
          <div key={index}>
            <h3 className="inline-flex">{relay}</h3>
          </div>
        ))}
      </div>
    );
  }

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
