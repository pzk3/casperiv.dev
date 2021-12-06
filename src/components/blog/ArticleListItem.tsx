import type { Post } from "types/Post";
import Link from "next/link";
import format from "date-fns/format";

interface Props {
  article: Post;
  type: "blog" | "snippets";
}

export function ArticleListItem({ article, type }: Props) {
  const publishedAt = format(new Date(article.createdAt), "dd MMMM yyyy");

  return (
    <li className="my-4 first:mt-0">
      <Link href={`/${type}/${article.slug}`}>
        <a>
          <h3 className="text-xl font-semibold">{article.title}</h3>
          <p className="mt-1 text-gray-100">{article.intro}</p>

          <span className="block mt-1.5 font-normal text-gray-300">{publishedAt}</span>
        </a>
      </Link>
    </li>
  );
}
