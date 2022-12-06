"use client";

import * as React from "react";
import { TCloudinaryImage } from "lib/cloudinary/types";
import Image, { ImageProps } from "next/image";
import { ImageModal } from "./image-modal";

export function Gallery({ columns }: { columns: TCloudinaryImage[][] }) {
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
      {columns.map((column, i) => (
        <Column key={i}>
          {column.map((image) => (
            <ImageItem
              key={image.public_id}
              src={image.secure_url}
              width={image.width}
              height={image.height}
              alt="Beautiful rainbow."
              blurDataURL={image.placeholderData}
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
      />

      {isModalOpen ? <ImageModal onClose={() => setModalOpen(false)} {...props} /> : null}
    </div>
  );
}
