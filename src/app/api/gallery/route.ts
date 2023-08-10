import { GalleryImages } from "@ronin/casper";
import { NextResponse } from "next/server";
import ronin from "ronin";

export interface GetGalleryImagesQuery {
  moreAfter?: string;
  data: GalleryImages;
}

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;

  const rawAfter = searchParams.get("after");
  const after = rawAfter !== null ? parseInt(rawAfter, 10) : undefined;

  const [data] = await ronin<GalleryImages>(({ get }) => {
    get.galleryImages = {
      limitedTo: 9,
      after,
      orderedBy: {
        descending: ["ronin.createdAt"],
      },
    };
  });

  return NextResponse.json<GetGalleryImagesQuery>({ data, moreAfter: data.moreAfter });
}
