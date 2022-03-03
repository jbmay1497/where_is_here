module.exports = {
  transpileDependencies: true,
  devServer: {
    //API https://api.3geonames.org does not have CORS enabled to proxying through Vue's dev server is necessary
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
