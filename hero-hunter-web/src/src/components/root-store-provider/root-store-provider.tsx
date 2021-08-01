import { RootStore } from '@root/stores';
import React from 'react';

const RootStoreContext = React.createContext<RootStore | null>(null);

const RootStoreProvider: React.FC<{ rootStore: RootStore }> = ({ children, rootStore }) => {
  return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>;
};

function useRootStore(): RootStore {
  const store = React.useContext(RootStoreContext);

  if (!store) {
    throw new Error('useRootStore() must be used within <RootStoreProvider>');
  }

  return store;
}

export { RootStoreProvider, useRootStore };
