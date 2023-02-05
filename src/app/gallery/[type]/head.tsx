import { NextSeo } from "next-seo";
import { SEO } from "next-seo.config";

export default function Head({ params }: { params: { type: string } }) {
  return (
    <NextSeo
      useAppDir
      {...SEO}
      openGraph={{
        ...SEO.openGraph,
        title: `${params.type} - Casper Iversen`,
      }}
      canonical={`https://caspertheghost.me/gallery/${params.type}`}
      title={`${params.type} - Casper Iversen`}
    />
  );
}
