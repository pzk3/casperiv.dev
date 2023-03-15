import { Gallery } from "components/gallery/columns";
import { mergeSeo } from "lib/merge-seo";
import ronin from "ronin";
import { GalleryImage } from "types/gallery-image";

export const revalidate = 600; // 10 minutes

export async function generateMetadata({ params }: { params: { type: string } }) {
  return mergeSeo({
    title: params.type,
    description: "Imagery works taken in my free time",
    alternates: {
      canonical: `https://caspertheghost.me/gallery/${params.type}`,
    },
    openGraph: {
      title: params.type,
      description: "Imagery works taken in my free time",
    },
    twitter: {
      title: params.type,
      description: "Imagery works taken in my free time",
    },
  });
}

export default async function SubGalleryPage({ params }: { params: { type: string } }) {
  const [data] = await ronin<GalleryImage[]>(({ get }) => {
    get.galleryImages = {
      where: {
        galleryType: { is: params.type },
      },
      limitedTo: 1000,
      orderedBy: {
        descending: ["ronin.updatedAt"],
      },
    };
  });

  const columns = makeColumns(data);

  return (
    <>
      <h1 className="text-3xl font-bold capitalize md:text-4xl">
        {params.type === "design-works" ? "Design Works" : "Imagery"}
      </h1>

      <Gallery columns={columns} />
    </>
  );
}

export async function generateStaticParams() {
  return [{ type: "design-works" }, { type: "imagery" }];
}

function makeColumns(images: GalleryImage[]) {
  const COLUMN_COUNT = 3;

  const columns: GalleryImage[][] = [];

  for (let i = 0; i < images.length; i++) {
    const column = columns[i % COLUMN_COUNT] || [];
    const image = images[i]!;

    column.push(image);
    columns[i % COLUMN_COUNT] = column;
  }

  return columns;
}
