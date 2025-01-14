const HTMLWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: [
        './src/js/router.js',
        './index.html',
        './src/scss/main.scss'
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ "style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.html$/,
                use: [ "html-loader"]
            },
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]'
                },
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html' 
        }),
        // new MiniCssExtractPlugin({
        //     filename: 'main.css' 
        // }),

    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
}