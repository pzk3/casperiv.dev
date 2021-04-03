/* eslint-disable */
module.exports = {
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL || "https://twitter.com",
        permanent: true,
      },
      {
        source: "/github",
        destination: process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL || "https://github.com",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL || "https://linkedin.com",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: process.env.NEXT_PUBLIC_YOUTUBE_REDIRECT_URL || "https://youtube.com",
        permanent: true,
      },
      {
        source: "/uses",
        destination: "/blog/my-uses",
        permanent: true,
      },
    ];
  },
  future: {
    webpack5: true,
  },
};
