'use strict';

/**
 * Created by Administrator on 2017-07-28.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractText = new ExtractTextPlugin('calendar.css', {
    allChunks: true
});

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/'
    },

    devServer: {
        contentBase: './public',
        port: 3001,
        hot: true
    },
    plugins: [extractText],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.sass$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        }, {
            test: /\.png$/,
            exclude: /node_modules/,
            use: ['file-loader?name=imgs/[name].[ext]']
        }]
    }

};

//# sourceMappingURL=webpack.dev-compiled.js.map