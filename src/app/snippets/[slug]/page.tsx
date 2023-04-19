import { BlogFooter } from "components/blog/blog-footer";
import { BlogHeader } from "components/blog/blog-header";
import { Markdown } from "components/blog/markdown/markdown";
import { allCodeSnippets } from "contentlayer/generated";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getCodeSnippet } from "lib/mdx/get-code-snippet";
import { mergeSeo } from "lib/merge-seo";
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
    keywords: ["snippets casper iversen", ...(item.keywords ?? [])],
  });
}

export default async function CodeSnippetsSlugPage({ params }: CodeSnippetsSlugPageProps) {
  const item = getCodeSnippet(params.slug);

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
  return allCodeSnippets.map((snippet) => ({
    slug: getArticleSlug(snippet),
  }));
}
