import * as React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import format from "date-fns/format";
import { Post } from "types/Post";
import { Snippet } from "types/Snippet";
import styles from "./header.module.scss";
import { useViews } from "src/hooks/useViews";

interface Props {
  post: Post | Snippet;
}

export const BlogHeader = ({ post }: Props) => {
  const date = new Date(post.updatedAt ?? post.createdAt);
  const views = useViews();

  const published = formatDistanceToNow(date);
  const publishDateFull = format(new Date(post.createdAt), "yyyy-MM-dd");
  const publishedText = post.updatedAt ? "Updated" : "Published";
  const viewsText = views === 1 ? "view" : "views";

  return (
    <header className={styles.blogHeader}>
      <div className={styles.leftContainer}>
        <div>
          <h1 className={styles.blogTitle}>{post.title}</h1>
          <h2 className={styles.blogDate}>
            <span title={publishDateFull}>
              {publishedText} {published} ago
            </span>
            {post.readingTime ? <span> - {post.readingTime}</span> : null}
            {views ? (
              <span>
                {" "}
                - {Intl.NumberFormat().format(views)} {viewsText}
              </span>
            ) : null}
          </h2>
        </div>
      </div>
    </header>
  );
};
