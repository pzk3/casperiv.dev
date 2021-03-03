module.exports = {
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: process.env.NEXT_PUBLIC_TWITTER_PROFILE_URL,
        permanent: true,
      },
      {
        source: "/github",
        destination: process.env.NEXT_PUBLIC_GITHUB_PROFILE_URL,
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: process.env.NEXT_PUBLIC_LINKEDIN_PROFILE_URL,
        permanent: true,
      },
      {
        source: "/youtube",
        destination: process.env.NEXT_PUBLIC_YOUTUBE_REDIRECT_URL,
        permanent: true,
      },
    ];
  },
};
