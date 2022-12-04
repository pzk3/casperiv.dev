import type { BlogPost, CaseStudy, CodeSnippet } from "contentlayer/generated";

export function getArticleSlug(post: BlogPost | CodeSnippet | CaseStudy) {
  return post._raw.sourceFileName.replace(/\.md(x)?/, "");
}
