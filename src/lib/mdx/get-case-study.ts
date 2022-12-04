import { allCaseStudies } from "contentlayer/generated";
import { getArticleSlug } from "./get-article-slug";

export function getCaseStudy(slug: string) {
  return allCaseStudies.find((snippet) => getArticleSlug(snippet) === slug);
}
