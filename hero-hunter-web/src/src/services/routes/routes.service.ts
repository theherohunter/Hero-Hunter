import { RoutesConfig } from './routes.config';

export const routesConfig: RoutesConfig = {
  root: {
    path: () => '/',
  },

  notFound: {
    path: () => '/not-found',
  },
};
