import BlogHeader from "@components/BlogHeader";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import Markdown from "react-markdown";
import { getAllPosts, getPostBySlug } from "src/lib/blog";
import { Post } from "types/Post";
import styles from "css/blog.module.scss";

interface Props {
  post: Post;
}

const PostPage: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  React.useEffect(() => {
    if (!post) {
      router.push("/404");
    }
  }, [post]);

  if (!post) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{post.title} - Casper Iversen Blog</title>
        <meta property="og:title" content={`${post.title} - Casper Iversen Blog`} />
        <meta name="description" content={`${post.intro}  Casper Iversen Blog`} />
        <meta property="og:description" content={`${post.intro}  Casper Iversen Blog`} />
        <meta name="twitter:description" content={`${post.intro}  Casper Iversen Blog`} />
        <meta name="keywords" content="CasperTheGhost blog, blog casper iversen" />
        <link rel="canonical" href={`https://caspertheghost.me/blog/${post.slug}`} />
      </Head>
      <BlogHeader post={post} />
      <Markdown linkTarget="_blank" className={styles.react__markdown}>
        {post.content}
      </Markdown>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    fallback: false,
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = `${ctx.params.slug}`;
  const exists = getAllPosts(["slug"]).find((p) => p?.slug?.toLowerCase() === slug?.toLowerCase());

  if (!exists) {
    return {
      props: {
        post: null,
      },
    };
  }

  const post = getPostBySlug(slug, [
    "content",
    "created_at",
    "updated_at",
    "slug",
    "title",
    "intro",
  ]);

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
