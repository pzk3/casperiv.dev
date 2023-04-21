import { allProjects } from "contentlayer/generated";
import { getArticleSlug } from "./get-article-slug";

export function getProject(slug: string) {
  return allProjects.find((snippet) => getArticleSlug(snippet) === slug);
}
