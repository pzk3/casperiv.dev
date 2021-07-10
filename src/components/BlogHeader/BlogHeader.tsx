import * as React from "react";
import format from "date-fns/format";
import { Post } from "types/Post";
import styles from "./header.module.scss";
import { Snippet } from "types/Snippet";

interface Props {
  post: Post | Snippet;
}

export const BlogHeader = ({ post }: Props) => {
  const createdAt = format(new Date(post.createdAt), "MMMM dd, yyyy");

  return (
    <header className={styles.blogHeader}>
      <div className={styles.leftContainer}>
        <div>
          <h1 className={styles.blogTitle}>{post.title}</h1>
          <h2 className={styles.blogDate}>
            Casper Iversen <span>•</span> {createdAt}{" "}
            {post.readingTime ? (
              <>
                - <span>{post.readingTime}</span>
              </>
            ) : null}
          </h2>
        </div>
      </div>
    </header>
  );
};
