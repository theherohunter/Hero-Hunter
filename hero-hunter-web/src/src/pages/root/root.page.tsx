import React from 'react';

import { routesConfig } from '@root/services';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MainPage } from '../main';
import { NotFoundPage } from '../errors';
import { Navigation } from '@root/components';

const Layout: React.FC = ({ children }) => (
  <Router>
    <Navigation />
    {children}
  </Router>
);

const RootRoutes: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path={routesConfig.root.path()} component={MainPage} />

        <Route path={routesConfig.notFound.path()} component={NotFoundPage} />

        <Redirect to={routesConfig.notFound.path()} />
      </Switch>
    </Layout>
  );
};

export const RootPage: React.FC = () => {
  return <RootRoutes />;
};
