const webpack = require('webpack');

module.exports = {
   entry: [
      'script!jquery/dist/jquery.min.js',
      './app/app.jsx',
   ],
   externals: {
      jquery: 'jQuery',
   },
   plugins: [
      new webpack.ProvidePlugin({
         '$': 'jquery',
         'jQuery': 'jquery'
      })
   ],
   output: {
      path: __dirname,
      filename: './public/bundle.js'
   },
   resolve: {
      root: __dirname,
      // Aliases for components, it makes it easier to use them in project in  (require() we just pass in the name of coponent, not the whole path)
      alias: {
         Main: 'app/components/Main.jsx',
         applicationStyles: 'app/styles/app.scss'


      },
      // webpack will look for that kind of files
      extensions: ['','.js','.jsx'],
   },
   module: {
      loaders: [
         {
            loader: 'babel-loader',
            query: {
               presets: ['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
         }
      ]
   },
   // sourcemaps to js code:
   // If you are getting this error, try setting the value to either "inline-source-map" or "eval-source-map" instead.
   devtool: 'eval-source-map'
};
