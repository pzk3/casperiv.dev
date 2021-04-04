/* eslint-disable react/display-name */
import BlogHeader from "@components/BlogHeader";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import Markdown from "react-markdown";
import slugify from "slugify";
import { getAllPosts, getPostBySlug } from "src/lib/blog";
import { Post } from "types/Post";
import styles from "css/blog.module.scss";

interface Props {
  post: Post;
}

const renderers = {
  heading: (props) => {
    const node = props.node.children?.[0]?.value;
    const slug = slugify(node, {
      lower: true,
      replacement: "-",
      strict: true,
    });

    function handleClick() {
      if (typeof window !== "undefined") {
        window.location.href = `#${slug}`;
      }
    }

    // couldn't find a better way todo this.
    switch (props.level) {
      case 1: {
        return (
          <h1 onClick={handleClick} id={slug}>
            {props.children}
          </h1>
        );
      }
      case 2: {
        return (
          <h2 onClick={handleClick} id={slug}>
            {props.children}
          </h2>
        );
      }
      case 3: {
        return (
          <h3 onClick={handleClick} id={slug}>
            {props.children}
          </h3>
        );
      }
      case 4: {
        return (
          <h4 onClick={handleClick} id={slug}>
            {props.children}
          </h4>
        );
      }
      case 5: {
        return (
          <h5 onClick={handleClick} id={slug}>
            {props.children}
          </h5>
        );
      }
      default: {
        return (
          <h6 onClick={handleClick} id={slug}>
            {props.children}
          </h6>
        );
      }
    }
  },
  image: (props) => (
    <img draggable={false} loading="lazy" width="100" src={props.src} alt={props.alt} />
  ),
};

const PostPage: NextPage<Props> = ({ post }) => {
  const router = useRouter();

  React.useEffect(() => {
    const mdLinks = document.querySelectorAll<HTMLAnchorElement>("#react-markdown a");

    // Open all links in a new tab & add `rel="noopener noreferrer" to anchor element`
    mdLinks.forEach((link) => {
      link.rel = "noopener noreferrer";
      link.target = "_blank";
    });
  }, []);

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
        <meta
          name="keywords"
          content={`CasperTheGhost blog, blog casper iversen ${post.keywords ?? ""}`}
        />
        <link rel="canonical" href={`https://caspertheghost.me/blog/${post.slug}`} />
        <link rel="preload" href="/fonts/CascadiaMono.woff2" as="font" type="font/woff2" />
      </Head>

      <BlogHeader post={post} />

      <div id="react-markdown">
        <Markdown renderers={renderers} linkTarget="_blank" className={styles.react__markdown}>
          {post.content}
        </Markdown>
      </div>
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
    "keywords",
  ]);

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
