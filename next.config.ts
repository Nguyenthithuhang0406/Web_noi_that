import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/home/livingRoom",
      permanent: true, // Hoặc false nếu chỉ muốn tạm thời
    },
  ],
  /* config options here */
};

export default nextConfig;
