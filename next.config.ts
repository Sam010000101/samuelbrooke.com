import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH + "/" : "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aucs.com",
        pathname: "/assets**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
