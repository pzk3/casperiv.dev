import { BlogFooter } from "components/blog/blog-footer";
import { BlogHeader } from "components/blog/blog-header";
import { Markdown } from "components/blog/markdown/markdown";
import { allCodeSnippets } from "contentlayer/generated";
import { notFound } from "next/navigation";

interface CodeSnippetsSlugPageProps {
  params: { slug: string };
}

async function getCodeSnippet(slug: string) {
  return allCodeSnippets.find((snippet) => getPostSlug(snippet) === slug);
}

export default async function CodeSnippetsSlugPage({ params }: CodeSnippetsSlugPageProps) {
  const item = await getCodeSnippet(params.slug);

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
    slug: getPostSlug(snippet),
  }));
}

// todo: move to utils file
export function getPostSlug(post: { _raw: { sourceFileName: string } }) {
  return post._raw.sourceFileName.replace(/\.md(x)?/, "");
}
