import { FC } from "react";
import XIcon from "./icons/XIcon";

interface Props {
  onClose: () => void;
  options: {
    title: string;
    body: string;
  } | null;
}

const ContactModal: FC<Props> = ({ onClose, options }: Props) => {
  return (
    <div className="modal__container">
      <div className="modal">
        <header className="modal__header">
          {options?.title}

          <button onClick={() => onClose()} className="close close__modal">
            <XIcon />
          </button>
        </header>

        <div className="modal__body">{options?.body}</div>
      </div>
    </div>
  );
};

export default ContactModal;
