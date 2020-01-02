const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    output: {
        path: path.resolve(__dirname, './../build'),
        filename: 'bundle.min.js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'index.html', filename: 'test.html' }),
        new VueLoaderPlugin()
    ],
}