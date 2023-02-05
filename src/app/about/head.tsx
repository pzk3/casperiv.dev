import { NextSeo } from "next-seo";
import { SEO } from "next-seo.config";

export const pageTitle = "About - Casper Iversen";
export const pageDescription = "Get to know more about me and some of my accomplishments.";

export default function AboutHead() {
  return (
    <NextSeo
      useAppDir
      {...SEO}
      openGraph={{
        ...SEO.openGraph,
        title: pageTitle,
        description: pageDescription,
      }}
      canonical="https://caspertheghost.me/about"
      title={pageTitle}
      description={pageDescription}
    />
  );
}
