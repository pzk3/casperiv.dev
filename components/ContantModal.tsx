import XIcon from "./icons/XIcon";

interface Props {
  shown: boolean;
  onClose: () => void;
  options: {
    title: string;
    body: string;
  };
}

const ContactModal = ({ onClose, shown, options }: Props) => {
  return (
    <div className={`modal__container ${shown ? "modal--active" : ""}`}>
      <div className="modal">
        <header className="modal__header">
          {options.title}

          <button onClick={() => onClose()} className="close close__modal">
            <XIcon />
          </button>
        </header>

        <div className="modal__body">{options.body}</div>
      </div>
    </div>
  );
};

export default ContactModal;
