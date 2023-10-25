import React, { createContext, useContext, useState } from 'react';

interface IGlobalContextProviderProps {
  children: React.ReactNode;
}

export interface IBreed {
  breedId: string;
  page: number;
}

interface IGlobalContext {
  globalState: IBreed;
  setGlobalState: React.Dispatch<React.SetStateAction<IBreed>>;
}

export const GlobalContext = createContext<IGlobalContext | null>(null);

export default function GlobalContextProvider({ children }: IGlobalContextProviderProps) {
  const [globalState, setGlobalState] = useState<IBreed>({
    breedId: '',
    page: 1,
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
