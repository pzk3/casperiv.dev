import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import * as React from "react";
import { getAllPosts } from "src/lib/blog";
import { Post } from "types/Post";

interface Props {
  posts: Post[];
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <h1>Blog posts</h1>

      <div className="blog__items">
        {posts.map((post) => {
          return (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <a href={`/blog/${post.slug}`} className="blog__item">
                <h3>{post.title}</h3>

                <p>{post.intro} </p>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
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
