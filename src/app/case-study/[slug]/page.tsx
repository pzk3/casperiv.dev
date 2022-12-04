import { Article } from "components/blog/article";
import { getCaseStudy } from "lib/mdx/get-case-study";
import { notFound } from "next/navigation";

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    return notFound();
  }

  return <Article article={caseStudy} />;
}
