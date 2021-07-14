/* eslint-disable @typescript-eslint/no-var-requires */
const { getPlugins } = require('./plugins');
const { getLoaders } = require('./loaders');
const { inputs } = require('./input');
const { output } = require('./output');
const { resolve, devtool, splitChunks, performance, mode, stats, devServer } = require('./utils');

module.exports = () => {
  return {
    entry: inputs,
    output,
    mode,
    resolve,
    devtool,
    stats,
    devServer,
    optimization: {
      splitChunks,
    },
    performance,
    module: {
      rules: getLoaders(),
    },
    plugins: getPlugins(),
  };
};
