const path = require('path');

const nodeDir = `${__dirname}/node_modules`;

const commonLoaders = [
  {
    test: /\.jsx|\.js$/,
    exclude: /node_modules/,
    use: 'babel-loader',
  },
];

module.exports = [
  {
    // The configuration for the client
    name: 'client-side rendering',
    context: path.resolve(__dirname),
    entry: './src/client/app-router.jsx',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist/public'),
    },
    module: {
      loaders: commonLoaders,
    },
  },
  {
    // The configuration for the server-side rendering
    name: 'server-side rendering',
    entry: './src/server/server.js',
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: './public',
      filename: 'server.generated.js',
      libraryTarget: 'commonjs2',
    },
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false,
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
      noParse: [
        `${nodeDir}/react/react.min.js`,
        `${nodeDir}/react/react-dom.min.js`,
      ],
      rules: commonLoaders,
    },
  },
];
