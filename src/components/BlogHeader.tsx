import Link from "next/link";
import * as React from "react";
import { useRouter } from "next/router";
import { Post } from "types/Post";
import styles from "css/blog.module.scss";
import { Snippet } from "types/Snippet";

interface Props {
  post: Post | Snippet;
}

const BlogHeader: React.FC<Props> = ({ post }) => {
  const [createdAt, setCreatedAt] = React.useState(null);
  const [updatedAt, setUpdatedAt] = React.useState(null);
  const router = useRouter();
  const backUrl = router.pathname.includes("/snippets") ? "/snippets" : "/blog";

  React.useEffect(() => {
    setCreatedAt(new Date(post.created_at).toLocaleDateString());
    setUpdatedAt(new Date(post.updated_at).toLocaleDateString());
  }, [post?.created_at]);

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
