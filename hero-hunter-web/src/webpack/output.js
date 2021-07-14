/* eslint-disable @typescript-eslint/no-var-requires */
const { paths, ifProduction } = require('./utils');

const output = {
  path: paths.build,
  filename: ifProduction('[name].[contenthash].bundle.js', '[name].bundle.js'),
  publicPath: paths.publicPath,
};

module.exports = { output };
