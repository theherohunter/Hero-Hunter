import { RootStore } from '@root/stores';
import { injectionTokens } from '@root/types';
import { Container } from 'inversify';
import { buildProviderModule } from 'inversify-binding-decorators';

const injector = new Container({ defaultScope: 'Singleton' });

function setupInjector() {
  // services, stores
  injector.load(buildProviderModule());

  // TODO: it cannot be resolved automatically because bundler not see a direct reference. Try to fix it later
  injector.bind(injectionTokens.rootStore).to(RootStore);

  // values
  //   injector.bind(injectionTokens.localStorage).toConstantValue(localStorage);

  // factories
  injector.bind(injectionTokens.lazyRootStore).toFactory<RootStore>(({ container }) => {
    return () => {
      return container.get(injectionTokens.rootStore);
    };
  });
}

export { injector, setupInjector };
