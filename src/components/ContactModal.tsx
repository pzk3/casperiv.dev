import { FC } from "react";
import XIcon from "./icons/XIcon";
import styles from "css/modal.module.scss";

interface Props {
  onClose: () => void;
  options: {
    title: string;
    body: string;
  } | null;
}

const ContactModal: FC<Props> = ({ onClose, options }: Props) => {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <header className={styles.modalHeader}>
          {options?.title}

          <button onClick={() => onClose()} className={styles.closeModal}>
            <XIcon />
          </button>
        </header>

        <div className={styles.modalBody}>{options?.body}</div>
      </div>
    </div>
  );
};

export default ContactModal;
