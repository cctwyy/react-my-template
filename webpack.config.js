module.exports = {
  entry: "./src/index.js",
  output: {
	  path: "./dist",
	  filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  },
  devServer: {
    contentBase: "./src",
    publicPath: "/assets"
  }
};
