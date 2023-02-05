import { mergeKeywords } from "lib/merge-keywords";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS, SEO } from "next-seo.config";

const pageTitle = "Code snippets - Casper Iversen";
const pageDescription = "Small code snippets that I have found useful or use a lot.";

export default function CodeSnippetsHead() {
  return (
    <NextSeo
      useAppDir
      {...SEO}
      openGraph={{
        ...SEO.openGraph,
        title: pageTitle,
        description: pageDescription,
      }}
      canonical="https://caspertheghost.me/snippets"
      title={pageTitle}
      description={pageDescription}
      additionalMetaTags={mergeKeywords({
        keywords: [...DEFAULT_KEYWORDS, "code snippets", "code examples", "react hooks"],
        metaTags: SEO.additionalMetaTags,
      })}
    />
  );
}
