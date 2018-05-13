const path = require('path');

module.exports = {
    entry: './app.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
};
