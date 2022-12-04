import { allCodeSnippets } from "contentlayer/generated";
import { getArticleSlug } from "./get-article-slug";

export function getCodeSnippet(slug: string) {
  return allCodeSnippets.find((snippet) => getArticleSlug(snippet) === slug);
}
