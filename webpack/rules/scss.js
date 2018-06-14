const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    dev: {
        test: /\.scss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
    },
    production: {
        test: /\.scss$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
        ],
    },
};
