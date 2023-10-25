import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export interface User {
  npub: string;
  about?: string;
  banner?: string;
  hexPubKey?: string;
  lud06?: string;
  lud16?: string;
  name?: string;
  nip05?: string;
  picture?: string;
  website?: string;
  displayName?: string;

}

interface UserContextType {
    userData: User | null;
    setUser: (user: User | null) => void;
    logout: () => void;
  }
// Create a context to manage user data
const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [userData, setUserData] = useState<User | null>(null);
  
    // Check local storage for the npub value when the component loads
    useEffect(() => {
      const npub = localStorage.getItem('npub');
      if (npub) {
        setUserData({ npub });
      }
    }, []);
  
    const setUser = (user: User | null) => {
      setUserData(user);
  
      // Update local storage when setting the user
      if (user && user.npub) {
        localStorage.setItem('npub', user.npub);
      } else {
        // Clear local storage if user is null
        localStorage.removeItem('npub');
      }
    };
  
    const logout = () => {
      setUserData(null);
      // Clear local storage when logging out
      localStorage.removeItem('npub');
    };
  
    return (
      <UserContext.Provider value={{ userData, setUser, logout }}>
        {children}
      </UserContext.Provider>
    );
  }
  

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
