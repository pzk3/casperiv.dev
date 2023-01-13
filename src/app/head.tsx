import { NextSeo } from "next-seo";
import { SEO } from "next-seo.config";

export default function RootHead() {
  return (
    <>
      <NextSeo useAppDir {...SEO} />

      {process.env.NODE_ENV === "production" ? (
        <script
          async
          defer
          data-website-id={process.env.UMAMI_SITE_ID}
          src={process.env.UMAMI_URL}
        />
      ) : null}
    </>
  );
}
