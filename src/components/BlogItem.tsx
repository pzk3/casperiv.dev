import Link from "next/link";
import { Post } from "types/Post";
import { Snippet } from "types/Snippet";
import styles from "css/blog.module.scss";

interface Props<T extends Post | Snippet = Post> {
  post: T;
  type: "blog" | "snippet";
}

export const BlogItem = ({ type, post }: Props) => {
  return (
    <Link prefetch={false} href={`/${type}/${post.slug}`} key={post.slug}>
      <a href={`/blog/${post.slug}`} className={styles.blogItem}>
        <h2>{post.title}</h2>

        <p>{post.intro}</p>
      </a>
    </Link>
  );
};
