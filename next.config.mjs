/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "scaling-cod-g66jw4j4v6xf9gpp-3000.app.github.dev",
        "localhost:3000",
        "chapters-as-tasks.vercel.app",
      ],
    },
  },
};

export default nextConfig;
