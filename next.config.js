/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compress: true,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  experimental: {
    optimizePackageImports: ['react-icons', 'lucide-react'],
  },
  webpack: (config, { isServer }) => {
    config.optimization.minimize = true;
    return config;
  },
}

module.exports = nextConfig
