import type { L10nStore } from '../l10n';
import { injectionTokens } from '@root/types';
import { inject, injectable } from 'inversify';

@injectable()
export class RootStore {
  constructor(@inject(injectionTokens.l10nStore) public l10nStore: L10nStore) {}
}
