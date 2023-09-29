const DEFAULT_RELAYS = [
  "wss://nos.lol/",
  "wss://nostr.wine",
  " wss://eden.nostr.land/",
  "wss://nos.lol/",
  " wss://relay.snort.social",
  "wss://relay.damus.io",
];

export class Relays {
  static relays = DEFAULT_RELAYS;

  static getRelays() {
    return this.relays;
  }

  static addRelay(relay: string) {
    this.relays.push(relay);
  }

  static removeRelay(relay: string) {
    this.relays = this.relays.filter((r) => r !== relay);
  }

  static setRelays(relays: string[]) {
    this.relays = relays;
  }
}
