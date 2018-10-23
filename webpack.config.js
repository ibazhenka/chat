'use strict'
const path = require('path');
const webpack = require('webpack');
const devMode = true
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
 
module.exports = {
    entry: {
        lib: [hotMiddlewareScript],
        main:'./assets/main/index.js',
        }
    output: {
        filename: '[name].js',
        publicPath: '/static',
        
        path: path.resolve(__dirname, 'dist')
    }
    plugins: [
            new webpack.HotModuleReplacementPlugin()
        ],
};