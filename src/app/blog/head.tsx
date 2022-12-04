import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";

const pageTitle = "Blog - Casper Iversen";
const pageDescription = "A list of my blog posts with how-to's and more!";

export default function BlogHead() {
  return (
    <NextSeo
      useAppDir
      openGraph={{
        title: pageTitle,
        description: pageDescription,
      }}
      canonical="https://caspertheghost.me/blog"
      title={pageTitle}
      description={pageDescription}
      additionalMetaTags={[
        {
          name: "keywords",
          content: [
            ...DEFAULT_KEYWORDS,
            "blog casper iversen",
            "caspertheghost blog",
            "react hooks",
          ].join(", "),
        },
      ]}
    />
  );
}
