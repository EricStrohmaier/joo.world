/* eslint-disable @typescript-eslint/ban-ts-comment */

import {  NDKFilter, NDKKind } from "@nostr-dev-kit/ndk";
import { ndkInstance } from "./NdkStore";


export async function saveEventsInDexie(event: { [key: string]: string[]; }[], filter: NDKFilter<NDKKind> ) {


    if (ndkInstance.cacheAdapter) {
      const cacheAdapter = ndkInstance.cacheAdapter;
      try {
        //@ts-ignore
        cacheAdapter.setEvent(event, filter);
        console.log("Events stored in indexedDB :",event,filter);
      } catch (error) {
        console.error("Error saving Data ", error);
      }
    } else {
      console.error("ndkInstance.cacheAdapter is undefined", ndkInstance.cacheAdapter);
      return null; // Return a default value or handle the case where cacheAdapter is undefined.
    }

  } 
