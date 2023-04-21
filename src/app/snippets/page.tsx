import { ArticlesList } from "~/components/blog/articles-list";
import { allCodeSnippets } from "contentlayer/generated";
import { mergeSeo } from "~/lib/merge-seo";

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
  keywords: ["code snippets", "code examples", "react hooks"],
});

export default async function CodeSnippetsSlugPage() {
  const sortedSnippets = allCodeSnippets.sort((post1, post2) =>
    new Date(post1.createdAt) > new Date(post2.createdAt) ? -1 : 1,
  );

  return (
    <main className="mt-16 mx-auto max-w-6xl pb-6 px-5 md:px-0">
      <h1 className="text-3xl font-bold capitalize md:text-4xl font-title">Code Snippets</h1>

      <ArticlesList articles={sortedSnippets} type="snippets" />
    </main>
  );
}
