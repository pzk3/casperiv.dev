declare namespace NodeJS {
  export interface ProcessEnv {
    EMAIL_USERNAME: string;
    EMAIL_PASSWORD: string;
    EXTRA_EMAIL: string;
    NEXT_PUBLIC_GITHUB_PROFILE_URL: string;
    NEXT_PUBLIC_TWITTER_PROFILE_URL: string;
    NEXT_PUBLIC_LINKEDIN_PROFILE_URL: string;
    NEXT_PUBLIC_YOUTUBE_REDIRECT_URL: string;
    NEXT_PUBLIC_CONTACT_URL: string;
  }
}
