import * as React from "react";
import { GetStaticProps } from "next";
import { Post } from "types/Post";
import { Seo } from "@components/Seo";
import { getAllItems } from "@lib/blog";
import styles from "css/blog.module.scss";
import { generateRSSFeed } from "@lib/rss";
import { BlogItem } from "@components/BlogItem";

interface Props {
  posts: Post[];
}

const BlogPage = ({ posts }: Props) => {
  return (
    <>
      <Seo
        title="Blog - Casper Iversen"
        url="https://caspertheghost.me/blog"
        keywords={["blog casper iversen", "caspertheghost blog"]}
        description="My blog - Casper Iversen"
      />
      <h1>Blog posts</h1>

      <div className={styles.blogItems}>
        {posts.map((post) => {
          return <BlogItem type="blog" post={post} key={post.slug} />;
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllItems<Post>("posts");
  await generateRSSFeed();

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
