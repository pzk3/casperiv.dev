import * as React from "react";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
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
      <motion.h1
        transition={{ duration: 0.3 }}
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
      >
        Blog posts
      </motion.h1>

      <motion.div
        transition={{ duration: 0.3 }}
        initial={{ translateY: 15, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        className={styles.blogItems}
      >
        {posts.map((post) => {
          return <BlogItem type="blog" post={post} key={post.slug} />;
        })}
      </motion.div>
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
