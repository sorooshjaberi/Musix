/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    NEXT_PUBLIC_APP_TITLE : "Musix"
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
