
import _ from 'lodash';
import { ndkInstance } from './NdkStore';
import { useNDK } from '@nostr-dev-kit/ndk-react';
// MetadataService.jsx
export async function useSaveUserMetadata(npub) {
  const { getProfile } = useNDK();
  const metadata = getProfile(npub || "");

  try {
    if (ndkInstance.cacheAdapter) {
      const cacheAdapter = ndkInstance.cacheAdapter;
      const existingMetadata = await cacheAdapter.fetchProfile(npub);

      if (!_.isEmpty(metadata) && (!existingMetadata || !_.isEqual(existingMetadata, metadata))) {
        try {
          await cacheAdapter.saveProfile(npub, metadata);
          console.log("Metadata stored for:", npub);
        } catch (error) {
          console.error("Error storing user metadata:", error);
        }
      } else {
        // Metadata is up to date in the cache
      }
    } else {
      console.error("ndkInstance.cacheAdapter is undefined", ndkInstance.cacheAdapter);
    }
  } catch (error) {
    console.error("Error getting metadata", error);
  }
}


/**
 * @param {string} hex
 * @returns {Promise<NDKUserProfile | null>}
 */
export async function readUserProfile(hex) {

  try {
    if (ndkInstance.cacheAdapter) {
      const cacheAdapter = ndkInstance.cacheAdapter;
     
      const existingMetadata = await cacheAdapter?.fetchProfile(hex);

      return existingMetadata ?? null;
    } else {
      console.error("ndkInstance.cacheAdapter is undefined", ndkInstance.cacheAdapter);
      return null; // Return a default value or handle the case where cacheAdapter is undefined.
    }
  } catch (error) {
    console.error("Error reading user metadata", error);
    return null; 
  }
}
