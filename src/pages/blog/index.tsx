import { GetStaticProps } from "next";
import Link from "next/link";
import * as React from "react";
import { Post } from "types/Post";
import styles from "css/blog.module.scss";
import { Seo } from "@components/Seo";
import { getAllItems } from "@lib/blog";

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
          return (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <a href={`/blog/${post.slug}`} className={styles.blogItem}>
                <h2>{post.title}</h2>

                <p>{post.intro}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllItems<Post>("posts", ["slug", "title", "createdAt", "intro"]);

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
