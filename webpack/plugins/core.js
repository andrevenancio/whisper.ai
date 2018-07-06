const webpack = require('webpack');

const { VERSION } = require('../webpack.config.js');

module.exports = new webpack.DefinePlugin({
    __VERSION__: JSON.stringify(VERSION),
    __NODE_ENV__: JSON.stringify(process.env.NODE_ENV || 'development'),
    __API__: JSON.stringify(process.env.NODE_ENV === 'production' ? '/' : '//0.0.0.0:8080/'),
    __PRODUCTION__: process.env.NODE_ENV === 'production',
});
