import { allCaseStudies } from "contentlayer/generated";
import { Article } from "components/blog/article";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getCaseStudy } from "lib/mdx/get-case-study";
import { notFound } from "next/navigation";
import { DEFAULT_KEYWORDS } from "next-seo.config";

interface CaseStudySlugPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: CaseStudySlugPageProps) {
  const item = getCaseStudy(params.slug);

  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.intro,
    alternates: {
      canonical: `https://caspertheghost.me/case-study/${getArticleSlug(item)}`,
    },
    openGraph: {
      title: item.title,
      description: item.intro,
    },
    twitter: {
      title: item.title,
      description: item.intro,
    },
    keywords: [
      ...DEFAULT_KEYWORDS,
      "case study casper iversen",
      ...(item.keywords?.split(",") ?? []),
    ],
  };
}

export default async function CaseStudyPage({ params }: CaseStudySlugPageProps) {
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
