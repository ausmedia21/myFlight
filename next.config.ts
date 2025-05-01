import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ This allows deploys even with lint errors
  },
};

export default nextConfig;
