import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import * as React from "react";
import { getAllItems, getItemBySlug } from "@lib/blog";
import { Seo } from "@components/Seo";
import { Snippet } from "types/Snippet";
import { BlogHeader } from "@components/BlogHeader";
import { Markdown } from "@components/Markdown";

interface Props {
  snippet: Snippet;
}

const PostPage = ({ snippet }: Props) => {
  const keywords = snippet.keywords?.split(", ") ?? [];

  return (
    <>
      <Seo
        title={`${snippet.title} - Casper Iversen`}
        description={snippet.intro ?? undefined}
        keywords={["code snippets", "snippets casper iversen", ...keywords]}
        url={`https://caspertheghost.me/snippets/${snippet.slug}`}
      />
      <Head>
        <link rel="preload" href="/fonts/CascadiaMono.woff2" as="font" type="font/woff2" />

        <meta name="authors" content="Casper Iversen" />
        <meta name="created" content={snippet.createdAt} />
      </Head>

      <BlogHeader post={snippet} />

      <Markdown content={snippet.content} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const snippets = await getAllItems<Snippet>("snippets", ["slug"]);

  return {
    fallback: false,
    paths: snippets.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.slug.toString();

  const snippet = await getItemBySlug<Snippet>(slug, "snippets", [
    "content",
    "createdAt",
    "slug",
    "title",
    "keywords",
    "intro",
    "updatedAt",
  ]);

  return {
    props: {
      snippet: snippet ?? null,
    },
  };
};

export default PostPage;
