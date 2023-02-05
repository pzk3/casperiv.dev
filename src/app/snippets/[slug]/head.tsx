import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getCodeSnippet } from "lib/mdx/get-code-snippet";
import { mergeKeywords } from "lib/merge-keywords";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS, SEO } from "next-seo.config";

export default function CodeSnippetsHead({ params }: { params: { slug: string } }) {
  const snippet = getCodeSnippet(params.slug);

  if (!snippet) {
    return null;
  }

  // todo: make this a function
  const pageTitle = `${snippet.title} - Casper Iversen`;
  const pageDescription = snippet.intro;
  const keywords = [
    ...DEFAULT_KEYWORDS,
    "code snippets",
    "snippets casper iversen",
    ...(snippet.keywords ?? []),
  ];

  return (
    <NextSeo
      useAppDir
      {...SEO}
      openGraph={{
        ...SEO.openGraph,
        article: {
          authors: ["Casper Iversen"],
          publishedTime: snippet.createdAt,
          modifiedTime: snippet.updatedAt,
        },
        title: pageTitle,
        description: pageDescription,
      }}
      canonical={`https://caspertheghost.me/snippets/${getArticleSlug(snippet)}`}
      title={pageTitle}
      description={pageDescription}
      additionalMetaTags={mergeKeywords({
        keywords,
        metaTags: SEO.additionalMetaTags,
      })}
    />
  );
}
