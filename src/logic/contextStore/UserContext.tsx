import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Metadata } from "../../logic/types/nostr";

export interface User {
  npub: string;
}

interface UserContextType {
  userData: User | null;
  metadata: Metadata | null; 
  setLocalUser: (user: User) => void;
  setMetadata: (metadata: Metadata) => void; 
  logout: () => void;
}

// Create a context to manage user data
const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<User | null>(null);
  const [userMetadata, setUserMetadata] = useState<Metadata | null>(null); 

  // Check local storage for the npub value and metadata when the component loads
  useEffect(() => {
    const npub = localStorage.getItem('npub');
    const storedMetadata = localStorage.getItem('profile');

    if (npub) {
      setUserData({ npub });
    }

    if (storedMetadata) {
      setUserMetadata(JSON.parse(storedMetadata));
    }
  }, []);

  const setLocalUser = (user: User | null) => {
    setUserData(user);

    // Update local storage when setting the user
    if (user && user.npub) {
      localStorage.setItem('npub', user.npub);
    } else {
      // Clear local storage if user is null
      localStorage.removeItem('npub');
    }
  };

  const setMetadata = (metadata: Metadata) => {
    setUserMetadata(metadata);

    // Update local storage when setting the metadata
    if (metadata) {
      localStorage.setItem('profile', JSON.stringify(metadata));
    } else {
      // Clear metadata from local storage if metadata is null
      localStorage.removeItem('profile');
    }
  };

  const logout = () => {
    setUserData(null);
    setUserMetadata(null); // Clear metadata from local storage
    // Clear local storage when logging out
    localStorage.removeItem('npub');
    localStorage.removeItem('profile');
  };

  return (
    <UserContext.Provider value={{ userData, metadata: userMetadata, setLocalUser, setMetadata, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useLocalUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
