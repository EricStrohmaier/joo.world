import { Event, UnsignedEvent } from "nostr-tools"

export type NostrWindow = {
  getPublicKey(): Promise<string>
  signEvent(event: UnsignedEvent ) : Promise<Event>
}