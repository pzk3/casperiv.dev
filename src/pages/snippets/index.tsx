import { Layout } from "components/Layout";
import { getAllItems } from "lib/mdx";
import { GetStaticProps } from "next";
import { Post } from "types/Post";
import { generateRSSFeed } from "lib/rss";
import { ArticlesList } from "components/blog/ArticlesList";
import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";

export default function CodeSnippets({ snippets }: { snippets: Post[] }) {
  const pageTitle = "Code snippets - Casper Iversen";
  const pageDescription = "Small code snippets that I have found useful or use a lot.";

  return (
    <Layout>
      <NextSeo
        openGraph={{
          title: pageTitle,
          description: pageDescription,
        }}
        canonical="https://caspertheghost.me/snippets"
        title={pageTitle}
        description={pageDescription}
        additionalMetaTags={[
          {
            name: "keywords",
            content: [...DEFAULT_KEYWORDS, "code snippets", "code examples", "react hooks"].join(
              ", ",
            ),
          },
        ]}
      />

      <h1 className="section-title">Code Snippets</h1>

      <ArticlesList articles={snippets} type="snippets" />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const snippets = await getAllItems<Post>("snippets");
  await generateRSSFeed();

  return {
    props: { snippets },
  };
};
