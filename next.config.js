
const path = require('path');
const withImages = require('next-images');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = {
  withBundleAnalyzer: withBundleAnalyzer(),
  withImages: withImages({
  exclude: path.resolve(__dirname, "public/images/svg"),
  webpack(config, options) {
    return config
  }
})
}
