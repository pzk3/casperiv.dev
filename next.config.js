module.exports = {
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
