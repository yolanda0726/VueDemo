const path = require('path')

module.exports = function(env, args) {
    env = env || {};

    return {
        entry: ['babel-polyfill', './src/index.js'],

        module: {
            rules: [
                { test: /\.vue$/i, use: 'vue-loader' },
                { test: /\.js$/i, use: 'babel-loader', exclude: /node_modules/ },
                { test: /\.css$/i, use: ['style-loader', 'css-loader'] }
            ]
        },
        resolve: {
            extensions: ['.vue', '.js'],
            alias: {
                'vue': 'vue/dist/vue.esm',
                '@': path.resolve(__dirname, 'src/components')
            }
        },
        ...env.development ? require('./config/webpack.development') : require('./config/webpack.production')
    }
}