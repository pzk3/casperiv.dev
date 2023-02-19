import { BlogFooter } from "components/blog/blog-footer";
import { BlogHeader } from "components/blog/blog-header";
import { Markdown } from "components/blog/markdown/markdown";
import { allBlogPosts } from "contentlayer/generated";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getBlogPost } from "lib/mdx/get-blog-post";
import { notFound } from "next/navigation";
import { DEFAULT_KEYWORDS } from "next-seo.config";

interface CodeSnippetsSlugPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: CodeSnippetsSlugPageProps) {
  const item = getBlogPost(params.slug);

  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `https://caspertheghost.me/blog/${getArticleSlug(item)}`,
    },
    openGraph: {
      title: item.title,
      description: item.description,
    },
    twitter: {
      title: item.title,
      description: item.description,
    },
    keywords: [
      ...DEFAULT_KEYWORDS,
      "blog casper iversen",
      "caspertheghost blog",
      ...(item.keywords ?? []),
    ],
  };
}

export default async function CodeSnippetsSlugPage({ params }: CodeSnippetsSlugPageProps) {
  const item = getBlogPost(params.slug);

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
  return allBlogPosts.map((snippet) => ({
    slug: getArticleSlug(snippet),
  }));
}
