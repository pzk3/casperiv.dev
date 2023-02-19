import type { BlogPost, CaseStudy, CodeSnippet } from "contentlayer/generated";

export function getArticleSlug(post: BlogPost | CodeSnippet | CaseStudy) {
  return post._raw.sourceFileName.replace(/\.md(x)?/, "");
}

export function formatArticleSlugPath(post: { _raw: { flattenedPath: string } }) {
  const types = {
    posts: "blog",
    snippets: "snippets",
    "case-studies": "case-study",
  };

  const [prefix, slug] = post._raw.flattenedPath.split("/");
  const type = types[prefix as keyof typeof types];

  return `/${type}/${slug}`;
}
