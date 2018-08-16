const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /^((?!\.plugin.).)*(css|scss|sass)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "../"),
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            query: {
              // localIdentName: '[hash:20]',
              localIdentName: '[local]--[hash:base64:5]',
              modules: true,
              minimize: false
            }
          },
          'sass-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      "styles": path.resolve(__dirname, '../styles')
    },
    extensions: ['.js', '.sass', '.svg']
  }
};
