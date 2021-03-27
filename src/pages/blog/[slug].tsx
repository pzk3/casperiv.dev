import BlogHeader from "@components/BlogHeader";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import Markdown from "react-markdown";
import { getAllPosts, getPostBySlug } from "src/lib/blog";
import { Post } from "types/Post";

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
        <title>{post.title} - Casper Iversen - Blog</title>
        {post.intro ? (
          <>
            <meta name="description" content={post.intro} />
            <meta property="og:description" content={post.intro} />
            <meta name="twitter:description" content={post.intro} />
          </>
        ) : null}
      </Head>
      <BlogHeader post={post} />
      <Markdown linkTarget="_blank" className="react-markdown">
        {post.content}
      </Markdown>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = `${ctx.params.slug}`;
  const exists = getAllPosts(["slug"]).find((p) => p?.slug?.toLowerCase() === slug?.toLowerCase());

  if (!exists) {
    return {
      props: {
        post: null,
      },
    };
  }

  const post = getPostBySlug(slug, ["content", "created_at", "updated_at", "slug", "title"]);

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
