const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    devServer: {
        // The test webserver serves static files from the root directory.
        // It comes with CORS enabled (important for WorkAdventure to be able to load the map)
        static: {
            directory: ".",
            serveIndex: true,
            watch: true,
        },
        host: 'localhost',
        allowedHosts: "all",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};