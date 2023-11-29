# React + TypeScript + Vite s s

## Things I use in this project 

This is for me form me:

- set global  `NDKDexieCacheAdapter` and reuse it for fetching data like this:


```js
 
   try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      cacheAdapter.saveProfile(hex, metadata)
    } catch (error) {
      console.error("Error storing user metadata:", error);
    }

```


```js

import { ndkInstance } from "../logic/contextStore/NdkStore";

   const hex = userData?.npub ? nip19.decode(userData?.npub).data.toString() : undefined;
  
  if (ndkInstance.cacheAdapter) {
    const cacheAdapter = ndkInstance.cacheAdapter;

    try {
      //@ts-ignore
      cacheAdapter.fetchProfile(hex).then((profile) => {
        console.log("Profile fetched from cache:", profile);
      });
    } catch (error) {
      console.error("Error storing data:", error);
    }
  } else {
    console.error("ndkInstance.cacheAdapter is undefined");
  }

```

```js 
  // fetch metadata on click of page and store in indexDB

  useEffect(() => {
    const fetchMetadata = async (hex: string) => {
      try {
        if (ndkInstance.cacheAdapter) {
          const cacheAdapter = ndkInstance.cacheAdapter;
          try {
            if (Object.keys(metadata).length === 0) {
              console.log("Metadata is currenty not avalible", metadata);
            } else {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              cacheAdapter.saveProfile(hex, metadata);
              console.log("Metadata stored in IndexDB");
            }
          } catch (error) {
            console.error("Error storing user metadata:", error);
          }
        } else {
          console.error("ndkInstance.cacheAdapter is undefined", ndkInstance.cacheAdapter);
        }
      } catch (error) {
        console.log("Error getting metadata", error);
      }
    };

    if (hex) {
      fetchMetadata(hex);
    }
  }, [hex]);

```

