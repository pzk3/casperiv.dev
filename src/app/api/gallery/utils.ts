import ronin from "ronin";
import { GalleryImages } from "@ronin/casper";

export interface GetGalleryImagesQuery {
  moreAfter?: string;
  data: GalleryImages;
}

export async function getGalleryImagesServer(after?: number): Promise<GetGalleryImagesQuery> {
  const [data] = await ronin<GalleryImages>(({ get }) => {
    get.galleryImages = {
      limitedTo: 9,
      after,
      orderedBy: {
        descending: ["ronin.createdAt"],
      },
    };
  });

  return { data, moreAfter: data.moreAfter };
}
