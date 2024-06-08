const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const { THEME } = require('./blog.config')
const fs = require('fs')
const path = require('path')

/**
 * Scans the folder names in the specified directory to get how many topics there are
 * @param {*} directory
 * @returns
 */
function scanSubdirectories(directory) {
  const subdirectories = []

  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file)
    const stats = fs.statSync(fullPath)

    // The landing theme is special and does not appear in the switchable theme
    if (stats.isDirectory() && file !== 'landing') {
      subdirectories.push(file)
    }
  })

  return subdirectories
}
// Scan the directory name under /themes
const themes = scanSubdirectories(path.resolve(__dirname, 'themes'))
module.exports = withBundleAnalyzer({
  images: {
    // Image compression
    formats: ['image/avif', 'image/webp'],
    // Images that allow next/image to load domain names
    domains: [
      'gravatar.com',
      'www.notion.so',
      'avatars.githubusercontent.com',
      'images.unsplash.com',
      'source.unsplash.com',
      'p1.qhimg.com',
      'webmention.io'
    ]
  },
  // By default, the feed is redirected to /public/rss/feed.xml
  async redirects() {
    return [
      {
        source: '/feed',
        destination: '/rss/feed.xml',
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/:path*.html',
        destination: '/:path*'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      }
    ]
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    // if (!dev && !isServer) {
    //   Object.assign(config.resolve.alias, {
    //     react: 'preact/compat',
    //     'react-dom/test-utils': 'preact/test-utils',
    //     'react-dom': 'preact/compat'
    //   })
    // }

    // Dynamic Theme: Add a resolve.alias configuration to map dynamic paths to actual paths
    config.resolve.alias['@theme-components'] = path.resolve(__dirname, 'themes', THEME)
    return config
  },
  experimental: {
    scrollRestoration: true
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    // Ignore /pages/sitemap.xml.js when exporting, otherwise the error getServerSideProps will be reported
    const pages = { ...defaultPathMap }
    delete pages['/sitemap.xml']
    return pages
  },
  publicRuntimeConfig: { // The configuration here can be obtained both on the server side and on the browser side
    NODE_ENV_API: process.env.NODE_ENV_API || 'prod',
    THEMES: themes
  }
})
