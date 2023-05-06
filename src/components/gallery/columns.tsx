"use client";

import * as React from "react";
import Image, { ImageProps } from "next/image";
import { GalleryImages } from "@ronin/casper";
import Link from "next/link";

export function Gallery({ columns }: { columns: GalleryImages[] }) {
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
      {columns.map((column, i) => (
        <Column key={i}>
          {column.map((image) => {
            return (
              <ImageItem
                key={image.media.key}
                src={image.media.src}
                width={image.media.meta.width / 4}
                height={image.media.meta.height / 4}
                alt={image.title}
                blurDataURL={image.media.placeholder.base64 || undefined}
                id={image.id}
              />
            );
          })}
        </Column>
      ))}
    </div>
  );
}

function Column(props: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-3">{props.children}</div>;
}

function ImageItem(props: ImageProps) {
  return (
    <Link href={`/photo/${props.id}`}>
      <Image
        className="relative w-full h-fit overflow-hidden shadow-lg cursor-zoom-in object-cover"
        placeholder="blur"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
        quality={60}
        {...props}
      />
    </Link>
  );
}
