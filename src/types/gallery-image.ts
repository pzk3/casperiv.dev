export interface GalleryImage {
  title: string;
  galleryType: "imagery" | "design-works";
  media: {
    key: string;
    src: string;
    meta: {
      size: number;
      type: string;
      width: number;
      height: number;
    };
    placeholder: {
      base64: string;
    };
  };
}
