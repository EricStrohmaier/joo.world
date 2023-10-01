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
  }
  
  export type NostrProfile = {
    pubkey: string;
    name: string;
    displayName?: string;
    image: string;
    about: string | null;
    npub: string;
    nip05?: string | null;
    lightning_address?: string | null;
    boltfun_id?: number;
    banner?: string ;
    website?: string | null;
  };
  