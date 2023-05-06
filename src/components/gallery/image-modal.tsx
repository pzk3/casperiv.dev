"use client";

import { Modal } from "~/components/modal/modal";
import Image, { ImageProps } from "next/image";
import { useRouter } from "next/navigation";

export function ImageModal(props: ImageProps) {
  const router = useRouter();

  function handleClose() {
    router.back();
  }

  return (
    <Modal open onOpenChange={handleClose}>
      <Image
        className="shadow-sm"
        placeholder="blur"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
        {...props}
        quality={85}
      />
    </Modal>
  );
}
