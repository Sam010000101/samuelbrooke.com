import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Optional: if your repo is a project page
  basePath: isProd ? "/samuelbrooke.com" : "",
  assetPrefix: isProd ? "/samuelbrooke.com" : "",
  // Optional: Remove trailing slashes if needed
  // trailingSlash: true,
};

export default nextConfig;
