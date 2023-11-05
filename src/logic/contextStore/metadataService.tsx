/* eslint-disable @typescript-eslint/ban-ts-comment */

import _ from 'lodash';
import { ndkInstance } from './NdkStore';
import { useNDK } from '@nostr-dev-kit/ndk-react';

export async function useSaveUserMetadata(npub : string) {
    const { getProfile } = useNDK();

    const metadata = getProfile(npub || "");

    //get existing data from cache and check if there was a change? if so update!
    async function saveUserMetadata(hex: string) {
    try {

    if (ndkInstance.cacheAdapter) {
      const cacheAdapter = ndkInstance.cacheAdapter;

        //@ts-ignore 
      const existingMetadata = await cacheAdapter.fetchProfile(hex);

      if (!_.isEmpty(metadata) && (!existingMetadata || !_.isEqual(existingMetadata, metadata))) {
        try {
          //@ts-ignore
          cacheAdapter.saveProfile(hex, metadata);
          console.log("Metadata stored in indexedDB :",hex);
        } catch (error) {
          console.error("Error storing user metadata:", error);
        }
      } else {
        // console.log("Metadata is up to date in the cache");
      }
    } else {
      console.error("ndkInstance.cacheAdapter is undefined", ndkInstance.cacheAdapter);
    }
  } catch (error) {
    console.error("Error getting metadata", error);
  }
}
return saveUserMetadata;

}


export async function readUserProfile(hex: string) {

  try {
    if (ndkInstance.cacheAdapter) {
      const cacheAdapter = ndkInstance.cacheAdapter;
      //@ts-ignore
      return await cacheAdapter.fetchProfile(hex);
    } else {
      console.error("ndkInstance.cacheAdapter is undefined", ndkInstance.cacheAdapter);
      return null; // Return a default value or handle the case where cacheAdapter is undefined.
    }
  } catch (error) {
    console.error("Error reading user metadata", error);
    return null; 
  }
}
