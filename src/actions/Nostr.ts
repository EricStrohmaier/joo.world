/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {  getPublicKey } from "nostr-tools";
import { Dispatch } from "redux";


// Try to get locally stored nostr private key
export const getLocalPrivateKey = (): string => {
    let privateKey = window._nostr_sk || '';

    if (!privateKey && window.localStorage) {
        privateKey = window.localStorage.getItem("nostr_sk") || '';
    }

    return privateKey;
};

    export const getLocalPublicKey = (): string => {
        let pubkey = window._nostr_pk || '';

        if (!pubkey && window.localStorage) {
            pubkey = window.localStorage.getItem("nostr_pk") || '';
        }

        return pubkey;
    };




// Store private key and derived pubkey in local storage
export const setLocalPrivateKey = (privateKey: string): void => {
  window._nostr_sk = privateKey;

  if (window.localStorage) {
    try {
      window.localStorage.setItem("nostr_sk", privateKey);
    } catch (err) {
        console.log("err", err);
    }
  }

  setLocalPublicKey(getPublicKey(privateKey));
};

export const setLocalPublicKey = (pubkey: string): void => {
  window._nostr_pk = pubkey;

  if (window.localStorage) {
    try {
      window.localStorage.setItem("nostr_pk", pubkey);
    } catch (err) {
        console.log("err", err);
    }
  }
};

export const REVOKE_DEVICE_AUTH = "REVOKE_DEVICE_AUTH";
export const revokeDeviceAuth = () => {
    return (dispatch: Dispatch) => {
        delete window._nostr_pk;
        delete window._nostr_sk;

        if (window.localStorage) {
            window.localStorage.removeItem("nostr_pk");
            window.localStorage.removeItem("nostr_sk");
        }

        dispatch({ type: REVOKE_DEVICE_AUTH });
    };
};

export const COMMUNITY_INDEX_EOSE = "COMMUNITY_INDEX_EOSE";
export const loadCommunitiesIndex = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (_dispatch: Dispatch, getState: () => any) => {
    const { main } = getState().nostr;

    const activeFeedName = "community_active";
    // const indexFeedName = "community_index";

    if (!main || main.subscriptions[activeFeedName]) {
      return;
    }
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.client.subscribe(activeFeedName, main, [
      {
        kinds: [4550],
        since: Math.floor(Date.now() / 1000) - 14 * 86400,
      },
    ]);
  };
};

export const subscribeToCommunity = (params: { a?: string; subscribe?: boolean }) => {
  return async (dispatch: Dispatch, getState: () => any) => {
    let event: any, atags;

    const { a, subscribe } = params;
    const { followingList } = getState().communities;

    if (!a) {
      return;
    }

    if (subscribe) {
      // Subscribe to community

      if (followingList[a]) {
        return;
      }

      atags = [a, ...Object.keys(followingList)].map((ident) => {
        return ["a", ident];
      });
    } else {
      // Unsubscribe from community

      if (!followingList[a]) {
        return;
      }

      atags = Object.keys(followingList)
        .filter((ident) => {
          return ident !== a;
        })
        .map((ident) => {
          return ["a", ident];
        });
    }

    try { // @ts-ignore
      event = await window.client.createEvent(
        {
          content: "",
          kind: 30001,
          tags: [["d", "communities"], ...atags],
        },
        {
          privateKey: getLocalPrivateKey(),
        }
      );
    } catch (err) {
      console.log("err", err);
    }

    if (!event) {
      return;
    }

    // dispatch({
    //   type: RECEIVE_COMMUNITY_FOLLOWING_LIST, // This action type is missing in your code, please provide it
    //   data: { event },
    // });

    // try {
    //   await new Promise((_resolve, _reject) => {
    //     window.client.publishEvent(event, (status, relay) => {
    //       console.log(status, relay.url);
    //     });
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  };
};

export const handleApprovePost = async (
  item: any,
  params: { ownerpubkey: string; name: string } = {
      ownerpubkey: "",
      name: ""
  },
  handlers: { onSignedEvent?: (event: any) => void } = {}
) => {
  let event: any;

  try { 
    // @ts-ignore
    event = await window.client.createEvent(
      {
        content: JSON.stringify(item.event),
        kind: 4550,
        tags: [
          ["a", `34550:${params.ownerpubkey}:${params.name}`],
          ["e", item.event.id],
          ["p", item.event.pubkey],
          ["k", String(item.event.kind)],
        ],
      },
      {
        privateKey: getLocalPrivateKey(),
      }
    );
  } catch (err) {
    console.log("err", err);
  }

  if (!event) {
    return;
  }

  if (handlers.onSignedEvent) {
    handlers.onSignedEvent(event);
  }

  try {
    await new Promise((_resolve, _reject) => {
             // @ts-ignore
      window.client.publishEvent(event, (status, relay) => {
        console.log(status, relay.url);
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export async function getPubKey() {
    // @ts-ignore
    const pubKey = await window.nostr.getPublicKey();
    return pubKey;
  }
