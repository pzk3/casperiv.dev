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
  const createdAt = format(new Date(post.created_at), "yyyy-MM-dd");
  const updatedAt = format(new Date(post.updated_at), "yyyy-MM-dd");
  const router = useRouter();
  const backUrl = router.pathname.includes("/snippets") ? "/snippets" : "/blog";

  return (
    <header className={styles.blog__header}>
      <div className={styles.left__container}>
        <div className={styles.left__text}>
          <h1 className={styles.blog__title}>{post.title}</h1>
          <h2 className={styles.blog__date}>
            Created: <span>{createdAt}</span>{" "}
            {post.updated_at ? (
              <>
                - Last updated: <span>{updatedAt}</span>
              </>
            ) : null}
          </h2>
        </div>
      </div>

      <div className={styles.right__container}>
        <Link href={backUrl}>
          <a href={backUrl}>Return</a>
        </Link>
      </div>
    </header>
  );
};

export default BlogHeader;
