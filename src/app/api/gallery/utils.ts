import ronin from "ronin";
import { GalleryImages } from "@ronin/casper";

export interface GetGalleryImagesQuery {
  moreAfter?: string;
  data: GalleryImages;
}

export async function getGalleryImagesServer(
  after?: string | null,
): Promise<GetGalleryImagesQuery> {
  const [data] = await ronin<GalleryImages>(({ get }) => {
    get.galleryImages = {
      limitedTo: 9,
      // eslint-disable-next-line eqeqeq
      after: after != null ? after : undefined,
      orderedBy: {
        descending: ["ronin.createdAt"],
      },
    };
  });

  return { data, moreAfter: data.moreAfter };
}
