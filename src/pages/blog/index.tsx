import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import { getAllPosts } from "src/lib/blog";
import { Post } from "types/Post";
import styles from "css/blog.module.scss";

interface Props {
  posts: Post[];
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog - Casper Iversen</title>
        <link rel="canonical" href="https://caspertheghost.me/blog" />
        <meta property="og:title" content="Blog - Casper Iversen" />
        <meta name="keywords" content="CasperTheGhost blog, blog casper iversen" />
        <meta name="description" content="My blog - Casper Iversen" />
        <meta property="og:description" content="My blog - Casper Iversen" />
        <meta name="twitter:description" content="My blog - Casper Iversen" />
      </Head>
      <h1>Blog posts</h1>

      <div className={styles.blog__items}>
        {posts.map((post) => {
          return (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <a href={`/blog/${post.slug}`} className={styles.blog__item}>
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
  const posts = getAllPosts(["slug", "title", "created_at", "intro"]);

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
