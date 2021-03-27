import BlogHeader from "@components/BlogHeader";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
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
      <BlogHeader post={post} />
      <Markdown linkTarget="_blank" className="react-markdown">
        {post.content}
      </Markdown>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
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

  const post = getPostBySlug(slug, ["content", "created_at", "updated_at", "slug", "title"]);

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
