import { GalleryImage, GalleryImages } from "@ronin/casper";
import ronin from "ronin";
import { ImageModal } from "~/components/gallery/image-modal";

interface ImageModalPageProps {
  params: { id: `rec_${string}` };
}

export default async function ImageModalPage({ params }: ImageModalPageProps) {
  const [image] = await ronin<GalleryImage | null>(({ get }) => {
    get.galleryImage = {
      where: { galleryType: { is: "imagery" }, id: { is: params.id } },
      limitedTo: 1000,
    };
  });

  if (!image) {
    return null;
  }

  return (
    <ImageModal
      key={image.media.key}
      src={image.media.src}
      width={image.media.meta.width / 2}
      height={image.media.meta.height / 2}
      alt={image.title}
      blurDataURL={image.media.placeholder.base64 || undefined}
      id={image.id}
    />
  );
}

export async function generateStaticParams() {
  const [data] = await ronin<GalleryImages>(({ get }) => {
    get.galleryImages = {
      where: { galleryType: { is: "imagery" } },
      limitedTo: 1000,
    };
  });

  return data.map((image) => ({
    id: image.id,
  }));
}
