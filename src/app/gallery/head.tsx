import { NextSeo } from "next-seo";

const pageTitle = "Gallery - Casper Iversen";
const pageDescription = "";

export default function GalleryHead() {
  return (
    <NextSeo
      useAppDir
      openGraph={{ title: pageTitle, description: pageDescription }}
      canonical="https://caspertheghost.me/about"
      title={pageTitle}
      description={pageDescription}
    />
  );
}
