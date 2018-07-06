const path = require('path');
const plugins = require('./plugins');
const rules = require('./rules');

const {
    PATH_DIST,
    PATH_SOURCE,
} = require('./webpack.config');

module.exports = {
    mode: 'production',

    entry: {
        app: path.join(PATH_SOURCE, 'index.js'),
    },

    output: {
        path: PATH_DIST,
        filename: 'js/[name].min.js',
        publicPath: '/',
    },

    optimization: {
        minimizer: [
            plugins.uglify,
            plugins.cssoptimise,
        ],
    },

    module: {
        rules: [
            rules.scss.production,
            rules.jsx,
        ],
    },

    plugins: [
        plugins.core,
        plugins.clean,
        plugins.html,
        plugins.copy,
        plugins.css,
    ],
};
