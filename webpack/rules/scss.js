const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    dev: {
        test: /\.(sa|sc|c)ss$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
    },
    production: {
        test: /\.(sa|sc|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
        ],
    },
};
