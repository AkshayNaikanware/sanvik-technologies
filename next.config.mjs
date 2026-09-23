/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  basePath: process.env.NODE_ENV === 'production' ? '/sanvik-technologies' : '',
}

export default nextConfig
