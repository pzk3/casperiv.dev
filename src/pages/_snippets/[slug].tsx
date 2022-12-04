import Head from "next/head";
import { Layout } from "components/layout";
import { getAllItems, getItemBySlug } from "lib/mdx";
import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "types/post";
import { Article } from "components/blog/article";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";

export default function BlogPost({ snippet }: { snippet: Post }) {


  return (
    <Layout>


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
