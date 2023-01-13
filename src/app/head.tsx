import { NextSeo } from "next-seo";
import { SEO } from "next-seo.config";
import Script from "next/script";

export default function RootHead() {
  return (
    <>
      <NextSeo useAppDir {...SEO} />
      <Script
        async
        defer
        strategy="afterInteractive"
        data-website-id={process.env.UMAMI_SITE_ID}
        src={process.env.UMAMI_URL}
      />
    </>
  );
}
