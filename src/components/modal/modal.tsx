import * as Dialog from "@radix-ui/react-dialog";
import { X } from "react-bootstrap-icons";

export function Modal(props: Dialog.DialogProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
        <Dialog.Content className="fixed overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 grid place-content-center bg-primary z-50 max-w-5xl w-[800px] h-fit p-4 rounded-md border border-secondary">
          {props.children}

          <Dialog.Close
            aria-label="Close modal"
            className="absolute top-0 right-0 p-3 bg-primary rounded-bl-md border-b border-l border-secondary"
          >
            <X className="w-6 h-6" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
