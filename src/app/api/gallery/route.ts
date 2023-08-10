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
      limitedTo: 20,
      after,
      orderedBy: {
        descending: ["ronin.updatedAt"],
      },
    };
  });

  console.log({ data, moreAfter: data.moreAfter });

  return NextResponse.json<GetGalleryImagesQuery>({ data, moreAfter: data.moreAfter });
}
