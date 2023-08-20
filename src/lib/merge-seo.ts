import { Metadata } from "next";
import { SEO } from "~/seo-config";
import deepmerge from "deepmerge";

export function mergeSeo<T extends Omit<Metadata, "metadataBase">>(metadata: T): Metadata {
  const seoBase = deepmerge(SEO, metadata, {
    arrayMerge: (dest, source) => [...dest, ...source],
  });

  if (metadata.openGraph?.images && seoBase.openGraph) {
    seoBase.openGraph.images = metadata.openGraph.images;
  }

  if (metadata.twitter?.images && seoBase.twitter) {
    seoBase.twitter.images = metadata.twitter.images;
  }

  return {
    ...seoBase,
    metadataBase: new URL("https://casperiv.dev"),
  };
}
