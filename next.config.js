require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ];

    return config;
  },
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: process.env.TWITTER_PROFILE_URL,
        permanent: true,
      },
      {
        source: "/github",
        destination: process.env.GITHUB_PROFILE_URL,
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: process.env.LINKEDIN_PROFILE_URL,
        permanent: true,
      },
      {
        source: "/youtube",
        destination: process.env.YOUTUBE_REDIRECT_URL,
        permanent: true,
      },
    ];
  },
};
