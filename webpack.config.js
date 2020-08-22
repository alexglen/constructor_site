const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, "src"),
	entry: "./index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "development",
	devServer: {
		port: 4100,
	},
	resolve: {
		extensions: [".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
};
