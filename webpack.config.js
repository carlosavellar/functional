const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/app.bandle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: true,
            title: 'Eu sou foda pra Caralho, sou Jsx Funcional',
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/js'),
        compress: true,
        port: 9000,
    },
};
