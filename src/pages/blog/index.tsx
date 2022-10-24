import { Layout } from "components/layout";
import { getAllItems } from "lib/mdx";
import { GetStaticProps } from "next";
import { Post } from "types/post";
import { generateRSSFeed } from "lib/rss";
import { ArticlesList } from "components/blog/articles-list";
import { ArticleListItem } from "components/blog/articles-list-item";
import { DEFAULT_KEYWORDS } from "next-seo.config";
import { NextSeo } from "next-seo";

export default function Blog({ posts }: { posts: Post[] }) {
  const FEATURED = posts.filter((v) => v.featured);
  const pageTitle = "Blog - Casper Iversen";
  const pageDescription = "A list of my blog posts with how-to's and more!";

  return (
    <Layout>
      <NextSeo
        openGraph={{
          title: pageTitle,
          description: pageDescription,
        }}
        canonical="https://caspertheghost.me/blog"
        title={pageTitle}
        description={pageDescription}
        additionalMetaTags={[
          {
            name: "keywords",
            content: [
              ...DEFAULT_KEYWORDS,
              "blog casper iversen",
              "caspertheghost blog",
              "react hooks",
            ].join(", "),
          },
        ]}
      />

      <h1 className="text-3xl font-bold capitalize md:text-4xl">Blog Posts</h1>

      <div className="my-3 md:mt-6">
        <h2 className="text-2xl font-semibold md:text-3xl">Featured</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {FEATURED.map((article) => (
            <ArticleListItem article={article} key={article.slug} type="blog" isFeatured />
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold md:text-3xl">All posts</h2>

        <ArticlesList articles={posts} type="blog" />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const [posts] = await Promise.all([getAllItems({ type: "posts" }), generateRSSFeed()]);

  return {
    props: { posts },
  };
};
