import cloudinary from "lib/cloudinary";
import generateBlurPlaceholder from "lib/cloudinary/generate-blur-placeholder";
import { TCloudinaryImage } from "lib/cloudinary/types";
import { Gallery } from "components/gallery/columns";

export const dynamic = "force-static";
export const revalidate = 604800; // 1 week. Next.js does not support: `60 * 60 * 24 * 7`

export function generateMetadata({ params }: { params: { type: string } }) {
  return {
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
  };
}

export default async function SubGalleryPage({ params }: { params: { type: string } }) {
  const images = await getImages(params.type);
  const columns = makeColumns(images);

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

async function getImages(folderType: string) {
  const images = (await cloudinary.search
    .expression(`folder:${folderType}/*`)
    .sort_by("public_id", "asc")
    .max_results(100)
    .execute()) as { resources: TCloudinaryImage[] };

  return Promise.all(
    images.resources.map(async (image) => ({
      ...image,
      placeholderData: await generateBlurPlaceholder(image),
    })),
  );
}

function makeColumns(images: TCloudinaryImage[]) {
  const COLUMN_COUNT = 3;

  const columns: TCloudinaryImage[][] = [];

  for (let i = 0; i < images.length; i++) {
    const column = columns[i % COLUMN_COUNT] || [];

    column.push({ ...images[i]!, alt: "test" });
    columns[i % COLUMN_COUNT] = column;
  }

  return columns;
}
