import { GalleryImage, GalleryImages } from "@ronin/casper";
import ronin from "ronin";
import { ImageComponent } from "./component";
import { Metadata } from "next";

interface ImageModalPageProps {
  params: { id: `rec_${string}` };
}

export async function generateMetadata(props: ImageModalPageProps): Promise<Metadata> {
  const [image] = await ronin<GalleryImage | null>(({ get }) => {
    get.galleryImage = {
      where: { galleryType: { is: "imagery" }, id: { is: props.params.id } },
      limitedTo: 1000,
    };
  });

  if (!image) {
    return {};
  }

  return {
    title: `${image.title} - Gallery`,
    openGraph: {
      title: `${image.title} - Gallery`,
      images: [
        {
          url: `${image.media.src}?q=75`,
          width: image.media.meta.width,
          height: image.media.meta.height,
        },
      ],
    },
    twitter: {
      title: `${image.title} - Gallery`,
      images: [
        {
          url: `${image.media.src}?q=75`,
          width: image.media.meta.width,
          height: image.media.meta.height,
        },
      ],
    },
    alternates: {
      canonical: `https://caspertheghost.me/gallery/${image.id}`,
    },
  };
}

export default async function ImageModalPage(props: ImageModalPageProps) {
  const [image] = await ronin<GalleryImage | null>(({ get }) => {
    get.galleryImage = {
      where: { galleryType: { is: "imagery" }, id: { is: props.params.id } },
      limitedTo: 1000,
    };
  });

  if (!image) {
    return null;
  }

  return (
    <ImageComponent
      title={image.title}
      imageProps={{
        src: image.media.src,
        width: image.media.meta.width / 2,
        height: image.media.meta.height / 2,
        alt: image.title,
        blurDataURL: image.media.placeholder.base64 || undefined,
        id: image.id,
      }}
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
