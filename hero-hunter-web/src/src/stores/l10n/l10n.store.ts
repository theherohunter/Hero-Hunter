import { Locales } from '@root/services';
import { injectionTokens } from '@root/types';
import { provide } from 'inversify-binding-decorators';
import { action, makeObservable, observable } from 'mobx';

@provide(injectionTokens.l10nStore)
export class L10nStore {
  @observable
  locale = Locales[Locales.En];

  constructor() {
    makeObservable(this);
  }

  @action
  setLocal(locale: Locales) {
    this.locale = locale;
  }
}
