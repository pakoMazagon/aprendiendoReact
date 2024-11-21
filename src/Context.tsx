import React, { ReactNode, createContext, useContext, useState } from 'react'

interface AppContextType {
    language: string;
    setLanguage: (language: string) => void;
  }

export const ContextPaco = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
  }

export const DataContext = ({children}: AppProviderProps) =>{
    const [language,setLanguage] = useState("ES");

    return(
        <ContextPaco.Provider value={{language, setLanguage}}>
            {children}
        </ContextPaco.Provider>
    )
}

// Custom hook to handle undefined context
export const useContextPaco = () => {    
    const context = useContext(ContextPaco);    
    if (context === undefined) {
      throw new Error("useContextPaco must be used within a DataContext");
    }
    return context;
  };

