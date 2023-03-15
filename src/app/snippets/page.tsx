import { ArticlesList } from "components/blog/articles-list";
import { allCodeSnippets } from "contentlayer/generated";
import { DEFAULT_KEYWORDS } from "next-seo.config";
import { mergeSeo } from "lib/merge-seo";

const pageTitle = "Code snippets";
const pageDescription = "Small code snippets that I have found useful or use a lot.";

export const metadata = mergeSeo({
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://caspertheghost.me/snippets",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
  },
  twitter: {
    title: pageTitle,
    description: pageDescription,
  },
  keywords: [...DEFAULT_KEYWORDS, "code snippets", "code examples", "react hooks"],
});

export default async function CodeSnippetsSlugPage() {
  return (
    <>
      <h1 className="section-title">Code Snippets</h1>

      <ArticlesList articles={allCodeSnippets} type="snippets" />
    </>
  );
}
