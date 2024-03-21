/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "metalmaf.cl"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
