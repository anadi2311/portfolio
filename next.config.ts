import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
