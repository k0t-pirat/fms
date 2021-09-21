const path = require('path')
const WebpackShellPlugin = require('webpack-shell-plugin-next')

const shellPlugin = new WebpackShellPlugin({
  onBuildEnd: {
    scripts: [
      'cp -r img/ www/',
      'cp index.html www/'
    ]
  }
})

module.exports = {
  output: {
    path: path.resolve(__dirname, 'www/dist'),
    filename: 'main.js',
  },
  mode: 'development',
  module: {
    rules: [ 
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [shellPlugin],
}

