/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  fonts: {
    domains: ['fonts.googleapis.com'],
  },
  images: {
    domains: ["res.cloudinary.com","gateway.pinata.cloud"],
  },
}

module.exports = nextConfig
