import React, { createContext, useContext, useState } from 'react';

interface IGlobalContextProviderProps {
  children: React.ReactNode;
}

export interface IGlobalState {
  breedId: string | undefined;
  page: number;
  error: boolean;
}

interface IGlobalContext {
  globalState: IGlobalState;
  setGlobalState: React.Dispatch<React.SetStateAction<IGlobalState>>;
}

export const GlobalContext = createContext<IGlobalContext | null>(null);

export default function GlobalContextProvider({ children }: IGlobalContextProviderProps) {
  const [globalState, setGlobalState] = useState<IGlobalState>({
    breedId: '',
    page: 1,
    error: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        globalState,
        setGlobalState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobalContext must be used withing GlobalContext Provider');
  }

  return context;
}
