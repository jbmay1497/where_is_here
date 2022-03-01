module.exports = {
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/v2': {
        target: 'https://api.geodatasource.com',
        changeOrigin: true,
        secure: false
      },
    }
  }
};
