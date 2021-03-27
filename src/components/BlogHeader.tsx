import Link from "next/link";
import * as React from "react";
import { Post } from "types/Post";

interface Props {
  post: Post;
}

const BlogHeader: React.FC<Props> = ({ post }) => {
  return (
    <header className="blog__header">
      <div className="left__container">
        <img width="100%" height="100%" src="/icons/icon-128.png" alt="blog-author" />

        <div className="left__text">
          <h1 className="blog__author">Casper Iversen</h1>
          <h2 className="blog__date">
            Created on <span>{new Date(post.created_at).toLocaleDateString()}</span>
          </h2>
        </div>
      </div>

      <div className="right__container">
        <Link href="/blog">
          <a href="/blog">Return</a>
        </Link>
      </div>
    </header>
  );
};

export default BlogHeader;
