import { Layout } from "components/Layout";
import { getAllItems } from "lib/mdx";
import { GetStaticProps } from "next";
import { Post } from "types/Post";
import { generateRSSFeed } from "lib/rss";
import { ArticlesList } from "components/blog/ArticlesList";
import { Seo } from "components/Seo";
import { ArticleListItem } from "components/blog/ArticleListItem";

export default function Blog({ posts }: { posts: Post[] }) {
  const FEATURED = posts.filter((v) => v.featured);
  const cols = `grid-cols-${FEATURED.length || 1}`;

  return (
    <Layout>
      <Seo
        title="Blog - Casper Iversen"
        url="https://caspertheghost.me/blog"
        keywords={["blog casper iversen", "caspertheghost blog"]}
        description="My blog - Casper Iversen"
      />

      <h1 className="text-3xl font-bold capitalize md:text-4xl">Blog Posts</h1>

      <div className="my-3 md:mt-6">
        <h2 className="text-2xl font-semibold md:text-3xl">Featured</h2>

        <ul className={`grid gap-3 mt-3 ${cols}`}>
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
  const posts = await getAllItems<Post>("posts");
  await generateRSSFeed();

  return {
    props: { posts },
  };
};
