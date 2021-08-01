import { Locales } from '@root/services';
import { RootStore } from '@root/stores';
import React from 'react';

import { L10nProvider } from '../l10n-provider';
import { RootStoreProvider } from '../root-store-provider';

// TODO: add l10n store. Language should be selectable
export const RootProviders: React.FC<{ rootStore: RootStore }> = ({ children, rootStore }) => {
  return (
    <RootStoreProvider rootStore={rootStore}>
      <L10nProvider locale={Locales.En}>{children}</L10nProvider>
    </RootStoreProvider>
  );
};
