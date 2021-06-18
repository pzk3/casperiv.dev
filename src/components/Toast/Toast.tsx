import * as React from "react";
import { usePortal } from "@casper124578/useful";
import { createPortal } from "react-dom";
import styles from "./toast.module.scss";

interface Props {
  message: string;
  active?: boolean;

  onClose?: () => void;
  closeAfterMs?: number;
}

export const Toast = (props: Props) => {
  const portal = usePortal("Toast");
  const ref = React.useRef<HTMLDivElement>(null);

  const handleCloseAnimation = React.useCallback(
    (ms: number) => {
      const timeouts = [];

      if (ref.current) {
        const timeout1 = setTimeout(() => {
          // first animate the removal of the toast
          ref.current?.classList.add(styles.toastHidden);
        }, ms);

        // then fully close the toast
        const timeout2 = setTimeout(() => {
          props.onClose();

          // +500ms, 500ms is the time to animate the toast
        }, ms + 500);

        // so these can be cleared when the component un-mounts
        timeouts.push(timeout1, timeout2);
      }

      return timeouts;
    },
    [props],
  );

  React.useEffect(() => {
    const timeouts = handleCloseAnimation(props.closeAfterMs);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [handleCloseAnimation, props.closeAfterMs]);

  function handleClick() {
    if (!props.active) return;
    if (!props.onClose) return;

    handleCloseAnimation(1);
  }

  if (!portal) return null;

  // do this so it doesn't take time to create the portal initially.
  const html = props.active ? (
    <div ref={ref} onClick={handleClick} className={styles.toast}>
      <p>{props.message}</p>
    </div>
  ) : (
    <p />
  );

  return createPortal(html, portal);
};
