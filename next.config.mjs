/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "scaling-cod-g66jw4j4v6xf9gpp-3000.app.github.dev",
        "localhost:3000",
      ],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn3.emoji.gg",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
