import * as React from "react";
import { GetStaticProps } from "next";
import { getAllItems } from "@lib/blog";
import { Seo } from "@components/Seo";
import { Snippet } from "types/Snippet";
import { BlogItem } from "@components/BlogItem";
import styles from "css/blog.module.scss";

interface Props {
  snippets: Snippet[];
}

const BlogPage = ({ snippets }: Props) => {
  return (
    <>
      <Seo
        title="Code snippets - Casper Iversen"
        description="Small code snippets that I have found useful"
        keywords={["code snippets", "code examples", "react hooks"]}
        url="https://caspertheghost.me/snippets"
      />
      <h1>Code snippets</h1>

      <div className={styles.blogItems}>
        {snippets.map((snippet) => {
          return <BlogItem type="snippet" post={snippet} key={snippet.slug} />;
        })}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const snippets = await getAllItems<Snippet>("snippets");

  return {
    props: {
      snippets,
    },
  };
};

export default BlogPage;
