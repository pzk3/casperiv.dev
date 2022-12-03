import { NextSeo } from "next-seo";

export const pageTitle = "About - Casper Iversen";
export const pageDescription = "Get to know more about me and some of my accomplishments.";

export default function AboutHead() {
  return (
    <head>
      <NextSeo
        useAppDir
        openGraph={{ title: pageTitle, description: pageDescription }}
        canonical="https://caspertheghost.me/about"
        title={pageTitle}
        description={pageDescription}
      />
    </head>
  );
}
