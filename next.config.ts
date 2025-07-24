import type { NextConfig } from "next";

const isGitHub = process.env.DEPLOY_TARGET === "github";

const basePath = isGitHub ? "/samuelbrooke.com" : "";
const assetPrefix = isGitHub ? "/samuelbrooke.com/" : "/";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  trailingSlash: true,
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
