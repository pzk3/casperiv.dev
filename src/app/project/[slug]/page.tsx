import { allProjects } from "contentlayer/generated";
import { Article } from "components/blog/article";
import { getArticleSlug } from "lib/mdx/get-article-slug";
import { getProject } from "~/lib/mdx/get-project";
import { notFound } from "next/navigation";
import { mergeSeo } from "lib/merge-seo";

interface ProjectSlugPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProjectSlugPageProps) {
  const item = getProject(params.slug);

  if (!item) {
    return {};
  }

  return mergeSeo({
    title: item.title,
    description: item.description,
    alternates: {
      canonical: `https://caspertheghost.me/project/${getArticleSlug(item)}`,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      publishedTime: item.createdAt,
      type: "article",
      modifiedTime: item.updatedAt,
    },
    twitter: {
      title: item.title,
      description: item.description,
    },
    keywords: ["project casper iversen", item.title, ...(item.keywords ?? [])],
  });
}

export default async function ProjectPage({ params }: ProjectSlugPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    return notFound();
  }

  return <Article article={project} />;
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: getArticleSlug(project),
  }));
}
