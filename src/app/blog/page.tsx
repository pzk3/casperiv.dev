import { ArticlesList } from "components/blog/articles-list";
import { ArticleListItem } from "components/blog/articles-list-item";
import { allBlogPosts } from "contentlayer/generated";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import { DEFAULT_KEYWORDS } from "next-seo.config";

export const metadata = {
  title: "Blog",
  description: "A list of my blog posts with how-to's and more!",
  alternates: {
    canonical: "https://caspertheghost.me/blog",
  },
  openGraph: {
    title: "Blog",
    description: "A list of my blog posts with how-to's and more!",
  },
  twitter: {
    title: "Blog",
    description: "A list of my blog posts with how-to's and more!",
  },
  keywords: [...DEFAULT_KEYWORDS, "blog casper iversen", "caspertheghost blog", "react hooks"],
};

export default async function CodeSnippetsSlugPage() {
  const FEATURED = allBlogPosts.filter((post) => post.featured);
  const nonArchivedBlogPosts = allBlogPosts
    .filter((post) => !post.archived)
    .sort((post1, post2) => (new Date(post1.createdAt) > new Date(post2.createdAt) ? -1 : 1));

  return (
    <>
      <h1 className="text-3xl font-bold capitalize md:text-4xl">Blog Posts</h1>

      <div className="my-3 md:mt-6">
        <h2 className="text-2xl font-semibold md:text-3xl">Featured</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {FEATURED.map((article) => (
            <ArticleListItem
              article={article}
              key={getArticleSlug(article)}
              type="blog"
              isFeatured
            />
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold md:text-3xl">All posts</h2>

        <ArticlesList articles={nonArchivedBlogPosts} type="blog" />
      </div>
    </>
  );
}
