/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { removeEmpty } = require('webpack-config-utils');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const { paths, ifProduction, ifDevelopment } = require('./utils');

function getPlugins() {
  return removeEmpty([
    ifDevelopment(
      new ForkTsCheckerWebpackPlugin({
        async: false,
        formatter: {
          type: 'codeframe',
          options: {
            forceColor: true,
          },
        },
        typescript: true,
      }),
    ),
    ifDevelopment(new CircularDependencyPlugin({ exclude: paths.nodeModules, failOnError: true })),
    ifDevelopment(new LiveReloadPlugin({ protocol: 'http', appendScriptTag: true, port: 0 })),
    ifDevelopment(new WebpackBar()),

    // TODO: uncomment and run `npm run build:prod` when bundle analyze required
    // ifProduction(new BundleAnalyzerPlugin()),

    new webpack.DefinePlugin({
      'process.env': {
        isProd: JSON.stringify(ifProduction(true, false)),
      },
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendors', 'app'],
      template: paths.appTemplateHtml,
      filename: paths.appHtml,
    }),
    // ifProduction(
    //   new HtmlWebpackPlugin({
    //     chunks: ['vendors', 'serverError'],
    //     filename: paths.serverErrorHtml,
    //     template: paths.staticErrorTemplateHtml,
    //   }),
    // ),
    // ifProduction(
    //   new HtmlWebpackPlugin({
    //     chunks: ['vendors', 'maintenanceError'],
    //     filename: paths.maintenanceErrorHtml,
    //     template: paths.staticErrorTemplateHtml,
    //   }),
    // ),

    new CleanWebpackPlugin(),
  ]);
}

module.exports = { getPlugins };
