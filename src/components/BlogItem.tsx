import Link from "next/link";
import { Post } from "types/Post";
import { Snippet } from "types/Snippet";
import styles from "css/blog.module.scss";

interface Props<T extends Post | Snippet = Post> {
  post: T;
  type: "blog" | "snippets";
}

export const BlogItem = ({ type, post }: Props) => {
  return (
    <Link prefetch={false} href={`/${type}/${post.slug}`} key={post.slug}>
      <a href={`/${type}/${post.slug}`} className={styles.blogItem}>
        <h2>{post.title}</h2>

        <p>{post.intro}</p>
      </a>
    </Link>
  );
};
