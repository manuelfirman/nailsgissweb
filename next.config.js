/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NEXT_PUBLIC_CLOUDFRONT_URL || '/',
    images: {
      unoptimized: true,
    },
}

module.exports = nextConfig
