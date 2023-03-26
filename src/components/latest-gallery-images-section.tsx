import { GalleryImages } from "@ronin/casper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

interface Props {
  latestGalleryImages: GalleryImages;
}

export function LatestGalleryImagesSection({ latestGalleryImages }: Props) {
  return (
    <section className="pt-5 mb-10">
      <h1 className="text-3xl font-bold capitalize md:text-4xl">Latest Imagery</h1>
      <p className="mb-4 mt-2 text-secondary-light">
        <span className="mr-2">
          I love taking photos and sharing them with the world. Here are some of my latest images.
        </span>
        <Link
          className="underline inline-flex items-center gap-2 group transition-colors hover:text-neutral-800"
          href="/gallery/imagery"
        >
          View all
          <ArrowRight className="group-hover:fill-neutral-800 transition-colors" />
        </Link>
      </p>

      <Link
        href="/gallery/imagery"
        className="w-full grid grid-cols-3 mt-3 rounded-md overflow-hidden"
      >
        {latestGalleryImages.map((image) => (
          <Image
            loading="lazy"
            className="w-full object-cover h-full max-h-48"
            key={image.id}
            src={image.media.src}
            alt={image.title}
            width={image.media.meta.width}
            height={image.media.meta.height}
            placeholder="blur"
            blurDataURL={image.media.placeholder.base64}
          />
        ))}
      </Link>
    </section>
  );
}
