import 'core-js/es';
import 'core-js/stable';
import 'reflect-metadata';
import 'normalize.css';
import './index.less';

import { appConfig } from '@root/consts';
import { configure as configureMobx, toJS } from 'mobx';
import React from 'react';
import ReactDOM from 'react-dom';

import { RootPage } from './pages';
import { RootProviders } from './components';
import { injector, setupInjector } from './injector';
import { injectionTokens } from './types';

configureMobx({ useProxies: 'never', enforceActions: 'never' });

setupInjector();

if (!appConfig.isProd) {
  window.toJS = toJS;
}

ReactDOM.render(
  <RootProviders rootStore={injector.get(injectionTokens.rootStore)}>
    <RootPage />
  </RootProviders>,
  document.getElementById('app'),
);
