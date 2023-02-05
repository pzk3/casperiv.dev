import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getBlogPost } from "lib/mdx/get-blog-post";
import { mergeKeywords } from "lib/merge-keywords";
import { NextSeo } from "next-seo";
import { SEO, DEFAULT_KEYWORDS } from "next-seo.config";

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
      {...SEO}
      openGraph={{
        ...SEO.openGraph,
        article: {
          authors: ["Casper Iversen"],
          publishedTime: blogPost.createdAt,
          modifiedTime: blogPost.updatedAt,
        },
        title: pageTitle,
        description: pageDescription,
      }}
      canonical={`https://caspertheghost.me/blog/${getArticleSlug(blogPost)}`}
      title={pageTitle}
      description={pageDescription}
      additionalMetaTags={mergeKeywords({
        keywords,
        metaTags: SEO.additionalMetaTags,
      })}
    />
  );
}
