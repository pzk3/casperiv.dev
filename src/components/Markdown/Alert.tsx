import * as React from "react";
import styles from "css/blog.module.scss";
import { WarnIcon } from "@components/icons/Warn";
import { ErrorIcon } from "@components/icons/Error";
import { InfoIcon } from "@components/icons/Info";
import { classes } from "@lib/classes";

type AlertIconType = "info" | "error" | "warn";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  type: AlertIconType;
  children: React.ReactChild;
}

export const Alert = ({ children, type, ...rest }: Props) => {
  return (
    <div className={classes(styles.alert, styles[type])} {...rest}>
      <Icon type={type} />
      <span>{children}</span>
    </div>
  );
};

const Icon = ({ type }: { type: AlertIconType }) => {
  switch (type) {
    case "error":
      return <ErrorIcon height="20" width="20" />;
    case "info":
      return <InfoIcon height="20" width="20" />;
    case "warn":
      return <WarnIcon height="20" width="20" />;
    default:
      return null;
  }
};
