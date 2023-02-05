import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getCaseStudy } from "lib/mdx/get-case-study";
import { mergeKeywords } from "lib/merge-keywords";
import { NextSeo } from "next-seo";
import { SEO, DEFAULT_KEYWORDS } from "next-seo.config";
import { notFound } from "next/navigation";

export default function CaseStudyHead({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    return notFound();
  }

  const pageTitle = `${caseStudy.title} - Casper Iversen`;
  const pageDescription = caseStudy.intro;
  const keywords = [
    ...DEFAULT_KEYWORDS,
    "case studies",
    "case studies casper iversen",
    ...(caseStudy.keywords ?? []),
  ];

  return (
    <NextSeo
      useAppDir
      {...SEO}
      openGraph={{
        ...SEO.openGraph,
        article: {
          authors: ["Casper Iversen"],
          publishedTime: caseStudy.createdAt,
          modifiedTime: caseStudy.updatedAt,
        },
        title: pageTitle,
        description: pageDescription,
      }}
      canonical={`https://caspertheghost.me/blog/${getArticleSlug(caseStudy)}`}
      title={pageTitle}
      description={pageDescription}
      additionalMetaTags={mergeKeywords({
        keywords,
        metaTags: SEO.additionalMetaTags,
      })}
    />
  );
}
