import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "gos3.ibcdn.com" },
      { protocol: "https", hostname: "assets.hotel.check24.de" },
      { protocol: "https", hostname: "media.easemytrip.com" },
      { protocol: "https", hostname: "img.easemytrip.com" },
    ],
  },
};

export default nextConfig;
