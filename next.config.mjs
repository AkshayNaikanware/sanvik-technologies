/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
    output: "export",
    basePath:"/sanviktechnologies",
     trailingSlash: true,
      images: {
    unoptimized: true,
  },
}

export default nextConfig
