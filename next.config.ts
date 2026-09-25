import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/learn/how-pm-begins",
        destination: "/learn/product/how-pm-begins",
        permanent: true,
      },
      {
        source: "/learn/how-to-read-pm",
        destination: "/learn/product/how-to-read-pm",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
