import { BlogPost, CaseStudy, CodeSnippet } from "contentlayer/generated";
import { BlogFooter } from "./blog-footer";
import { BlogHeader } from "./blog-header";
import { Markdown } from "./markdown/markdown";

interface Props {
  article: CodeSnippet | BlogPost | CaseStudy;
}

export function Article({ article }: Props) {
  return (
    <article className="pb-5">
      <BlogHeader post={article} />

      <Markdown code={article.body.code} />

      <BlogFooter post={article} />
    </article>
  );
}
