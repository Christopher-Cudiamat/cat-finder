import React, { createContext, useContext, useState } from 'react';

interface IGlobalContextProviderProps {
  children: React.ReactNode;
}

export interface IGlobalState {
  breedId: string | undefined;
  page: number;
  error: boolean;
  loading: boolean;
}

interface IGlobalContext {
  globalState: IGlobalState;
  setGlobalState: React.Dispatch<React.SetStateAction<IGlobalState>>;
  resetGlobalState: () => void;
}

export const GlobalContext = createContext<IGlobalContext | null>(null);

export default function GlobalContextProvider({ children }: IGlobalContextProviderProps) {
  const [globalState, setGlobalState] = useState<IGlobalState>({
    breedId: '',
    page: 1,
    error: false,
    loading: false,
  });

  const resetGlobalState = () => {
    setGlobalState({
      breedId: '',
      page: 1,
      error: false,
      loading: false,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        globalState,
        setGlobalState,
        resetGlobalState,
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
