import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/monyul",
  assetPrefix: "/monyul/",
  trailingSlash: true,
};

export default nextConfig;
