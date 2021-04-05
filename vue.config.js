module.exports = {
  productionSourceMap: false,
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/2020-reporter-impact-report/'
    : '/',
};
