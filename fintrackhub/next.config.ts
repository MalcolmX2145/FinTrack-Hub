/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
  },
  turbopack: {
    root: __dirname, // explicitly sets root to current folder
  },
  images: {
    domains: ['images.unsplash.com', 'logo.clearbit.com'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig
