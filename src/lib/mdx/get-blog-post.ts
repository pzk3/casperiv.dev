import { allBlogPosts } from "contentlayer/generated";
import { getArticleSlug } from "./get-article-slug";

export function getBlogPost(slug: string) {
  return allBlogPosts.find((snippet) => getArticleSlug(snippet) === slug);
}
