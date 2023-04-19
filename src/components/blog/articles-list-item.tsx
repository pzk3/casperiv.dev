import format from "date-fns/format";
import classNames from "clsx";
import type { BlogPost, CaseStudy, CodeSnippet } from "contentlayer/generated";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import { Link } from "../link";
import { ArrowRightShort } from "react-bootstrap-icons";
import NextLink from "next/link";

interface Props {
  isFeatured?: boolean;
  article: BlogPost | CodeSnippet | CaseStudy;
  type: "blog" | "snippets";
}

export function ArticleListItem({ isFeatured, article, type }: Props) {
  const publishedAt = format(new Date(article.createdAt), "dd MMMM yyyy");
  const extraAProps = isFeatured
    ? {
        className: "z-20 block p-4 w-full h-full border-accent border-2 transition rounded-2xl",
      }
    : {};

  return (
    <li
      className={classNames("my-4 first:mt-0 group relative", {
        "z-10 mt-0 py-0.5": isFeatured,
      })}
    >
      {isFeatured ? (
        <Link
          size="square"
          className="absolute -top-3 right-3.5 group-hover:scale-125 group-hover:-rotate-45 group-hover:border-accent"
          intent="secondary"
          href={`/blog/${getArticleSlug(article)}`}
        >
          <ArrowRightShort width={25} height={25} />
        </Link>
      ) : null}

      <NextLink href={`/${type}/${getArticleSlug(article)}`} {...extraAProps}>
        <h2 style={{ fontSize: "1.25rem" }} className="font-semibold">
          {article.title}
        </h2>
        <p className="mt-1 text-secondary">{article.description}</p>
        {isFeatured ? null : (
          <span className="block mt-1.5 font-normal text-gray-light">{publishedAt}</span>
        )}
      </NextLink>
    </li>
  );
}
