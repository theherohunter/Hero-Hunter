import { useMemo } from 'react';
import { IntlShape, useIntl } from 'react-intl';

import { getL10nByLocale, L10Dictionary, Locales } from '../../l10n';

export function useL10n(): IntlShape & { dictionary: L10Dictionary } {
  const intl = useIntl();

  const dictionary = useMemo(() => getL10nByLocale(intl.locale as Locales), [intl.locale]);

  return { ...intl, dictionary };
}
