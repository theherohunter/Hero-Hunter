// For IE (https://formatjs.io/docs/react-intl/#runtime-requirements), uncomment if needed
// import '@formatjs/intl-pluralrules/polyfill';
// import '@formatjs/intl-relativetimeformat/polyfill';

import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';

import { getFlattenL10nByLocale, Locales } from '../../services';

export const L10nProvider: React.FC<{ locale: Locales }> = ({ children, locale }) => {
  useEffect(() => {
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={getFlattenL10nByLocale(locale)} textComponent="span">
      {children}
    </IntlProvider>
  );
};
