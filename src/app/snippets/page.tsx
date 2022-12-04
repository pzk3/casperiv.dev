import { ArticlesList } from "components/blog/articles-list";
import { allCodeSnippets } from "contentlayer/generated";

export default async function CodeSnippetsSlugPage() {
  return (
    <>
      <h1 className="section-title">Code Snippets</h1>

      <ArticlesList articles={allCodeSnippets} type="blog" />
    </>
  );
}
