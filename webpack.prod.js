/**
 * Created by Administrator on 2017-08-02.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractText = new ExtractTextPlugin('son-calendar.min.css', {
    allChunks: true
});

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'son-calendar.min.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/',
        libraryTarget: 'umd',
        library: 'SonCalendar'
    },

    plugins: [
        extractText,
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })

    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                }
            },
            {
                test: /\.sass$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?-minimize', 'sass-loader']
                })
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                use: ['file-loader?name=imgs/[name].[ext]']
            }
        ]
    }

};