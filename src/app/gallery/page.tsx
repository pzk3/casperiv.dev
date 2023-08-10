import { GalleryImages } from "@ronin/casper";
import { Gallery } from "~/components/gallery/columns";
import { mergeSeo } from "~/lib/merge-seo";

export const revalidate = 600; // 10 minutes

export async function generateMetadata() {
  return mergeSeo({
    title: "Gallery",
    description: "Gallery works taken in my free time",
    alternates: {
      canonical: "https://casperiv.dev/gallery",
    },
    openGraph: {
      title: "Gallery",
      description: "Gallery works taken in my free time",
    },
    twitter: {
      title: "Gallery",
      description: "Gallery works taken in my free time",
    },
  });
}

export default async function SubGalleryPage() {
  const url = process.env.VERCEL_URL || "http://localhost:3000";
  const res = await fetch(`${url}/api/gallery`);
  const data = (await res.json()) as GalleryImages;

  return (
    <main className="mt-16 mx-auto max-w-6xl pb-6 px-5 md:px-0">
      <h1 className="text-3xl font-bold capitalize md:text-4xl font-title">Gallery</h1>

      <Gallery initialData={data} />
    </main>
  );
}
