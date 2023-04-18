import { BlogFooter } from "components/blog/blog-footer";
import { BlogHeader } from "components/blog/blog-header";
import { Markdown } from "components/blog/markdown/markdown";
import { allBlogPosts } from "contentlayer/generated";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getBlogPost } from "lib/mdx/get-blog-post";
import { notFound } from "next/navigation";
import { DEFAULT_KEYWORDS } from "next-seo.config";
import { Metadata } from "next";
import { mergeSeo } from "lib/merge-seo";

interface CodeSnippetsSlugPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: CodeSnippetsSlugPageProps): Promise<Metadata> {
  const item = getBlogPost(params.slug);

  if (!item) {
    return {};
  }

  return mergeSeo({
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `https://caspertheghost.me/blog/${getArticleSlug(item)}`,
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
    keywords: [
      ...DEFAULT_KEYWORDS,
      "blog casper iversen",
      "caspertheghost blog",
      ...(item.keywords ?? []),
    ],
  });
}

export default async function CodeSnippetsSlugPage({ params }: CodeSnippetsSlugPageProps) {
  const item = getBlogPost(params.slug);

  if (!item) {
    return notFound();
  }

  return (
    <main>
      <BlogHeader post={item} />
      <section className="max-w-6xl mx-auto pb-6 px-5 md:px-0">
        <Markdown code={item.body.code} />
        <BlogFooter post={item} />
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return allBlogPosts.map((snippet) => ({
    slug: getArticleSlug(snippet),
  }));
}
