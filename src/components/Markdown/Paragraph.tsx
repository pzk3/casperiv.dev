import * as React from "react";
import Image from "next/image";
import { imageSizes } from "types/ImageSizes";

interface Props {
  inline: boolean;
  className: string;
}

const MDParagraph: React.FC<Props> = (props) => {
  const hasImage = (props.children as Array<Record<string, unknown>>).find(
    (c) => typeof c !== "string" && c.type === "img",
  );

  if (hasImage) {
    const size = imageSizes[(hasImage.props as Record<string, string>).alt];

    return (
      <div style={{ maxWidth: "60%" }}>
        <Image
          decoding="async"
          draggable={false}
          loading="lazy"
          width={size.width}
          height={size.height}
          src={(hasImage.props as Record<string, string>).src}
          alt={(hasImage.props as Record<string, string>).alt}
        />
      </div>
    );
  }

  return <p>{props.children}</p>;
};

export default MDParagraph;
