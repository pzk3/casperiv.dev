import * as React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";
import { Post } from "types/Post";
import styles from "./header.module.scss";
import { Snippet } from "types/Snippet";

interface Props {
  post: Post | Snippet;
}

export const BlogHeader = ({ post }: Props) => {
  const date = new Date(post.updatedAt ?? post.createdAt);

  const published = formatDistanceToNow(date);
  const publishDateFull = format(new Date(post.createdAt), "yyyy-MM-dd");

  return (
    <header className={styles.blogHeader}>
      <div className={styles.leftContainer}>
        <div>
          <h1 className={styles.blogTitle}>{post.title}</h1>
          <h2 className={styles.blogDate}>
            <span title={publishDateFull}>Published {published} ago </span>
            {post.updatedAt ? <span> - Updated </span> : null}
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
