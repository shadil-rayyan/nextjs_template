import type { NextConfig } from "next";

const nextConfig: NextConfig = {
async headers() {
    return [
      {
        source: "/(.*)", // applies to all routes
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/api/:path*", // applies only to API routes
        headers: [
          { key: "Cache-Control", value: "no-store" },
        ],
      },
    ];
  },
};

export default nextConfig;
