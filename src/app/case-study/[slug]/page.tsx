import { allCaseStudies } from "contentlayer/generated";
import { Article } from "components/blog/article";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getCaseStudy } from "lib/mdx/get-case-study";
import { notFound } from "next/navigation";

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    return notFound();
  }

  return <Article article={caseStudy} />;
}

export async function generateStaticParams() {
  return allCaseStudies.map((caseStudy) => ({
    slug: getArticleSlug(caseStudy),
  }));
}
