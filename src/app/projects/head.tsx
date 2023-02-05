import { mergeKeywords } from "lib/merge-keywords";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS, SEO } from "next-seo.config";

export const pageTitle = "Projects - Casper Iversen";
export const pageDescription = "A list of my projects that I'm proud of.";

export default function ProjectsHead() {
  return (
    <NextSeo
      useAppDir
      {...SEO}
      openGraph={{
        ...SEO.openGraph,
        title: pageTitle,
        description: pageDescription,
      }}
      canonical="https://caspertheghost.me/projects"
      title={pageTitle}
      description={pageDescription}
      additionalMetaTags={mergeKeywords({
        keywords: [
          ...DEFAULT_KEYWORDS,
          "projects casper iversen",
          "caspertheghost projects",
          "react hooks",
        ],
        metaTags: SEO.additionalMetaTags,
      })}
    />
  );
}
