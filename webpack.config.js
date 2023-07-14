const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules'
        ] 
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'historia.html',
            template: './src/pages/historia.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'kontakt.html',
            template: './src/pages/kontakt.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'prawo.html',
            template: './src/pages/prawo.html'
        }),
    ],
}