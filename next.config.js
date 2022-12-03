const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  cleanDistDir: true,
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/casper124578",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/dev-caspertheghost",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/casper-iversen",
        permanent: true,
      },
      {
        source: "/uses",
        destination: "/blog/my-uses",
        permanent: true,
      },
      {
        source: "/markdown",
        destination: "/utils/md-html",
        permanent: true,
      },
      {
        source: "/per",
        destination: "/utils/percentage-calculator",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
