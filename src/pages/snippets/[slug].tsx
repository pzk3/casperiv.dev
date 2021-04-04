/* eslint-disable react/display-name */
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import Markdown from "react-markdown";
import { getAllItems, getItemBySlug } from "src/lib/shared";
import styles from "css/blog.module.scss";
import Seo from "@components/Seo";
import { Snippet } from "types/Snippet";
import BlogHeader from "@components/BlogHeader";

interface Props {
  snippet: Snippet;
}

const PostPage: NextPage<Props> = ({ snippet }) => {
  React.useEffect(() => {
    const mdLinks = document.querySelectorAll<HTMLAnchorElement>("#react-markdown a");

    // Open all links in a new tab & add `rel="noopener noreferrer" to anchor element`
    mdLinks.forEach((link) => {
      link.rel = "noopener noreferrer";
      link.target = "_blank";
    });
  }, []);

  if (!snippet) {
    return null;
  }

  const keywords = snippet.keywords?.split(", ") ?? [];
  return (
    <>
      <Seo
        title={`${snippet.title} - Casper's Code Snippets`}
        description={snippet.intro ?? undefined}
        keywords={["code snippets", "snippets casper iversen", ...keywords]}
        url={`https://caspertheghost.me/snippets/${snippet.slug}`}
      />
      <Head>
        <link rel="preload" href="/fonts/CascadiaMono.woff2" as="font" type="font/woff2" />
      </Head>

      <BlogHeader post={snippet} />

      <div id="react-markdown">
        {/* //TODO: setup a syntax-highlighter  */}
        <Markdown linkTarget="_blank" className={styles.react__markdown}>
          {snippet.content}
        </Markdown>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const snippets = getAllItems<Snippet>("snippets", ["slug"]);

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
  const slug = `${ctx.params.slug}`;
  const exists = getAllItems<Snippet>("snippets", ["slug"]).find(
    (p) => p?.slug?.toLowerCase() === slug?.toLowerCase(),
  );

  if (!exists) {
    return {
      props: {
        post: null,
      },
    };
  }

  const snippet = getItemBySlug<Snippet>(slug, "snippets", [
    "content",
    "created_at",
    "slug",
    "title",
    "keywords",
    "intro",
  ]);

  return {
    props: {
      snippet,
    },
  };
};

export default PostPage;
