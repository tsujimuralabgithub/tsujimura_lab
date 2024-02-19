/** @type {import('next').NextConfig} */
const withLinaria = require('next-with-linaria')

const SUB_DIRECTORY = '/tsujimura'
const isProd = true

const nextConfig = {
  basePath: isProd ? SUB_DIRECTORY : '',
  assetPrefix: './',
  publicRuntimeConfig: {
    basePath: isProd ? SUB_DIRECTORY : ''
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack'
        }
      ]
    })
    return config
  },
  images: {
    disableStaticImages: true,
    unoptimized: true
  }
}

module.exports = withLinaria(nextConfig)
