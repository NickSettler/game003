const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.css/,
                use: 'css-loader'
            },
            {
                test: /\.tsx?/,
                use: 'ts-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3001,
        host: '0.0.0.0',
        proxy: {
            '/sw.js': 'http://192.168.88.13:3000/files/'
        }
    }
}
