import { BlogFooter } from "~/components/blog/blog-footer";
import { BlogHeader } from "~/components/blog/blog-header";
import { Markdown } from "~/components/blog/markdown/markdown";
import { allBlogPosts } from "contentlayer/generated";
import { getArticleSlug } from "~/lib/mdx/get-article-slug";
import { getBlogPost } from "~/lib/mdx/get-blog-post";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { mergeSeo } from "~/lib/merge-seo";

interface CodeSnippetsSlugPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: CodeSnippetsSlugPageProps): Metadata {
  const item = getBlogPost(params.slug);

  if (!item) {
    return {};
  }

  return mergeSeo({
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `https://casperiv.dev/blog/${getArticleSlug(item)}`,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      publishedTime: item.createdAt,
      type: "article",
      modifiedTime: item.updatedAt,
      images: [{ url: `https://casperiv.dev/api/og?title=${item.title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: [`https://casperiv.dev/api/og?title=${item.title}`],
    },
    keywords: ["blog casper iversen", "blog", ...(item.keywords ?? [])],
  });
}

export default function CodeSnippetsSlugPage({ params }: CodeSnippetsSlugPageProps) {
  const item = getBlogPost(params.slug);

  if (!item) {
    return notFound();
  }

  return (
    <main>
      <BlogHeader post={item} />
      <article className="max-w-6xl mx-auto pb-6 px-5 md:px-0">
        <Markdown code={item.body.code} />
      </article>
      <BlogFooter post={item} />
    </main>
  );
}

export function generateStaticParams() {
  return allBlogPosts.map((snippet) => ({
    slug: getArticleSlug(snippet),
  }));
}
