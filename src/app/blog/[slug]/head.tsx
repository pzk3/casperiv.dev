import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getBlogPost } from "lib/mdx/get-blog-post";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";

export default function CodeSnippetsHead({ params }: { params: { slug: string } }) {
  const blogPost = getBlogPost(params.slug);

  if (!blogPost) {
    return null;
  }

  // todo: make this a function
  const pageTitle = `${blogPost.title} - Casper Iversen`;
  const pageDescription = blogPost.intro;
  const keywords = [...DEFAULT_KEYWORDS, "blog", "blog casper iversen", blogPost.keywords ?? ""];

  return (
    <NextSeo
      useAppDir
      openGraph={{
        article: {
          publishedTime: blogPost.createdAt,
        },
        title: pageTitle,
        description: pageDescription,
      }}
      canonical={`https://caspertheghost.me/blog/${getArticleSlug(blogPost)}`}
      title={pageTitle}
      description={pageDescription}
      additionalMetaTags={[{ name: "keywords", content: keywords.join(", ") }]}
    />
  );
}
