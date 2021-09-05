import * as React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { getAllItems, getItemBySlug } from "@lib/blog";
import { BlogHeader } from "@components/BlogHeader";
import { Post } from "types/Post";
import { Seo } from "@components/Seo";
import { Markdown } from "@components/Markdown";

interface Props {
  post: Post;
}

const PostPage = ({ post }: Props) => {
  const router = useRouter();

  React.useEffect(() => {
    if (!post) {
      router.push("/404");
    }
  }, [post, router]);

  if (!post) {
    return null;
  }

  const keywords = post.keywords?.split(", ") ?? [];
  return (
    <>
      <Seo
        title={`${post.title} - Casper Iversen`}
        description={post.intro ?? undefined}
        keywords={["blog", "case studies casper iversen", ...keywords]}
        url={`https://caspertheghost.me/case-study/${post.slug}`}
        date={post.createdAt}
      />
      <Head>
        <link rel="preload" href="/fonts/CascadiaMono.woff2" as="font" type="font/woff2" />
      </Head>

      <BlogHeader post={post} />

      <Markdown content={post.content} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllItems<Post>("case-studies");

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
  const slug = ctx.params.slug.toString();

  const post = await getItemBySlug<Post>(slug, "case-studies");

  return {
    props: {
      post: post ?? null,
    },
  };
};

export default PostPage;
