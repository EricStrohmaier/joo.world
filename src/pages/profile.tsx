import { SimplePool } from "nostr-tools";
import { FC, useEffect, useState } from "react";

interface profileProps {}

const Profile: FC<profileProps> = () => {
  const [pool, setPool] = useState<SimplePool | null>(null);
  useEffect(() => {
    const _pool = new SimplePool();
    setPool(_pool);
    console.log("pool", pool);
    return () => {
      // _pool.close(RELAYS);
    };
  }, []);

  return (
    <div>
      <div>
        Hello, profile
        <div>{pool?.toString()}</div>
      </div>
    </div>
  );
};

export default Profile;
