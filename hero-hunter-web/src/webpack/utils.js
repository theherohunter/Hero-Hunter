/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const path = require('path');
const { getIfUtils } = require('webpack-config-utils');

const nodeEnvs = ['production', 'development', 'test'];

const ENV = process.env.NODE_ENV;

if (!nodeEnvs.includes(ENV)) {
  throw new Error(`
      invalid NODE_ENV: ${ENV}
      valid values: ${nodeEnvs.toString()}
   `);
}

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath);
const paths = {
  root: resolvePath('.'),
  appSrc: resolvePath('src'),
  srcIndex: resolvePath('src/index.tsx'),

  build: resolvePath('./dist'),
  appHtml: resolvePath('./dist/index.html'),
  //   serverErrorHtml: resolvePath('./dist/server-error.html'),
  //   maintenanceErrorHtml: resolvePath('./dist/maintenance-error.html'),
  appTemplateHtml: resolvePath('public/app.template.html'),
  //   staticErrorTemplateHtml: resolvePath('public/static-error.template.html'),
  nodeModules: /node_modules/,
  publicPath: '/',
};

const resolve = {
  extensions: ['.tsx', '.ts', '.js'],
  alias: {
    '@root': paths.appSrc,
  },
};

const { ifDevelopment, ifProduction } = getIfUtils(ENV);

const stats = ifDevelopment('minimal', 'normal');

const devtool = ifDevelopment('cheap-module-source-map', 'hidden-source-map');

const mode = ifDevelopment('development', 'production');

const splitChunks = {
  cacheGroups: {
    commons: {
      test: /node_modules/,
      name: 'vendors',
      chunks: 'all',
    },
  },
};

const readFileIfExists = (filepath) => fs.existsSync(filepath) && fs.readFileSync(filepath);

const devServer = {
  contentBase: paths.build,
  historyApiFallback: true,
  port: 5005,
  https: true,
  key: readFileIfExists('./webpack/host-certificates/localhost-key.pem'),
  cert: readFileIfExists('./webpack/host-certificates/localhost.pem'),
  hot: true,
  open: true,
};

module.exports = {
  paths,
  resolvePath,
  ifDevelopment,
  ifProduction,
  resolve,
  stats,
  devtool,
  mode,
  splitChunks,
  devServer,
};
