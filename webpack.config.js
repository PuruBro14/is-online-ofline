const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry file of your package
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
    libraryTarget: "umd", // Format of the library
    library: "MyLibrary", // Name of your library
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel only to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use Babel loader
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Presets for transpiling
          },
        },
      },
    ],
  },
};
