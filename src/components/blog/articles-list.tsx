import type { BlogPost, CaseStudy, CodeSnippet } from "contentlayer/generated";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import { ArticleListItem } from "./articles-list-item";

interface Props {
  articles: (BlogPost | CodeSnippet | CaseStudy)[];
  type: "blog" | "snippets";
}

export function ArticlesList({ type, articles }: Props) {
  return (
    <ul className="flex flex-col mt-5">
      {articles.map((article) => (
        <ArticleListItem article={article} key={getArticleSlug(article)} type={type} />
      ))}
    </ul>
  );
}
