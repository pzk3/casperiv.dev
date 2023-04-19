"use client";

import * as React from "react";
import Image, { ImageProps } from "next/image";
import { ImageModal } from "./image-modal";
import { GalleryImages } from "@ronin/casper";

export function Gallery({ columns }: { columns: GalleryImages[] }) {
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
      {columns.map((column, i) => (
        <Column key={i}>
          {column.map((image) => (
            <ImageItem
              key={image.media.key}
              src={image.media.src}
              width={image.media.meta.width}
              height={image.media.meta.height}
              alt={image.title}
              blurDataURL={image.media.placeholder.base64 || undefined}
            />
          ))}
        </Column>
      ))}
    </div>
  );
}

function Column(props: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3">{props.children}</div>;
}

function ImageItem(props: ImageProps) {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="relative w-full h-fit overflow-hidden rounded-lg shadow-lg cursor-zoom-in">
      <Image
        onClick={() => setModalOpen(true)}
        placeholder="blur"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
        {...props}
        loader={(props) => `${props.src}?w=${props.width}&q=${props.quality}`}
      />

      {isModalOpen ? <ImageModal onClose={() => setModalOpen(false)} {...props} /> : null}
    </div>
  );
}
