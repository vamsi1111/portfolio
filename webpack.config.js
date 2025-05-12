const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'bundle.js'
},
module: {
rules: [
{
test: /\.scss$/,
use: ['style-loader', 'css-loader', 'sass-loader']
},
{
test: /\.css$/,
use: ['style-loader', 'css-loader']
},
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader'
}
}
]
},
plugins: [
new HtmlWebpackPlugin({
template: './public/index.html'
})
],
devServer: {
static: path.join(__dirname, 'dist'),
compress: true,
port: 8080,
open: true
},
mode: 'development'
};
