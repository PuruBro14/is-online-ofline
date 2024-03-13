const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry file of your project
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "bundle.js", // Output file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply Babel to JavaScript and JSX files
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
