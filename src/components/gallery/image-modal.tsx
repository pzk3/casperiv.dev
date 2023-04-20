import { Modal } from "components/modal/modal";
import Image, { ImageProps } from "next/image";

export function ImageModal(props: ImageProps & { onClose(): void }) {
  return (
    <Modal open onOpenChange={props.onClose}>
      <Image
        className="shadow-sm"
        placeholder="blur"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
        {...props}
      />
    </Modal>
  );
}
