const path = require("path");

module.exports = {
  mode: "development", // or 'production'
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-complex-component.js",
    libraryTarget: "window",
    library: "MyMicroFrontend",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: {
    react: "React",
    "styled-components": "styled",
  },
};
