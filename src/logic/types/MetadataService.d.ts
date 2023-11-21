// MetadataService.d.ts
export declare function useSaveUserMetadata(npub: string): Promise<void>;
export declare function readUserProfile(hex: string): Promise<NDKUserProfile | null>;
