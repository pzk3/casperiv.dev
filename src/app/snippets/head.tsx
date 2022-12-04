import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";

const pageTitle = "Code snippets - Casper Iversen";
const pageDescription = "Small code snippets that I have found useful or use a lot.";

export default function CodeSnippetsHead() {
  return (
    <NextSeo
      useAppDir
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
  );
}
