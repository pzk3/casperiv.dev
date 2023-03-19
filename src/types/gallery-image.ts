import { Media } from "@ronin/casper";

export interface GalleryImage {
  title: string;
  galleryType: "imagery" | "design-works";
  media: Media;
}
