const path = require('path');

const {
    PATH_DIST,
    PATH_SOURCE,
} = require('./webpack.config');

const rules = require('./rules');
const plugins = require('./plugins');

module.exports = {
    mode: 'development',

    entry: {
        app: path.join(PATH_SOURCE, 'index.js'),
    },

    output: {
        path: PATH_DIST,
        filename: 'js/[name].js',
        publicPath: '/',
    },

    devtool: 'eval',

    devServer: {
        contentBase: PATH_DIST,
        hot: true,
        historyApiFallback: true,
        port: 8888,
    },

    module: {
        rules: [
            rules.scss.dev,
            rules.jsx,
        ],
    },

    plugins: [
        plugins.core,
        plugins.clean,
        plugins.html,
        plugins.copy,
        plugins.nmp,
        plugins.hmp,
    ],
};
