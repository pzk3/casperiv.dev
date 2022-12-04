import { BlogFooter } from "components/blog/blog-footer";
import { BlogHeader } from "components/blog/blog-header";
import { Markdown } from "components/blog/markdown/markdown";
import { allBlogPosts } from "contentlayer/generated";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getBlogPost } from "lib/mdx/get-blog-post";
import { notFound } from "next/navigation";

interface CodeSnippetsSlugPageProps {
  params: { slug: string };
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
