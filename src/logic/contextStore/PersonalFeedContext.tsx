import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface PersonalFeedItem {
  content: string;
  tags: string[];
  createdAt: string;
  id: string;
  pubkey: string;
  url: string | null;
}

interface PersonalFeedContextType {
  personalFeedData: PersonalFeedItem[] | null;
  setPersonalFeedData: (data: PersonalFeedItem[] | null) => void;
}

const PersonalFeedContext = createContext<PersonalFeedContextType | undefined>(undefined);

interface PersonalFeedProviderProps {
  children: ReactNode;
}

export function PersonalFeedProvider({ children }: PersonalFeedProviderProps) {
  const [personalFeedData, setPersonalFeedData] = useState<PersonalFeedItem[] | null>(null);

useEffect(() => {
  const savedData = localStorage.getItem('personalFeedData');
  // console.log('Saved data:', savedData);
  if (savedData) {
    setPersonalFeedData(JSON.parse(savedData));
  }
}, []);

useEffect(() => {
  if (personalFeedData) {
    localStorage.setItem('personalFeedData', JSON.stringify(personalFeedData));
    // console.log('Data saved to local storage');
  }
}, [personalFeedData]);


  return (
    <PersonalFeedContext.Provider value={{ personalFeedData, setPersonalFeedData }}>
      {children}
    </PersonalFeedContext.Provider>
  );
}

export function usePersonalFeed() {
  const context = useContext(PersonalFeedContext);
  if (context === undefined) {
    throw new Error('usePersonalFeed must be used within a PersonalFeedProvider');
  }
  return context;
}
