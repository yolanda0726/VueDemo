const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    output: {
        path: path.resolve(__dirname, 'devdir'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html', filename: 'index.html' }),
        new VueLoaderPlugin()
    ],
    devtool: 'source-map'
}