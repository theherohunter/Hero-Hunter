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

configureMobx({ useProxies: 'never', enforceActions: 'never' });

if (!appConfig.isProd) {
  window.toJS = toJS;
}

ReactDOM.render(<RootPage />, document.getElementById('app'));
