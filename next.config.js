const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps({
  distDir: 'dist/next',
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false,
  },
  reactStrictMode: false,
});
