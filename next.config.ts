import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGitHubPages ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  assetPrefix: isGitHubPages ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : "",
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
