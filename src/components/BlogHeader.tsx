import Link from "next/link";
import * as React from "react";
import { useRouter } from "next/router";
import format from "date-fns/format";
import { Post } from "types/Post";
import styles from "css/blog.module.scss";
import { Snippet } from "types/Snippet";

interface Props {
  post: Post | Snippet;
}

const BlogHeader: React.FC<Props> = ({ post }) => {
  const createdAt = format(new Date(post.createdAt), "yyyy-MM-dd");
  const updatedAt = format(new Date(post.updatedAt), "yyyy-MM-dd");
  const router = useRouter();
  const backUrl = router.pathname.includes("/snippets") ? "/snippets" : "/blog";

  return (
    <header className={styles.blogHeader}>
      <div className={styles.leftContainer}>
        <div>
          <h1 className={styles.blogTitle}>{post.title}</h1>
          <h2 className={styles.blogDate}>
            Created: <span>{createdAt}</span>{" "}
            {post.updatedAt ? (
              <>
                - Last updated: <span>{updatedAt}</span>
              </>
            ) : null}
            {post.readingTime ? (
              <>
                - <span>{post.readingTime}</span>
              </>
            ) : null}
          </h2>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <Link href={backUrl}>
          <a href={backUrl}>Return</a>
        </Link>
      </div>
    </header>
  );
};

export default BlogHeader;
