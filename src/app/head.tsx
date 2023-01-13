import { NextSeo } from "next-seo";
import { SEO } from "next-seo.config";

export default function RootHead() {
  return (
    <>
      <NextSeo useAppDir {...SEO} />

      <script async defer data-website-id={process.env.UMAMI_SITE_ID} src={process.env.UMAMI_URL} />
    </>
  );
}
