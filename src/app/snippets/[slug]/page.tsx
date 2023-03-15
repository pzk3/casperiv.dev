import { BlogFooter } from "components/blog/blog-footer";
import { BlogHeader } from "components/blog/blog-header";
import { Markdown } from "components/blog/markdown/markdown";
import { allCodeSnippets } from "contentlayer/generated";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getCodeSnippet } from "lib/mdx/get-code-snippet";
import { mergeSeo } from "lib/merge-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";
import { notFound } from "next/navigation";

interface CodeSnippetsSlugPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: CodeSnippetsSlugPageProps) {
  const item = getCodeSnippet(params.slug);

  if (!item) {
    return {};
  }

  return mergeSeo({
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `https://caspertheghost.me/snippets/${getArticleSlug(item)}`,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      publishedTime: item.createdAt,
      type: "article",
      modifiedTime: item.updatedAt,
    },
    twitter: {
      title: item.title,
      description: item.description,
    },
    keywords: [...DEFAULT_KEYWORDS, "snippets casper iversen", ...(item.keywords ?? [])],
  });
}

export default async function CodeSnippetsSlugPage({ params }: CodeSnippetsSlugPageProps) {
  const item = getCodeSnippet(params.slug);

  if (!item) {
    return notFound();
  }

  return (
    <>
      <BlogHeader post={item} />
      <Markdown code={item.body.code} />
      <BlogFooter post={item} />
    </>
  );
}

export async function generateStaticParams() {
  return allCodeSnippets.map((snippet) => ({
    slug: getArticleSlug(snippet),
  }));
}
