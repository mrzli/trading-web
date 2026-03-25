import type { ReactNode } from 'react';

import { AppContext } from './app-context';
import type { AppContextValue } from './app-context-value';

export interface AppContextProviderProps {
  readonly children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const value: AppContextValue = {
    appName: 'Trading App',
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
