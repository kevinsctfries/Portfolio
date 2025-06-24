import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  experimental: {
    externalDir: true,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
});

export default withMDX(nextConfig);
