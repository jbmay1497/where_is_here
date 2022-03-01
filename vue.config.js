module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api/landlocation': {
        target: 'https://api.3geonames.org',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api/landlocation': ''
        }
      },
    }
  }
};
