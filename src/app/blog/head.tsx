import { mergeKeywords } from "lib/merge-keywords";
import { NextSeo } from "next-seo";
import { SEO, DEFAULT_KEYWORDS } from "next-seo.config";

const pageTitle = "Blog - Casper Iversen";
const pageDescription = "A list of my blog posts with how-to's and more!";

export default function BlogHead() {
  return (
    <NextSeo
      useAppDir
      {...SEO}
      openGraph={{
        ...SEO.openGraph,
        title: pageTitle,
        description: pageDescription,
      }}
      canonical="https://caspertheghost.me/blog"
      title={pageTitle}
      description={pageDescription}
      additionalMetaTags={mergeKeywords({
        keywords: [
          ...DEFAULT_KEYWORDS,
          "blog casper iversen",
          "caspertheghost blog",
          "react hooks",
        ],
        metaTags: SEO.additionalMetaTags,
      })}
    />
  );
}
