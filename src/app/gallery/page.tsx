import { GalleryImages } from "@ronin/casper";
import { Gallery } from "~/components/gallery/columns";
import { mergeSeo } from "~/lib/merge-seo";
import ronin from "ronin";

export const revalidate = 600; // 10 minutes

export async function generateMetadata() {
  return mergeSeo({
    title: "Imagery",
    description: "Imagery works taken in my free time",
    alternates: {
      canonical: "https://caspertheghost.me/gallery",
    },
    openGraph: {
      title: "Imagery",
      description: "Imagery works taken in my free time",
    },
    twitter: {
      title: "Imagery",
      description: "Imagery works taken in my free time",
    },
  });
}

export default async function SubGalleryPage() {
  const [data] = await ronin<GalleryImages>(({ get }) => {
    get.galleryImages = {
      where: {
        galleryType: { is: "imagery" },
      },
      limitedTo: 1000,
      orderedBy: {
        descending: ["ronin.updatedAt"],
      },
    };
  });

  const columns = makeColumns(data);

  return (
    <main className="mt-16 mx-auto max-w-6xl pb-6 px-5 md:px-0">
      <h1 className="text-3xl font-bold capitalize md:text-4xl font-title">Imagery</h1>

      <Gallery columns={columns} />
    </main>
  );
}

function makeColumns(images: GalleryImages) {
  const COLUMN_COUNT = 3;

  const columns: GalleryImages[] = [];

  for (let i = 0; i < images.length; i++) {
    const column = columns[i % COLUMN_COUNT] || [];
    const image = images[i]!;

    column.push(image);
    columns[i % COLUMN_COUNT] = column;
  }

  return columns;
}
