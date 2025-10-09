/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.shopsmaart.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
