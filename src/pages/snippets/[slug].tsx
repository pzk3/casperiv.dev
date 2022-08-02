import Head from "next/head";
import { Layout } from "components/Layout";
import { getAllItems, getItemBySlug } from "lib/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "types/Post";
import { Article } from "components/blog/Article";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";

export default function BlogPost({ snippet }: { snippet: Post }) {
  const pageTitle = `${snippet.title} - Casper Iversen`;
  const pageDescription = snippet.intro ?? undefined;
  const keywords = [
    ...DEFAULT_KEYWORDS,
    "code snippets",
    "snippets casper iversen",
    ...(snippet.keywords ?? []),
  ];

  return (
    <Layout>
      <NextSeo
        openGraph={{
          article: {
            publishedTime: snippet.createdAt,
          },
          title: pageTitle,
          description: pageDescription,
        }}
        canonical={`https://caspertheghost.me/snippets/${snippet.slug}`}
        title={pageTitle}
        description={pageDescription}
        additionalMetaTags={[{ name: "keywords", content: keywords.join(", ") }]}
      />

      <Head>
        <link rel="preload" href="/fonts/CascadiaMono.woff2" as="font" type="font/woff2" />
      </Head>

      <Article article={snippet} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const snippets = await getAllItems({
    type: "snippets",
    includeDrafts: true,
    includeArchived: true,
  });

  return {
    fallback: false,
    paths: snippets.map((snippet) => ({
      params: {
        slug: snippet.slug,
      },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const snippet = await getItemBySlug({ slug: params?.slug as string, type: "snippets" });

  if (!snippet) {
    return {
      notFound: true,
    };
  }

  return {
    props: { snippet },
  };
};
