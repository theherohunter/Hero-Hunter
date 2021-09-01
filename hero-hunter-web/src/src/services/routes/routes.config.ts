export interface Route {
  path: (...args: any[]) => string;
}

export interface RoutesConfig {
  root: Route;

  notFound: Route;
}
