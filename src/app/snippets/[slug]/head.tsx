import { allCodeSnippets } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";
import { getPostSlug } from "./page";

export default function CodeSnippetsHead({ params }: { params: { slug: string } }) {
  const snippet = allCodeSnippets.find((snippet) => getPostSlug(snippet) === params.slug);

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
      openGraph={{
        article: {
          publishedTime: snippet.createdAt,
        },
        title: pageTitle,
        description: pageDescription,
      }}
      canonical={`https://caspertheghost.me/snippets/${getPostSlug(snippet)}`}
      title={pageTitle}
      description={pageDescription}
      additionalMetaTags={[{ name: "keywords", content: keywords.join(", ") }]}
    />
  );
}
