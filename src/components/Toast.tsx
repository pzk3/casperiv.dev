import * as React from "react";
import { usePortal } from "@casper124578/useful";
import { createPortal } from "react-dom";
import styles from "css/toast.module.scss";

interface Props {
  message: string;
  active?: boolean;

  onClose?: () => void;
  closeAfterMs?: number;
}

export const Toast = (props: Props) => {
  const portal = usePortal("Toast");
  const ref = React.useRef<HTMLDivElement>(null);

  const [shouldClose, setShouldClose] = React.useState(true);

  React.useEffect(() => {
    const timeouts = [];

    if (props.closeAfterMs && shouldClose && ref.current) {
      const timeout1 = setTimeout(() => {
        // first animate the removal of the toast
        ref.current.classList.add(styles.toastHidden);
      }, props.closeAfterMs);

      // then fully close the toast
      const timeout2 = setTimeout(() => {
        props.onClose();

        // +500ms, 500ms is the time to animate the toast
      }, props.closeAfterMs + 500);

      // so these can be cleared when the component un-mounts
      timeouts.push(timeout1, timeout2);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [shouldClose, props]);

  function handleClick() {
    if (!props.active) return;
    if (!props.onClose) return;

    props.onClose();
  }

  if (!portal) return null;

  // do this so it doesn't take time to create the portal initially.
  const html = props.active ? (
    <div
      ref={ref}
      onMouseOut={() => setShouldClose(true)}
      onMouseEnter={() => setShouldClose(false)}
      onMouseOver={() => setShouldClose(false)}
      onClick={handleClick}
      className={styles.toast}
    >
      <p>{props.message}</p>
    </div>
  ) : (
    <p />
  );

  return createPortal(html, portal);
};
