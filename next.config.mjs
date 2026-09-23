/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
    output: "export",
 basePath: '/sanvik-technologies',
  assetPrefix: '/sanvik-technologies/',
     trailingSlash: true,
      images: {
    unoptimized: true,
  },
}

export default nextConfig
