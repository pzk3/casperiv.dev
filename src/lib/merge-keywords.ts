import type { MetaTag } from "next-seo/lib/types";

interface MergeKeywordsOptions {
  keywords: string[];
  metaTags?: readonly MetaTag[];
}

export function mergeKeywords(options: MergeKeywordsOptions) {
  const metaTags = options.metaTags?.slice() ?? [];
  const keywordsMetaTag = metaTags.find((tag) => tag.name === "keywords");

  if (keywordsMetaTag) {
    const keywordsMetaTagContent = keywordsMetaTag.content.split(",");

    const mergedKeywords = Array.from(new Set([...options.keywords, ...keywordsMetaTagContent]));

    metaTags.splice(metaTags.indexOf(keywordsMetaTag), 1, {
      name: "keywords",
      content: mergedKeywords.join(", "),
    });
  } else {
    metaTags.push({
      name: "keywords",
      content: options.keywords.join(", "),
    });
  }

  return metaTags;
}
