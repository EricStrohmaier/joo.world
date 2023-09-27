import { EventTemplate, Event } from "nostr-tools";

declare global {
  interface Window {
    nostr: Nostr;
    _nostr_sk: string | undefined; 
    _nostr_pk: string | undefined; 

  }
}

type Nostr = {
  getPublicKey(): Promise<string>;
  signEvent(event: EventTemplate): Promise<Event>;
};


