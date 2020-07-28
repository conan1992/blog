const webpack = require("webpack");
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const No1WebpackPlugin = require("./plugins/no1-webpack-plugin")
const config = {
    entry: "./src/index.js",
    output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[hash].bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "自定义插件学习"
        }),
        new CleanWebpackPlugin(),
        new No1WebpackPlugin({msg: "using hooks"})
        //new No2WebpackPlugin({msg: "using hooks"})
        //new FileListWebpackPlugin()
        //new WatchWebpackPlugin()
    ]
}
module.exports = config;