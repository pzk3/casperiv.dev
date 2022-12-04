import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getCaseStudy } from "lib/mdx/get-case-study";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";
import { notFound } from "next/navigation";

export default function CaseStudyHead({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    return notFound();
  }

  const pageTitle = `${caseStudy.title} - Casper Iversen`;
  const pageDescription = caseStudy.intro ?? undefined;
  const keywords = [
    ...DEFAULT_KEYWORDS,
    "case studies",
    "case studies casper iversen",
    ...(caseStudy.keywords ?? []),
  ];

  return (
    <NextSeo
      useAppDir
      openGraph={{
        article: {
          publishedTime: caseStudy.createdAt,
        },
        title: pageTitle,
        description: pageDescription,
      }}
      canonical={`https://caspertheghost.me/case-study/${getArticleSlug(caseStudy)}`}
      title={pageTitle}
      description={pageDescription}
      additionalMetaTags={[{ name: "keywords", content: keywords.join(", ") }]}
    />
  );
}
