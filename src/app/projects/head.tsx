import { NextSeo } from "next-seo";
import { DEFAULT_KEYWORDS } from "next-seo.config";

export const pageTitle = "Projects - Casper Iversen";
export const pageDescription = "A list of my projects that I'm proud of.";

export default function RootHead() {
  return (
    <head>
      <NextSeo
        useAppDir
        openGraph={{
          title: pageTitle,
          description: pageDescription,
        }}
        canonical="https://caspertheghost.me/projects"
        title={pageTitle}
        description={pageDescription}
        additionalMetaTags={[
          {
            name: "keywords",
            content: [
              ...DEFAULT_KEYWORDS,
              "projects casper iversen",
              "caspertheghost projects",
              "react hooks",
            ].join(", "),
          },
        ]}
      />
    </head>
  );
}
