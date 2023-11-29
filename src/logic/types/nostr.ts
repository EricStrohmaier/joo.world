import { NDKTag } from "@nostr-dev-kit/ndk";

export interface Metadata {
    name?: string;
    displayName?: string;
    about?: string;
    picture?: string;
    nip05?: string;
    lud16?: string;
    banner?: string;
    nip05verified?: boolean;
    website?: string;
    npub?: string;
    pubkey?: string
  }
  
  
export interface PersonalFeedItem {
  content: string;
  tags: string[];
  createdAt: string;
  id: string;
  pubkey: string;
  url: string | null;
}

export interface EventData {
  content: string;
  tags: NDKTag[];
  createdAt: number | undefined;
  id: string;
  kind: number | undefined;
  pubkey: string;
  url: string | undefined;
}