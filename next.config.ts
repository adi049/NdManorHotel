import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/NdManorHotel",
  images: { unoptimized: true },
};

export default nextConfig;
