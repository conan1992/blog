const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "src/main.js"),
    plugins: [new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: "布加拉提",
            template: "./index.html"
        })
    ],
    module: {
        rules: [{
            test: /.vue$/,
            loader: "vue-loader"
        },{
            test: /.css$/,
            loader: "css-loader"
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: [
            'file-loader'
            ]
        }
        
        ]
    }
}