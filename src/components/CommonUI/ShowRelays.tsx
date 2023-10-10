import { FC } from "react";
import { useRelays } from "../../logic/queries/useRelays";

interface ShowRelaysProps {}

const ShowRelays: FC<ShowRelaysProps> = () => {
  const { relays } = useRelays();
  //   console.log("ShowRelays", relays);

  return (
    <div className="my-2 mx-2 md:px-4 md:mx-0">
      {relays.map((relay, index) => (
        <div key={index}>
          <h3 className="inline-flex">{relay}</h3>
        </div>
      ))}
    </div>
  );
};

export default ShowRelays;
