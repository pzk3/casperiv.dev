import * as React from "react";
import { motion } from "framer-motion";
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
      <motion.h1
        transition={{ duration: 0.3 }}
        initial={{ translateY: 10, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
      >
        Code snippets
      </motion.h1>

      <motion.div
        transition={{ duration: 0.3 }}
        initial={{ translateY: 15, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        className={styles.blogItems}
      >
        {snippets.map((snippet) => {
          return <BlogItem type="snippets" post={snippet} key={snippet.slug} />;
        })}
      </motion.div>
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
