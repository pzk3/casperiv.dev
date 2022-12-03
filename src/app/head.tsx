import { NextSeo } from "next-seo";
import { SEO } from "next-seo.config";

export default function RootHead() {
  return <NextSeo useAppDir {...SEO} />;
}
