var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
    	main:'./src/skills.html'
    },
	output: {
		filename: './dist/index.html',
	},
    entry: {
        main:'./src/css/mian.css'
    },
    output: {
        filename: './dist/css/main.css',
    },
	module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname,'node_modules'),
                include: path.resolve(__dirname,'src'),
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            },
            {
            	test:/\.css$/,
            	loaders: [
                    "style-loader", 
                    "css-loader?importLoaders=1", 
                    {
                      loader: "postcss-loader"
                    }
                ]
            },
            {
            	test:/\.less$/,
            	loaders: [
                    "style-loader", 
                    "css-loader", 
                    {
                      loader: "postcss-loader"
                    },
                    "less-loader"
                ]
            },
            {
            	test:/\.scss$/,
            	loaders: [
                    "style-loader", 
                    "css-loader", 
                    "postcss-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                loaders: [
                  'url-loader?limit: 1000&name=assets/[name]-[hash:5].[ext]',
                  'image-webpack-loader'
                ]
            },
        ]
    },
	plugins: [
	  new htmlWebpackPlugin({
	  	filename: './dist/index.html',
	  	template: './src/skills.html',
	  	inject: 'body'
	  })
	]
}