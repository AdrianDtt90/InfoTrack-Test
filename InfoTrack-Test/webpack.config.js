var path = require('path');

module.exports = {
    mode: 'development',
    entry: "./Scripts/jsx/index.jsx",
    output: {
        path: path.resolve(__dirname, "./Scripts/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};