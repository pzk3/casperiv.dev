import { Metadata } from "next";
import { SEO } from "~/seo-config";
import deepmerge from "deepmerge";

export function mergeSeo<T extends Metadata>(metadata: T) {
  return deepmerge(SEO, metadata, {
    arrayMerge: (dest, source) => [...dest, ...source],
  });
}
