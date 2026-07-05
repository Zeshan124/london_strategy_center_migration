/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals ?? []), "@heygen/liveavatar-web-sdk"];
    }
    return config;
  },
};

export default nextConfig;
