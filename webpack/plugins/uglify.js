const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = new UglifyWebpackPlugin({
    uglifyOptions: {
        output: {
            comments: false,
            beautify: false,
        },
    },
});
