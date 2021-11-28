import Link from "next/link";
import { Layout } from "components/Layout";
import { getAllItems } from "lib/mdx";
import { GetStaticProps } from "next";
import { Post } from "types/Post";
import { generateRSSFeed } from "lib/rss";
import { ArticlesList } from "components/blog/ArticlesList";
import { Seo } from "components/Seo";

export default function Blog({ posts }: { posts: Post[] }) {
  const FEATURED = posts.find((v) => v.slug === "my-uses") as Post;

  return (
    <Layout>
      <Seo
        title="Blog - Casper Iversen"
        url="https://caspertheghost.me/blog"
        keywords={["blog casper iversen", "caspertheghost blog"]}
        description="My blog - Casper Iversen"
      />

      <h1 className="text-3xl font-bold capitalize md:text-4xl">Blog Posts</h1>

      <div className="my-3">
        <h2 className="text-2xl font-semibold">Featured</h2>

        <div className="z-10 my-3.5 p-1 bg-gradient-to-tr from-[#1150d4] to-[#a245fc] rounded-md hover:shadow-lg transition-shadow">
          <Link href={`/blog/${FEATURED.slug}`}>
            {/* 3.5 = smooth border of gradient background */}
            <a style={{ borderRadius: 3.5 }} className="z-20 block p-2 bg-blue">
              <h3 className="text-xl font-semibold">{FEATURED.title}</h3>
              <p className="mt-1 text-gray-300">{FEATURED.intro}</p>
            </a>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">All posts</h2>

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
